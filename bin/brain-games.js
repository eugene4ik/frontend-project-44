#!/usr/bin/env node
import { userNameFunc } from "../src/cli.mjs";
import { firstQuestFunc } from "./brain-even.js";
import { calculator } from "./brain-calc.js";

console.log("Welcome to the Brain Games!");
userNameFunc();
//firstQuestFunc();
console.log("What is the result of the expression?");
calculator();
