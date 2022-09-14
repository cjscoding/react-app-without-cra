'use strict';

const body = require('..');
const assert = require('assert').strict;

assert.strictEqual(body(), 'Hello from body');
console.info("body tests passed");
