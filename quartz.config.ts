import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🧙‍♀️ grimorioDev — Jardim Digital",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "pt-BR",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",

    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },

      colors: {
        lightMode: {
          // Fundo azul profundo suave
          light: "#0f1724",
          lightgray: "#1b2332",
          gray: "#3c4858",
          darkgray: "#a9b8cc",
          dark: "#e6eef6",

          // Paleta arcana (verde água + roxo)
          secondary: "#5eead4",   // acento principal
          tertiary: "#7c6cff",    // toque roxo (menus / destaque)

          highlight: "rgba(94,234,212,0.12)",    // verde água fraco
          textHighlight: "rgba(124,108,255,0.45)", // seleção roxa fina
        },
        darkMode: {
          light: "#0b1220",          // quase preto azulado
          lightgray: "#141c2b",
          gray: "#3a4557",
          darkgray: "#c2cede",
          dark: "#e6eef6",

          secondary: "#4dd3b6",   // verde-água brilhante
          tertiary: "#6f5aff",    // roxo

          highlight: "rgba(77,211,182,0.12)",
          textHighlight: "rgba(111,90,255,0.45)",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config