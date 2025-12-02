# Stack 🛠️🛠️🛠️

- api **hono** (rpc optional)
- frontend framework **React**
- runtime **bun** backend/frontend
- UI **tailwind/daisyUI/Lucide** (optional)
- router **TanstackRouter**
- commands multiple start **Concurrently**

## Start 🚀🚀🚀

- install nodejs
- install bun `curl -fsSL https://bun.com/install | bash` for mac/linux or `powershell -c "irm bun.sh/install.ps1|iex"` for windows or `npm install -g bun` for nppm
- /honoreact "bun install"
- /client "bun install"
- /honoreact "bun dev"

## Scripts 👨‍💻👨‍💻👨‍💻

`"client": "cd client && bun run dev"`
`"server": "bun run --hot server/index.ts"`
`"dev": "concurrently \"bun run server\" \"bun run client\""`
`"build": "bun build ./server/index.ts --outdir ./dist/server --target bun && cd client && bun run build --outDir ../dist/client"`
`"start": "bun run dist/server/index.js"`

### Setup done ✅✅✅

- bun create hono@latest
- template bun
- backend "scripts": {
  "client": "cd client && bun run dev",
  "server": "bun run --hot server/index.ts",
  "dev": "concurrently \"bun run server\" \"bun run client\"",
  "build": "bun build ./server/index.ts --outdir ./dist/server --target bun && cd client && bun run build --outDir ../dist/client",
  "start": "bun run dist/server/index.js"
  },
- frontend "scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build --emptyOutDir",
  "lint": "eslint .",
  "preview": "vite preview"
  },
