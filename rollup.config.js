import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "lit.js",
    output: {
      dir: "dist",
      format: "es",
    },
    plugins: [nodeResolve(), terser()],
  },
  {
    input: "dompurify.js",
    output: {
      dir: "dist",
      format: "es",
    },
    plugins: [nodeResolve(), terser()],
  },
];
