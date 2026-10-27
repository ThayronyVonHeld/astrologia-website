# Maggessy Astrologia — site

Site estático (HTML + Tailwind), sem framework e sem etapa de build.

## Estrutura

```
index.html                 redireciona para pages/home.html
pages/                     home, about, maps, contact
assets/css/site.css        estilos compartilhados
assets/js/site-config.js   ⭐ DADOS DE CONTATO (WhatsApp, e-mail, Instagram) — edite só aqui
assets/js/tailwind-config.js  paleta, fontes e animações (config única do Tailwind)
assets/js/main.js          menu mobile, links do WhatsApp, formulário, animações ao rolar
assets/images/, assets/icons/
```

## Antes de publicar

- [ ] Trocar o número e os dados em `assets/js/site-config.js` (hoje são provisórios).
- [ ] Confirmar o e-mail de contato.
- [ ] Ajustar o texto do passo 1 em `maps.html` ("agenda virtual") conforme o agendamento real.
- [ ] Adicionar `og:image` (URL absoluta) e `canonical` quando o domínio estiver definido.

## Rodar localmente

Abra `pages/home.html` no navegador ou use um servidor simples (`python3 -m http.server`).

## Tailwind

Hoje usa o CDN (`cdn.tailwindcss.com`), que é indicado para desenvolvimento. Antes de ir para produção,
migrar para o Tailwind CLI standalone (um binário, sem Node):

```
tailwindcss -i ./src/css/input.css -o ./assets/css/tailwind.css --minify
```

e trocar, em cada página, os dois `<script>` do Tailwind por `<link rel="stylesheet" href="../assets/css/tailwind.css">`.
A paleta de `assets/js/tailwind-config.js` passa para o `input.css`/`tailwind.config.js`.
