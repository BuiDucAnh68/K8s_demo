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
  check(res,{'verify homepage text': (r) =>
      r.body.includes('Collection of simple web-pages suitable for load testing'),});
  sleep(1);
}
