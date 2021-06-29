#!/usr/bin/env node
import game from '../src/index.js';
import { questionAndCorrectAnswer, greetingText } from '../games/brain-even.js';

game(questionAndCorrectAnswer, greetingText);
