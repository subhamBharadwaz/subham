#!/usr/bin/env node

const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");

welcome({
  title: pkgJSON.name,
  tagLine: `Howdy, nice to meet ya!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#000000`,
  bold: true,
  clear: true,
});

console.log(`
Subham Bharadwaz

Full stack web developer and BCA graduate. Mainly focusing on MERN stack.

🤓 Twitter: https://twitter.com/subham_js
😎 Github: https://github.com/subhamBharadwaz
📝 Blog: https://www.subhambharadwaz.codes

`);
