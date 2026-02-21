# 🚀 Deploy Seguro e Gratuito - GitHub Pages

## ✅ Opção Segura e Recomendada

O **GitHub Pages** é a opção mais segura, gratuita e confiável para hospedar o SAE 4.0 permanentemente.

---

## 📋 Passo 1: Criar Repositório no GitHub

### 1.1 Acesse GitHub
- Vá para https://github.com/new
- Se não tiver conta, crie uma em https://github.com/signup (é gratuito)

### 1.2 Preencha os Dados
- **Repository name**: `sae-4.0`
- **Description**: `SAE 4.0 - Plataforma Inteligente de Prevenção de Evasão Escolar`
- **Visibility**: Escolha **Public** (necessário para GitHub Pages funcionar)
- **Initialize this repository with**: Deixe em branco (não marque nada)

### 1.3 Clique em "Create repository"

---

## 📤 Passo 2: Fazer Upload dos Arquivos

Você tem **2 opções**:

### Opção A: Upload Direto (Mais Fácil - Sem Git)
1. No repositório criado, clique em "Add file" → "Upload files"
2. Arraste todos os arquivos da pasta `sae-4.0` para a área de upload
3. Certifique-se de incluir:
   - `index.html`
   - `style.css`
   - `app.js`
   - `firebase-config.js`
   - `manifest.json`
   - `service-worker.js`
   - `package.json`
   - `.nojekyll`
   - Pasta `icons/` com os ícones
4. Clique em "Commit changes"

### Opção B: Upload via Git (Mais Profissional)
Execute os comandos abaixo no terminal:

```bash
cd /home/ubuntu/sae-4.0
git remote add origin https://github.com/SEU_USUARIO/sae-4.0.git
git branch -M main
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu nome de usuário do GitHub**

---

## ⚙️ Passo 3: Ativar GitHub Pages

### 3.1 Vá para Configurações
1. No seu repositório, clique em **"Settings"** (aba no topo)

### 3.2 Ative GitHub Pages
1. Na esquerda, clique em **"Pages"**
2. Em "Build and deployment":
   - **Source**: Selecione **"Deploy from a branch"**
   - **Branch**: Selecione **"main"** (ou "master" se for a padrão)
   - **Folder**: Selecione **"/ (root)"**
3. Clique em **"Save"**

### 3.3 Aguarde o Deploy
- GitHub Pages levará 1-2 minutos para processar
- Você verá uma mensagem verde: "Your site is published at..."

---

## 🌐 Passo 4: Acessar Seu Site

Sua URL permanente será:

```
https://SEU_USUARIO.github.io/sae-4.0
```

**Exemplo**: Se seu usuário for `joao-silva`, a URL será:
```
https://joao-silva.github.io/sae-4.0
```

---

## 🔧 Configurar Firebase (Importante!)

Após o site estar online:

1. Acesse sua URL: `https://SEU_USUARIO.github.io/sae-4.0`
2. Abra o Console do Navegador (pressione **F12**)
3. Você verá erros de autenticação do Firebase
4. Para corrigir:
   - Vá para https://console.firebase.google.com
   - Crie um novo projeto (ou use um existente)
   - Copie suas credenciais (API Key, Project ID, etc.)
   - Edite o arquivo `firebase-config.js` no repositório:
     ```javascript
     const firebaseConfig = {
       apiKey: "SUA_API_KEY_AQUI",
       authDomain: "seu-projeto.firebaseapp.com",
       projectId: "seu-projeto-id",
       storageBucket: "seu-projeto.appspot.com",
       messagingSenderId: "seu-id",
       appId: "seu-app-id"
     };
     ```
   - Faça commit e push das mudanças
   - GitHub Pages reconstruirá automaticamente (1-2 minutos)

---

## ✨ Recursos do GitHub Pages

| Recurso | Descrição |
|---|---|
| **Custo** | Gratuito |
| **Uptime** | 99.9% (confiável) |
| **SSL/HTTPS** | Automático e gratuito |
| **Domínio Customizado** | Opcional (você pode usar seu próprio domínio) |
| **Atualizações** | Automáticas quando você faz push |
| **Privacidade** | Você controla (repositório público/privado) |

---

## 🔐 Segurança

- ✅ Hospedado em servidores da Microsoft (GitHub)
- ✅ HTTPS automático e gratuito
- ✅ Sem anúncios
- ✅ Sem rastreamento
- ✅ Você tem controle total do código
- ✅ Histórico completo de versões (Git)

---

## 📞 Suporte

Se tiver dúvidas:
- Documentação GitHub Pages: https://pages.github.com
- Guia GitHub: https://docs.github.com/pt/pages
- Comunidade GitHub: https://github.community

---

## 🎉 Pronto!

Após completar os 4 passos, seu site **SAE 4.0** estará:
- ✅ Online permanentemente
- ✅ Seguro (HTTPS)
- ✅ Gratuito
- ✅ Com URL própria
- ✅ Acessível de qualquer lugar

**Parabéns! Seu projeto está no ar! 🚀**
