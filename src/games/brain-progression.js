#!/usr/bin/env node
import { question } from 'readline-sync';
import playGame from '../index.js';

const gameQuest = () => {
  const progressionCheck = () => {
    let i = Math.floor(Math.random() * 10) + 1;
    const iter = Math.floor(Math.random() * 5) + 1;
    const num = i + 50;
    const rand = [];
    for (i; i <= num; i += iter) {
      rand.push(i);
      if (rand.length === 10) {
        break;
      }
    }
    return rand;
  };
  const sequence = progressionCheck();
  const randomIndex = Math.floor(Math.random() * sequence.length);
  let correctAnswer = sequence[randomIndex];
  let correctAnswerString = correctAnswer.toString();
  sequence[randomIndex] = '..';
  const question = `Question: ${sequence.join(' ')} `;
  return [question, correctAnswerString];
};

const brainProgression = () => {
  playGame('progression', question, gameQuest);
};

export { brainProgression };
