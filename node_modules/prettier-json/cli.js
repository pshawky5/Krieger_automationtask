#!/usr/bin/env node

var fs = require("fs");
var pretty = require("./index.js");

function main(file) {
  var input = fs.readFileSync(file).toString("utf8");
  var output = pretty(input) + "\n";

  fs.writeFileSync(file, output);
}

process.argv.slice(2).map(main);
