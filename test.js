import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    {duration: '2m', target:40},
    {duration: '2m', target:50},
    {duration: '8m', target:0},
  ],
};

export default function() {
   http.get('https://test.k6.io');
   sleep(1);
}
