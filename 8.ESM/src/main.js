import moduleA from './moduleA';
import { foo } from './moduleB';

moduleA();
foo();

document.getElementById('btn-click').onclick = () => {
  import('./handleClick').then(({ handleClick }) => {
    handleClick();
  });
};
