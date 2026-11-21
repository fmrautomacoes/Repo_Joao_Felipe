# Casa Prado – Coliving & Intercâmbio

Site da Casa Prado (Belo Horizonte · MG · Brasil), moradia para intercambistas, pesquisadores e profissionais, com **painel do administrador** em `/admin`.
Publicado no **Cloudflare Workers**.

## Estrutura

| Caminho | O que é |
|---|---|
| `public/` | O site (arquivos estáticos). |
| `public/content.js` | **Conteúdo inicial** (textos PT/EN/ES, preços, quartos, serviços, passeios, glossário, títulos das seções, título/descrição para Google e WhatsApp). Usado só enquanto nada foi publicado pelo painel. Precisa continuar JSON válido após `window.SITE = `. |
| `public/index.html`, `public/assets/` | Página principal: estrutura, design (`style.css`), montagem (`app.js`), ícones Lucide embutidos (`icons.js`, licença ISC), logo e fotos. |
| `public/admin/` | Painel do administrador (formulários montados a partir do `ESQUEMA` em `admin.js`). |
| `public/v1/` | Versão 1 do visual, guardada (não aparece no Google). `public/v2/` redireciona para `/`. |
| `public/creditos.html` | Créditos das fotos do Wikimedia Commons (`assets/img/fotos/creditos.json`). |
| `worker/index.js` | Servidor: entrega o conteúdo publicado, aplica título/descrição, protege o painel, guarda histórico. |
| `wrangler.jsonc` | Configuração do Cloudflare (nome, KV, IA, fotos, variáveis do login). |

## Como o painel funciona

- **Login:** Cloudflare Access (e-mail + código). O Worker também confere a assinatura do login (`ACCESS_TEAM_DOMAIN` e `ACCESS_AUD` em `wrangler.jsonc`). Sem essas duas variáveis, o painel fica **fechado** para todos.
- **Publicar:** salva o conteúdo no KV (`CONTENT`); o site passa a usar esse conteúdo em segundos. O conteúdo de `public/content.js` vira apenas o valor inicial.
- **Pré-visualizar:** salva um rascunho e abre `/admin/preview`, sem mudar o site público.
- **Histórico:** as últimas 15 versões publicadas ficam guardadas; qualquer uma pode ser restaurada.
- **Proteções:** validação antes de publicar (WhatsApp, preços, listas) e bloqueio de envios vindos de outros sites.
- **Tradução PT → EN/ES:** Workers AI (binding `AI`).
- **Envio de fotos:** R2 (binding `MEDIA`), desativado até o R2 ser ativado na conta (ver `wrangler.jsonc`).

Para incluir um campo novo no painel: acrescente-o ao conteúdo, ao `ESQUEMA` de `public/admin/admin.js` e à montagem em `public/assets/app.js`.

> Atenção: depois que o painel publica algo, mudanças de **conteúdo** feitas direto em `public/content.js` não aparecem mais no site (o painel tem prioridade). Mudanças de conteúdo devem ser feitas pelo painel.

## Rodar no computador

```
npx wrangler dev
```

Crie um arquivo `.dev.vars` (não vai para o GitHub) com `DEV_BYPASS="1"` para abrir o painel localmente sem login.

## Publicação

Cada alteração no ramo `main` é publicada automaticamente pelo Workers Builds (Cloudflare conectado a este repositório).

## Pendências

- [ ] Fotos reais da casa (capa, anfitriões, quartos, áreas comuns).
- [ ] Logo final (PNG transparente + SVG) em `public/assets/img/`.
- [ ] Domínio próprio.
- [ ] Ativar R2 para envio de fotos pelo painel.

> Ao incluir uma foto do Wikimedia, atualize `public/assets/img/fotos/creditos.json` e `public/creditos.html`.
