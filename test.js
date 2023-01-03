import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';

export const options = {
  vus: 1, // 1 user looping for 1 minute
  duration: '1m',

  thresholds: {
    http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  },
};

const BASE_URL = 'https://test-api.k6.io';
const USERNAME = 'TestUser';
const PASSWORD = 'SuperCroc2020';

export default () => {
  const loginRes = http.post(`${BASE_URL}/auth/token/login/`, {
    username: USERNAME,
    password: PASSWORD,
  });

  check(loginRes, {
    'logged in successfully': (resp) => resp.json('access') !== '',
  });

  const authHeaders = {
    headers: {
      Authorization: `Bearer ${loginRes.json('access')}`,
    },
  };

  const myObjects = http.get(`${BASE_URL}/my/crocodiles/`, authHeaders).json();
  check(myObjects, { 
  'retrieved crocodiles': (obj) => obj.length > 0 ,'is status 200': (r) => r.status === 200,
  'body size is 11,105 bytes': (r) => r.body.length == 11105,
  'Protocol TCP: ': (r) => r.proto === 'TCP',
  'Protocol is HTTP/2': (r) => r.proto === 'HTTP/2.0',
  'is OCSP response good': (r) => r.ocsp.status === http.OCSP_STATUS_GOOD,});

  sleep(1);
};
