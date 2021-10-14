#!/usr/bin/env node

const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const log = console.log;

// Colors
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const blogClr = chalk.hex(`#E84268`).bold.inverse;

const dim = chalk.dim;
const italic = chalk.italic;

welcome({
  title: `Subham Bharadwaz`,
  tagLine: `Howdy, nice to meet ya!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#000000`,
  bold: true,
  clear: true,
});

log(`
${italic(`I'm a CS student and a full stack web developer based in India..`)}

 ${twitterClr(` Twitter `)} ${dim(`https://twitter.com/subham_js`)}
 ${githubClr(` GitHub `)} ${dim(`https://github.com/subhamBharadwaz`)}
 ${blogClr(` Blog `)} ${dim(`https://www.subhambharadwaz.codes`)}

`);
