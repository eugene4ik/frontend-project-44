#!/usr/bin/env node
import playGame from '../index.js';

const askQuestion = 'What number is missing in the progression?';

const infoSender = () => {
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
  const correctAnswer = sequence[randomIndex];
  const correctAnswerString = correctAnswer.toString();
  sequence[randomIndex] = '..';
  const questionGame = `Question: ${sequence.join(' ')} `;
  return [questionGame, correctAnswerString];
};

const brainProgression = () => {
  playGame(askQuestion, infoSender);
};

export default brainProgression;
