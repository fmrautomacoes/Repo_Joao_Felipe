# Casa Prado – Coliving & Intercâmbio

Site da Casa Prado (Belo Horizonte · MG · Brasil): moradia para intercambistas, pesquisadores e profissionais.

**Fase 1:** página pública (vitrine) em português, inglês e espanhol, com contato pelo WhatsApp.

## Estrutura

| Arquivo | O que é |
|---|---|
| `content.js` | **Todo o conteúdo do site**: textos (PT/EN/ES), preços, quartos, serviços, passeios, glossário, perguntas frequentes e configurações. Para mudar conteúdo, só este arquivo. |
| `index.html` | Estrutura da página e dados de compartilhamento (prévia no WhatsApp). |
| `assets/style.css` | Design: cores, fontes, layout. |
| `assets/app.js` | Monta a página a partir do `content.js`, troca de idioma, formulário de contato. |
| `assets/icons.js` | Ícones (Lucide, licença ISC) embutidos, sem depender de serviços externos. |
| `assets/img/` | Logo e fotos. |

Não há etapa de build: são arquivos estáticos, prontos para publicar.

## Antes de divulgar (pendências)

- [ ] Número do WhatsApp em `content.js` → `config.whatsapp` (hoje: número provisório).
- [ ] Logo final (PNG transparente + SVG) em `assets/img/`.
- [ ] Fotos reais: capa, anfitriões, quartos, áreas comuns, passeios (campo `foto` de cada item em `content.js`). Sem foto, aparece uma imagem provisória.
- [ ] Imagem de prévia para WhatsApp (1200×630) em `assets/img/og.jpg`, e o domínio em `index.html` / `config.siteUrl`.

## Ver no computador

Abra `index.html` no navegador, ou rode um servidor local:

```
python3 -m http.server 8000
```

Links por idioma: `?lang=pt`, `?lang=en`, `?lang=es`. Sem parâmetro, o site usa o idioma do navegador.

## Publicar no Cloudflare Pages

1. Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Escolha este repositório e o branch.
3. **Framework preset:** None · **Build command:** (vazio) · **Build output directory:** `/`.
4. Salve. Cada novo envio ao GitHub publica uma nova versão automaticamente.

## Próximas fases

- **Fase 2:** painel `/admin` (Cloudflare Access + Workers) para editar o conteúdo sem programar; Guia do Morador.
- **Fase 3:** automações (questionário, e-mail de boas-vindas).
