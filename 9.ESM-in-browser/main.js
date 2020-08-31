import moduleA from './moduleA.js';
import { foo } from './moduleB.js';

export default function () {
  moduleA();
  foo();
}
