// curl 'https://tool.lu/dns/index.html' \
//   -H 'content-type: application/x-www-form-urlencoded' \
//   --data-raw 'host=github.github.io&type=a' \
//   --compressed
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

interface DnsResolverResult {
  type: string;
  ip: string;
  ttl: string;
}
interface DnsResolverOptions {
  slim: boolean;
}

declare var wx: any;

const dnsResolver = (
  inDomain: string,
  inOptions?: DnsResolverOptions
): Promise<DnsResolverResult | DnsResolverResult[]> => {
  const opts = inOptions || { slim: false };
  const domain = inDomain || 'github.github.io';
  const url = `https://tool.lu/dns/index.html`;
  const data = `host=${domain}&type=a`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data,
  };

  return fetch(url, options)
    .then((res) => res.text())
    .then((body) => {
      const $ = cheerio.load(body);
      const $rows = $('#bdy .tbl tbody tr');
      const result: any = [];
      $rows.each((i, el) => {
        const typeEl = $(el).find('td').eq(0);
        const ipEl = $(el).find('td').eq(1);
        const ttlEl = $(el).find('td').eq(2);
        const type = typeEl.text().trim();
        const ip = ipEl.text().trim();
        const ttl = ttlEl.text().trim();
        if (ip) result.push({ type, ip, ttl });
      });

      if (opts.slim) return result[0];
      return result;
    });
};

// for commonjs es5 require
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = dnsResolver;
}

export default dnsResolver;
