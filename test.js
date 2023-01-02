import http from 'k6/http';
import { check,sleep } from 'k6';
export const options = {
    stages: [
        {duration: '30s', target:30},
        {duration: '1m', target:60},

    ],
};

export default function () {
  const res = http.get('https://httpbin.test.k6.io/');
  check(res,{
    'is status 200': (r) => r.status === 200,
    'body size is 11,105 bytes': (r) => r.body.length == 11105,});
  sleep(1);
}
