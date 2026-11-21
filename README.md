# Casa Prado – Coliving & Intercâmbio

Site da Casa Prado (Belo Horizonte · MG · Brasil): moradia para intercambistas, pesquisadores e profissionais.

**Fase 1:** página pública (vitrine) em português, inglês e espanhol, com contato pelo WhatsApp.

## Versões de visual

| Endereço | Versão |
|---|---|
| `/` | **Versão principal** (escolhida em 21/11/2026): imersiva, fotos grandes, verde-mata e dourado. |
| `/v1/` | Versão 1 guardada (clara, creme/verde/âmbar). Não aparece no Google. |
| `/v2/` | Endereço antigo da versão 2: redireciona para `/`. |

As duas usam o **mesmo conteúdo** (`content.js`).

## Estrutura

| Arquivo | O que é |
|---|---|
| `content.js` | **Todo o conteúdo do site**: textos (PT/EN/ES), preços, quartos, serviços, passeios, glossário, perguntas frequentes e configurações. Para mudar conteúdo, só este arquivo. |
| `index.html` | Estrutura da página principal e dados de compartilhamento (prévia no WhatsApp). |
| `assets/style.css` | Design: cores, fontes, layout. |
| `assets/app.js` | Monta a página a partir do `content.js`, troca de idioma, formulário de contato. |
| `assets/icons.js` | Ícones (Lucide, licença ISC) embutidos, sem depender de serviços externos. |
| `assets/img/` | Logo e fotos. Fotos de lugares em `assets/img/fotos/`, do Wikimedia Commons (licenças em `creditos.json` e na página `creditos.html`). |
| `v1/` | Versão 1 guardada (`index.html`, `style.css`, `app.js`). |

Não há etapa de build: são arquivos estáticos, prontos para publicar.

## Antes de divulgar (pendências)

- [x] Número do WhatsApp em `content.js` → `config.whatsapp`.
- [ ] Logo final (PNG transparente + SVG) em `assets/img/`.
- [ ] Fotos reais da casa: capa, anfitriões, quartos, áreas comuns, passeios (campo `foto` de cada item em `content.js`). Sem foto, aparece uma imagem provisória.
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

> Ao trocar ou incluir uma foto do Wikimedia, atualize `assets/img/fotos/creditos.json` e `creditos.html`.
