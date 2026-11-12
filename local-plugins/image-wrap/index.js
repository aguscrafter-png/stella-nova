import { visit } from "unist-util-visit"

export default function ImageWrap() {
  return {
    name: "ImageWrap",

    htmlPlugins() {
      console.log("IMAGE-WRAP: HTML PLUGIN CARGADO")

      return [
        () => (tree) => {
          console.log("IMAGE-WRAP: PROCESANDO HTML")

          visit(tree, "element", (node) => {
            if (node.tagName !== "img") return

            const alt = node.properties?.alt

            console.log("IMAGE-WRAP: IMAGEN ENCONTRADA", alt)

            if (alt !== "wrap-left" && alt !== "wrap-right") return

            const side = alt.replace("wrap-", "")

            node.properties.className = [
              ...(node.properties.className || []),
              `image-wrap-${side}`,
            ]

            node.properties.alt = ""
          })
        },
      ]
    },
  }
}
