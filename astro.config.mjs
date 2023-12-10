import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  site: 'https://UBU-Team.github.io'
  compressHTML: true,
  integrations: [mdx(), tailwind({
    applyBaseStyles: false,
  }), compress()],
})
