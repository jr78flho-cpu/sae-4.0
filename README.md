# SAE 4.0 — Plataforma Inteligente de Prevenção de Evasão Escolar

## 📋 Descrição

O **SAE 4.0** é uma plataforma educacional inteligente desenvolvida como PWA (Progressive Web App) que utiliza análise preditiva heurística para identificar e prevenir a evasão escolar. O sistema monitora a frequência dos alunos e fornece alertas em tempo real sobre riscos potenciais.

## 🎯 Funcionalidades Principais

- **Cadastro Inteligente de Aluno**: Registro com validações robustas
- **Monitoramento de Frequência**: Regra única obrigatória ≥ 75%
- **Análise Preditiva de Risco**: Classificação em BAIXO, MODERADO e ALTO RISCO
- **Dashboard Administrativo**: Visualização de métricas em tempo real
- **Assistente Humano-Digital**: Integrado na interface com saudação por horário
- **PWA Instalável**: Funciona offline e pode ser instalado como app

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Backend**: Firebase Firestore
- **PWA**: Service Worker + Manifest
- **Design**: Responsivo e mobile-first

## 📁 Estrutura do Projeto

```
sae-4.0/
├── index.html           # Página principal
├── style.css            # Estilos CSS
├── app.js               # Lógica da aplicação
├── firebase-config.js   # Configuração Firebase
├── manifest.json        # Manifesto PWA
├── service-worker.js    # Service Worker para offline
├── icons/
│   ├── icon-192.png     # Ícone 192x192
│   └── icon-512.png     # Ícone 512x512
└── README.md            # Este arquivo
```

## 🚀 Como Usar

### 1. Configurar Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com)
2. Crie um novo projeto
3. Ative o Firestore Database
4. Copie suas credenciais
5. Abra `firebase-config.js` e substitua os valores:
   - `SUA_API_KEY`
   - `SEU_DOMINIO`
   - `SEU_PROJECT_ID`
   - `SEU_BUCKET`
   - `SEU_ID`
   - `SEU_APP_ID`

### 2. Executar Localmente

```bash
# Servir com um servidor local (Python)
python3 -m http.server 8000

# Ou com Node.js
npx http-server
```

Acesse `http://localhost:8000` no navegador.

### 3. Instalar como App

- **Android**: Clique em "Instalar" no menu do Chrome
- **iOS**: Clique em "Compartilhar" → "Adicionar à Tela Inicial"
- **Desktop**: Clique no ícone de instalação na barra de endereço

## 📊 Motor Preditivo de Risco

O sistema calcula o nível de risco baseado em:

| Critério | Pontos |
|---|---|
| Frequência < 75% | +30 |
| Frequência < 65% | +30 |
| Faltas consecutivas ≥ 3 | +20 |
| Faltas consecutivas ≥ 5 | +10 |

**Classificação**:
- **BAIXO RISCO**: Score < 40
- **RISCO MODERADO**: Score 40–69
- **ALTO RISCO**: Score ≥ 70

## 🎨 Design

- Paleta profissional com azul institucional (#1f2d3d)
- Layout responsivo para mobile, tablet e desktop
- Alto contraste e tipografia clara
- Experiência premium e moderna

## 🔐 Segurança

- Validação de dados no frontend
- Estrutura preparada para autenticação futura
- Código organizado e documentado
- Comentários técnicos claros

## 🔮 Evolução Futura

O projeto está preparado para:
- Machine Learning real com TensorFlow.js
- Relatórios automáticos
- Painel institucional multiusuário
- Controle por perfil de acesso
- Integração com sistemas escolares

## 📝 Licença

Desenvolvido por **Jair dos Santos Filho**

## 📧 Contato

Para dúvidas ou sugestões, entre em contato através do repositório.

---

**Versão**: 4.0 Final | **Tipo**: PWA + Firebase | **Status**: Pronto para Produção
