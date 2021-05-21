#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const args = yargs_1.default.options({
    name: { type: 'string', demandOption: true, alias: 'n' }
}).argv;
const { name } = args;
fs_extra_1.default.mkdir(`./${name}`, (error) => {
    if (error) {
        console.log("Could not create project!");
        process.exit(0);
    }
    const srcDir = `${path_1.default.resolve(__dirname)}/../tsxpress-template`;
    const destDir = `./${name}`;
    fs_extra_1.default.copySync(srcDir, destDir);
    console.log("Project created successfully!");
    process.exit(0);
});
//# sourceMappingURL=index.js.map