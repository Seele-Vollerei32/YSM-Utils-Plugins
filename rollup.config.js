import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import image from "@rollup/plugin-image";
import vue from "rollup-plugin-vue";

export default {
    input: "src/index.js",
    output: {
        file: "ysm-utils.js",
        format: "iife",
        globals: {
            path: "PathModule"
        }
    },
    plugins: [
        vue(),
        json(),
        resolve(),
        commonjs(),
        image()
    ],
    external: ["path"]
};