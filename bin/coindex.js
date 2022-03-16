#!/usr/bin/env node
const program = require("commander");
const pkg = require("../package.json");

// -V version
program
	.version(pkg.version)
	.command("key", "Manage API key -- https://nomics.com")
	.command("check", "Check Coin Price Info")
	.parse(process.argv);
