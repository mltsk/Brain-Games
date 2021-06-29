#!/usr/bin/env node
import game from '../src/index.js';
import { questionAndCorrectAnswer, greetingText } from '../games/brain-calc.js';

game(questionAndCorrectAnswer, greetingText);
