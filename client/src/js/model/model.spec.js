/* eslint-env jasmine */
import Name from './name';
describe('Person', () => {
  'use strict';

  it('should have a name', () => {
    var foo = new Name();
    foo.last = 'bar';
    foo.first = 'foo';

    expect(foo).toBeTruthy();
  });
});
