import fn from '../src';

describe('api.basic', () => {
  test('normail single value case', async () => {
    // expect(fn({ rel: true })).toBe(undefined);
    const res = await fn('github.github.io');
    console.log(res);
  });
});
