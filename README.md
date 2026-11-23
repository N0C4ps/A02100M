# Curso de Matemática

Site estático (Astro + Tailwind) com sidebar de semanas e menus interativos
por aula, inspirado no cs50.harvard.edu.

## Rodar localmente

```bash
npm install
npm run dev
```

## Como adicionar uma nova semana

1. Crie um arquivo em `src/content/weeks/semana-N.mdx` (copie
   `semana-1.mdx` como modelo).
2. Preencha o frontmatter:
   - `week`: número da semana
   - `title`: título da semana
   - `lessons`: lista de aulas, cada uma com `title` e `resources`
     (`video`, `audio`, `notas`, `slides`, `pdf`, `googleSlides`,
     `legendas`, `transcricao`, `shorts` — todos opcionais, só aparece
     o que você preencher)
   - `reforco`: (opcional) aula de reforço, mesmo formato de `resources`
   - `exercicios` / `questionario`: (opcional) links para a página de
     exercícios/questionário
3. No corpo do arquivo (depois do `---`), escreva o resumo da semana em
   Markdown — isso aparece no topo da página da semana.
4. Salve. A sidebar e a página da semana são geradas automaticamente —
   não precisa editar nenhum componente.

## Deploy no GitHub Pages

1. Em `astro.config.mjs`, defina `site` e `base` com a URL real do seu
   GitHub Pages (há um `TODO` no arquivo mostrando o formato).
2. No repositório do GitHub: Settings → Pages → Source → "GitHub
   Actions".
3. Faça push para a branch `main`. O workflow em
   `.github/workflows/deploy.yml` builda e publica o site
   automaticamente.
