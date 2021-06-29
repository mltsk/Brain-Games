#!/usr/bin/env node
import game from '../src/index.js';
import { questionAndCorrectAnswer, greetingText } from '../src/games/progression.js';

game(questionAndCorrectAnswer, greetingText);
