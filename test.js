import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';

// A simple counter for http requests

export const requests = new Counter('http_reqs');

export const options = {
  stages: [
    { target: 1000, duration: '5m' },
    { target: 10000, duration: '10m' },
    { target: 0, duration: '1m' },
  ],
  thresholds: {
    http_reqs: ['count < 100'],
  },
};

export default function () {

  const res = http.get('http://test.k6.io');

  sleep(1);

  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.indexOf('Feel free to browse') !== -1,
  });
}
