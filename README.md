# Portfólio — Flavio Monteiro

Site simples (HTML/CSS/JS puro, sem build) para exibir projetos de design
mecânico feitos em Fusion 360, Solid Edge e SolidWorks. Pronto para hospedar
gratuitamente no GitHub Pages.

## Estrutura

```
index.html          → estrutura da página (edite textos, e-mail, LinkedIn aqui)
style.css           → visual do site
script.js           → renderiza a galeria de projetos e o lightbox
data.js             → lista dos seus projetos (é aqui que você mexe no dia a dia)
images/projects/    → onde ficam as fotos/renders dos projetos
```

## Como adicionar um novo projeto

1. Salve a imagem (foto, print do CAD, render) dentro de `images/projects/`.
   Nomeie sem espaços/acentos, ex: `suporte-motor.jpg`.
2. Abra `data.js` e copie um bloco existente dentro do array `PROJECTS`, colando
   antes do `]` final. Edite os campos:
   - `sheet`: um "número de folha", ex: `"DWG-004"` (só estética, pode repetir o padrão)
   - `title`: nome do projeto
   - `software`: `"Fusion 360"`, `"Solid Edge"` ou `"SolidWorks"`
   - `description`: 1-2 frases sobre o projeto
   - `image`: caminho do arquivo, ex: `"images/projects/suporte-motor.jpg"`
3. Salve o arquivo. Se estiver testando localmente, só recarregar a página já mostra o novo card.

Não precisa mexer em `index.html` nem `script.js` para adicionar projetos — só em `data.js`.

## Antes de publicar

Em `index.html`, troque:
- `SEU-USUARIO` nos dois links do LinkedIn pelo seu usuário real
- `SEU-USUARIO` no link do GitHub
- `seuemail@exemplo.com` pelo seu e-mail

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub (público), ex: `flavio-monteiro.github.io`
   ou qualquer outro nome, ex: `portfolio-mecanica`.
2. Envie estes arquivos para o repositório. Pelo site do GitHub:
   - Abra o repositório → **Add file → Upload files** → arraste todos os
     arquivos e a pasta `images` → **Commit changes**.
   - Ou, via terminal:
     ```
     git init
     git add .
     git commit -m "primeiro commit do portfólio"
     git branch -M main
     git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git
     git push -u origin main
     ```
3. No repositório, vá em **Settings → Pages**.
4. Em "Build and deployment" → **Source**, selecione **Deploy from a branch**.
5. Em **Branch**, selecione `main` e a pasta `/ (root)` → **Save**.
6. Aguarde ~1 minuto e recarregue a página de Settings → Pages vai mostrar o link:
   - Se o repositório se chama `SEU-USUARIO.github.io` → site fica em
     `https://SEU-USUARIO.github.io`
   - Se tem outro nome → site fica em
     `https://SEU-USUARIO.github.io/NOME-DO-REPO`

## Adicionar o link no LinkedIn

- No seu perfil, vá em **Adicionar seção → Destaques (Featured)** ou no campo
  **Site** das informações de contato, e cole o link do GitHub Pages.
- Você também pode postar o link como uma publicação normal apresentando o portfólio.
