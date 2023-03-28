import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { target: 600, duration: '2m' },
    { target: 0, duration: '1m' }
  ],
  gracefulStop: '1m',
  gracefulRampDown: '1m'
};

export default function () {


  const res = http.get("http://test.k6.io",{timeout: "80s"});
  
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
  });
}
