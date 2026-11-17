import { visit } from "unist-util-visit"
import path from "node:path"

export default function Chronos() {
  return {
    name: "Chronos",

    htmlPlugins() {
      return [
        () => (tree) => { 
          visit(tree, "element", (node) => {
              if (node.tagName !== "pre") return

            const code = node.children?.find(
              (child) => child.type === "element" && child.tagName === "code",
            )

            if (!code) return

            const classes = code.properties?.className ?? []
            if (!classes.includes("language-chronos") && code.properties?.dataLanguage !== "chronos") return

            const getText = (item) => {
              if (item.type === "text") return item.value
              return (item.children ?? []).map(getText).join("")
            }

            const source = code.children.map(getText).join("")

            node.tagName = "div"
            node.properties = {
              className: ["chronos-timeline"],
              "data-chronos": source,
            }
            node.children = []
          })
        },
      ]
    },

    externalResources() {
      return {
        js: [
          {
            src: "./static/plugins/chronos/chronos.js",
            contentType: "external",
            loadTime: "afterDOMReady",
            spaPreserve: true,
          },
          {
            src: "./static/plugins/chronos/client.js",
            contentType: "external",
            loadTime: "afterDOMReady",
            spaPreserve: true,
          },
        ],
        css: [],
        additionalHead: [],
        assets: [
          {
            from: path.resolve(
              process.cwd(),
              "node_modules/chronos-timeline-md/dist/iife-entry.global.js",
            ),
            to: "chronos/chronos.js",
          },
          {
            from: path.resolve(
              process.cwd(),
              "local-plugins/chronos/client.js",
            ),
            to: "chronos/client.js",
          },
        ],
      }
    },
  }
}
