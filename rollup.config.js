import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

import pkg from "./package.json";

const exts = [".js", ".jsx", ".ts", ".tsx"];

const config = {
    input: "src/OksidiSharer.tsx",
    output: {
        dir: "dist",
        format: "iife",
    },
    plugins: [
        resolve({
            extensions: exts,
        }),
        commonjs(),
        babel({
            extensions: exts,
            babelHelpers: "bundled",
        }),
        postcss({
            inject: false,
            minimize: true,
            // inject: function (c, f) {
            //     console.log("wtf", c, f);
            //     return `
            //     console.log("heh2", ${c});
            //     `;
            // },
        }),
        terser(),
    ],
};

export default config;
