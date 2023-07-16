import dnsResolver from '../src';

// 20.205.243.166        github.com
// 185.199.110.153       github.github.io
// 185.199.108.153       assets-cdn.github.com
// 162.125.17.131        github.global.ssl.fastly.net

describe('api.basic', () => {
  test('normail single value case', async () => {
    // expect(fn({ rel: true })).toBe(undefined);
    const res = await dnsResolver('github.com');
    // console.log('res: ', res);
    expect(res.length).toBeGreaterThan(0);
  });
});
