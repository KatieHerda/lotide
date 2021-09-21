const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] from ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), (['Lighthouse', 'Labs']));
  });

  it("returns [1, 2] from [0, 1, 2] ", () => {
    assert.deepEqual(tail([0, 1, 2]), ([1, 2]));
  });

  it("returns 2 from ['Hello', 'Lighthouse', 'Labs'].length", () => {
    assert.equal(tail(['Hello', 'Lighthouse', 'Labs']).length, 2);
  });

  it("returns [] from [0] ", () => {
    assert.deepEqual(tail([1]), ([]));
  });
});