import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.invoicelink.io",
  integrations: [
    starlight({
      title: "invoicelink docs",
      favicon: "/favicon.png",
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:title",
            content: "invoicelink docs",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:description",
            content: "The invoicelink.io docs",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://docs.invoicelink.io/og-image.png",
          },
        },
        {
          tag: "link",
          attrs: {
            property: "apple-touch-icon",
            href: "https://invoicelink.io/apple-touch-icon.png",
          },
        },
      ],
      customCss: ["./src/styles/docs.css", "./src/fonts/font-face.css"],
      social: {
        youtube: "https://youtube.com/@invoicelink ",
        linkedin: "https://www.linkedin.com/company/invoicelink-io/",
        instagram: "https://www.instagram.com/invoicelink.io/",
        threads: "https://www.threads.net/@invoicelink.io",
        "x.com": "https://x.com/invoicelink_io",
        discord: "https://discord.gg/q85NGY4A",
      },
      sidebar: [
        {
          label: "Start Here",
          // Collapse the group and its autogenerated subgroups by default.
          collapsed: true,
          autogenerate: { directory: "docs" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Tutorials",
          autogenerate: { directory: "tutorials" },
        },
        {
          label: "Changes",
          autogenerate: { directory: "changes" },
        },
      ],
    }),
  ],
});
