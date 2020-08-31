import { formatDate } from './utils.mjs';

export const NAME = 'moduleB';

export function foo() {
  formatDate();
  console.log('foo');
}

export function bar() {
  console.log('bar');
}
