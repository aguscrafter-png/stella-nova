import fs from "node:fs"

const file = "node_modules/@quartz-community/obsidian-plugin-ttrpg-tools-maps/dist/index.js"

const original = '          url: "/" + destRel.split("/").map(encodeURIComponent).join("/")'

const replacement = '          url: (ctx.cfg?.configuration?.baseUrl ? new URL((ctx.cfg.configuration.baseUrl.includes("://") ? "" : "https://") + ctx.cfg.configuration.baseUrl).pathname.replace(/\\/$/, "") : "") + "/" + destRel.split("/").map(encodeURIComponent).join("/")'

const source = fs.readFileSync(file, "utf8")

if (!source.includes(original)) {
  throw new Error("No se encontró la línea original. No se modificó el archivo.")
}

fs.writeFileSync(file, source.replace(original, replacement))

console.log("Corrección de rutas aplicada correctamente.")
