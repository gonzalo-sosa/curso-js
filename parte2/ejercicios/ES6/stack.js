// Crear clase Stack con los métodos
// push
// pop
// peek

const _elements = new WeakMap();

class Stack {
  constructor() {
    _elements.set(this, []);
  }

  get count() {
    return _elements.get(this).length;
  }

  push(element) {
    _elements.get(this).push(element);
  }

  pop() {
    if (_elements.get(this).length === 0) throw new Error("Stack is empty.");
    return _elements.get(this).pop();
  }

  peek() {
    if (_elements.get(this).length === 0) throw new Error("Stack is empty.");
    return _elements.get(this)[_elements.length - 1];
  }
}

const s = new Stack();

s.push("4");
s.push("5");
console.log(s.peek());
s.pop();
s.push("1");
console.log({ count: s.count });
console.log(s.peek());
