#!/usr/bin/env node
import { userNameFunc } from "../src/cli.mjs";
import { firstQuestFunc, count } from "./brain-even.js";
console.log("Welcome to the Brain Games!");
userNameFunc();
firstQuestFunc();
