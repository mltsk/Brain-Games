#!/usr/bin/env node
import play from '../src/index.js';
import { getQuestionAndCorrectAnswer, greetingText } from '../src/games/progression.js';

play(getQuestionAndCorrectAnswer, greetingText);
