var foo = 1;

function add(a, b) {
  return a + b;
}

function foo() {
  return foo;
}

module.exports = {
  add: add,
  foo: foo,
};
