import { helloWord } from '.';

describe('helloWord', () => {
  it('multiplies the value', () => {
    expect(helloWord(2)).toEqual(4);
  });
});
