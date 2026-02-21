import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Estrutura futura para IA real
// import * as tf from "@tensorflow/tfjs";

const btn = document.getElementById("btnRegistrar");
const assistente = document.getElementById("assistente");

function saudacao() {
  const hora = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  const h = new Date(hora).getHours();
  if (h < 12) return "Bom dia";
  if (h < 18) return "Boa tarde";
  return "Boa noite";
}

function falar(msg) {
  assistente.innerText = `${saudacao()}! ${msg}`;
}

function calcularRisco(freq, faltas) {
  let score = 0;

  if (freq < 75) score += 30;
  if (freq < 65) score += 30;
  if (faltas >= 3) score += 20;
  if (faltas >= 5) score += 10;

  if (score >= 70) return "ALTO RISCO";
  if (score >= 40) return "RISCO MODERADO";
  return "BAIXO RISCO";
}

btn.addEventListener("click", async () => {

  const nome = document.getElementById("nomeAluno").value.trim();
  const freq = parseFloat(document.getElementById("frequenciaAluno").value);
  const faltas = parseInt(document.getElementById("faltasConsecutivas").value);

  if (!nome) {
    falar("O nome completo é obrigatório.");
    return;
  }

  if (isNaN(freq) || freq < 0 || freq > 100) {
    falar("A frequência deve estar entre 0 e 100%.");
    return;
  }

  if (isNaN(faltas) || faltas < 0) {
    falar("Informe corretamente as faltas consecutivas.");
    return;
  }

  const risco = calcularRisco(freq, faltas);

  await addDoc(collection(db, "alunos"), {
    nome,
    frequencia: freq,
    faltasConsecutivas: faltas,
    nivelRisco: risco,
    dataRegistro: new Date()
  });

  let cor = risco === "ALTO RISCO" ? "red"
          : risco === "RISCO MODERADO" ? "orange"
          : "green";

  document.getElementById("resultado").innerHTML =
    `<p>Status: ${freq >= 75 ? "Frequência Adequada" : "Atenção – Acompanhamento necessário"}</p>
     <p style="color:${cor}; font-weight:bold;">Nível de Risco: ${risco}</p>`;

  falar("Registro concluído com análise preditiva realizada.");

  atualizarDashboard();
});

async function atualizarDashboard() {
  const snapshot = await getDocs(collection(db, "alunos"));
  let total = snapshot.size;
  let riscoAlto = 0;
  let riscoModerado = 0;
  let somaFreq = 0;

  snapshot.forEach(doc => {
    const data = doc.data();
    somaFreq += data.frequencia;

    if (data.nivelRisco === "ALTO RISCO") riscoAlto++;
    if (data.nivelRisco === "RISCO MODERADO") riscoModerado++;
  });

  const media = total > 0 ? (somaFreq / total).toFixed(1) : 0;

  document.getElementById("dashboard").innerHTML =
    `<p><strong>Total de alunos:</strong> ${total}</p>
     <p><strong>Média geral de frequência:</strong> ${media}%</p>
     <p style="color:red;"><strong>Alto risco:</strong> ${riscoAlto}</p>
     <p style="color:orange;"><strong>Risco moderado:</strong> ${riscoModerado}</p>`;
}

falar("Qual é o próximo aluno que deseja registrar?");
atualizarDashboard();
