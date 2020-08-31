import { formatDate } from './utils.js';

export const NAME = 'moduleB';

export function foo() {
  formatDate();
  console.log('foo');
}

export function bar() {
  console.log('bar');
}
