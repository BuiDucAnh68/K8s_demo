import http from 'k6/http';
import { check,sleep } from 'k6';
export const options = {
    stages: [
        {duration: '30s', target:30},
        {duration: '1m', target:60},

    ],
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
//         http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
  },
};

export default function () {
  const res = http.get('https://httpbin.test.k6.io/');
  check(res,{
    'is status 200': (r) => r.status === 200,
    'body size is 11,105 bytes': (r) => r.body.length == 11105,
    'Protocol TCP: ': (r) => r.proto === 'TCP',
    'Protocol is HTTP/2': (r) => r.proto === 'HTTP/2.0',
    'is OCSP response good': (r) => r.ocsp.status === http.OCSP_STATUS_GOOD,
  });
  sleep(1);
}
