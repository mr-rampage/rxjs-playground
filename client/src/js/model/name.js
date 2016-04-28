const FIRST = '_first';
const LAST = '_last';

class Name {
  get first() {
    return this[FIRST];
  }

  set first(value) {
    this[FIRST] = value;
  }

  get last() {
    return this[LAST];
  }

  set last(value) {
    this[LAST] = value;
  }
}

export {Name as default};
