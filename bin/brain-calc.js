#!/usr/bin/env node
import play from '../src/index.js';
import { getQuestionAndCorrectAnswer, greetingText } from '../src/games/calc.js';

play(getQuestionAndCorrectAnswer, greetingText);
