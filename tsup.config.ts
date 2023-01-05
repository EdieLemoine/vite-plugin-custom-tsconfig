import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  entry: ["src/index.ts"],
  esbuildOptions: (options) => {
    if (options.format === "cjs") {
      options.footer = {
        js: "module.exports = module.exports.default;",
      };
    }
  },
  format: ["cjs", "esm"],
  // minify: true,
  outDir: "lib",
  target: "node14",
});
