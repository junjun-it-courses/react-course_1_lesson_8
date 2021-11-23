import { strict as assert } from 'assert';
// при использовании strict-режима
// проверка equal равносильна strictEqual

import capitalize from '../src/capitalize.js';

// Проверка сменилась с отрицательной на положительную
assert.equal(capitalize(''), '');
// Первый параметр actual – то, что пришло
// Второй параметр expected – то, что ожидает тест
// Правильный порядок аргументов имеет большое значение при анализе ошибки
assert.equal(capitalize('hello'), 'Hello');
