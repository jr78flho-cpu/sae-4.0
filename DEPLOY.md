# 🚀 Instruções de Deploy Permanente - SAE 4.0

## Opção 1: Deploy no Vercel (Recomendado - Mais Fácil)

### Passo 1: Acessar Vercel
1. Vá para https://vercel.com
2. Clique em "Sign Up" e escolha "Continue with GitHub" (ou outra opção)
3. Autorize a conexão

### Passo 2: Importar Projeto
1. Clique em "New Project"
2. Selecione "Import Git Repository"
3. Cole a URL do seu repositório GitHub: `https://github.com/seu-usuario/sae-4.0`
4. Clique em "Import"

### Passo 3: Configurar
1. **Project Name**: `sae-4.0` (ou outro nome desejado)
2. **Framework Preset**: Selecione "Other"
3. **Build Command**: deixe em branco ou `npm run build`
4. **Output Directory**: `.` (ponto)
5. **Environment Variables**: Deixe em branco por enquanto

### Passo 4: Deploy
1. Clique em "Deploy"
2. Aguarde o deployment terminar (2-3 minutos)
3. Você receberá uma URL permanente como: `https://sae-4-0.vercel.app`

---

## Opção 2: Deploy no GitHub Pages (Gratuito)

### Passo 1: Criar Repositório no GitHub
1. Vá para https://github.com/new
2. Nome: `sae-4.0`
3. Descrição: "SAE 4.0 - Plataforma Inteligente de Prevenção de Evasão Escolar"
4. Escolha "Public"
5. Clique em "Create repository"

### Passo 2: Fazer Upload dos Arquivos
```bash
git remote add origin https://github.com/seu-usuario/sae-4.0.git
git branch -M main
git push -u origin main
```

### Passo 3: Ativar GitHub Pages
1. Vá para "Settings" do repositório
2. Clique em "Pages" (na esquerda)
3. Em "Source", selecione "Deploy from a branch"
4. Escolha "main" branch e pasta "/ (root)"
5. Clique em "Save"

### Passo 4: Acessar o Site
Sua URL será: `https://seu-usuario.github.io/sae-4.0`

---

## Opção 3: Deploy no Netlify (Alternativa)

### Passo 1: Acessar Netlify
1. Vá para https://netlify.com
2. Clique em "Sign up"
3. Escolha "GitHub" para conectar

### Passo 2: Novo Site
1. Clique em "Add new site"
2. Escolha "Import an existing project"
3. Selecione seu repositório `sae-4.0`

### Passo 3: Configurar
1. **Build command**: deixe em branco
2. **Publish directory**: `.`
3. Clique em "Deploy site"

Sua URL será algo como: `https://sae-4-0.netlify.app`

---

## Configurar Firebase (Importante!)

Após o deploy, você DEVE configurar suas credenciais do Firebase:

1. Acesse seu site publicado
2. Abra o Console do Navegador (F12)
3. Você verá erros de autenticação do Firebase
4. Para corrigir:
   - Vá para https://console.firebase.google.com
   - Crie um novo projeto ou use um existente
   - Copie suas credenciais
   - Edite o arquivo `firebase-config.js` no repositório
   - Faça commit e push
   - O site será automaticamente reconstruído

---

## Resumo das URLs Permanentes

| Serviço | URL Exemplo | Tempo de Deploy |
|---|---|---|
| **Vercel** | `https://sae-4-0.vercel.app` | 2-3 min |
| **GitHub Pages** | `https://seu-usuario.github.io/sae-4.0` | 1-2 min |
| **Netlify** | `https://sae-4-0.netlify.app` | 2-3 min |

---

## Suporte

Qualquer dúvida, consulte a documentação oficial:
- Vercel: https://vercel.com/docs
- GitHub Pages: https://pages.github.com
- Netlify: https://docs.netlify.com
