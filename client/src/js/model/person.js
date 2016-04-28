const USER_NAME = '_userName';
const NAME = '_name';

export class Person {
  get userName() {
    return this[USER_NAME];
  }

  set userName(value) {
    this[USER_NAME] = value;
  }

  get name() {
    return this[NAME];
  }

  set name(value) {
    this[NAME] = value;
  }
}
