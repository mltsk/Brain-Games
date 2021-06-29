#!/usr/bin/env node
import game from '../src/index.js';
import { questionAndCorrectAnswer, greetingText } from '../games/brain-progression.js';

game(questionAndCorrectAnswer, greetingText);
