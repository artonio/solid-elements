import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import dts from "vite-plugin-dts";
import path from 'path';

import pkg from './package.json';


export default defineConfig({
  plugins: [
      solidPlugin(),
      dts({
        tsConfigFilePath: "tsconfig.build.json",
        insertTypesEntry: true,
        noEmitOnError: true,
        skipDiagnostics: false,
        logDiagnostics: true,
      }),
  ],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: format => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies),
        "solid-js",
        "solid-js/web",
        "solid-js/store",
      ],
    },
  },
});
