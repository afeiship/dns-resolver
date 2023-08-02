import dnsResolver from '../src';

// 20.205.243.166        github.com
// 185.199.110.153       github.github.io
// 185.199.108.153       assets-cdn.github.com
// 162.125.17.131        github.global.ssl.fastly.net

describe('api.basic', () => {
  test('normail single value case with slim opts', async () => {
    // expect(fn({ rel: true })).toBe(undefined);
    const res1 = await dnsResolver('github.com');
    const res2 = await dnsResolver('github.com', { slim: true });

    // console.log('res: ', res);
    expect(Array.isArray(res1)).toBe(true);
    expect(res2).toHaveProperty('ip');
  });

});
