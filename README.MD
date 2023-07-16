# dns-resolver
> DNS fast resolver.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/dns-resolver
```

## usage
```js
import dnsResolver from '@jswork/dns-resolver';

const res = await dnsResolver('github.com');

/**
 * [{ type: 'A', ip: '20.205.243.166', ttl: '48' }]
 */
```

## license
Code released under [the MIT license](https://github.com/afeiship/dns-resolver/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/dns-resolver
[version-url]: https://npmjs.org/package/@jswork/dns-resolver

[license-image]: https://img.shields.io/npm/l/@jswork/dns-resolver
[license-url]: https://github.com/afeiship/dns-resolver/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/dns-resolver
[size-url]: https://github.com/afeiship/dns-resolver/blob/master/dist/dns-resolver.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/dns-resolver
[download-url]: https://www.npmjs.com/package/@jswork/dns-resolver
