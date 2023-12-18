import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import NetlifyCMS from 'astro-netlify-cms'

// https://astro.build/config
export default defineConfig({
  site: 'https://UBU-Team.github.io',
  compressHTML: true,
  integrations: [mdx(), tailwind({
    applyBaseStyles: false,
  }), compress(), NetlifyCMS({
    config: {
      backend: {
        name: 'git-gateway',
        branch: 'main',
      },
      collections: [
        //content collections
      ],
    },
  }),
],
});
