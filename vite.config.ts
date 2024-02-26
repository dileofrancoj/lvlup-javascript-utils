import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "my-lib",
      fileName: "my-lib",
    },
    sourcemap: true,
    target:'es6',
    minify: false
  },
  plugins: [dts({
    beforeWriteFile: (filePath, content) => ({
      filePath: filePath.replace('src/*', 'index.d.ts'),
      content,
    }),
    outDir: 'dist'
  })],

});
