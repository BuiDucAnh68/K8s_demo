import http from "k6/http";
import { check } from "k6";

let url, opts, r;

// Element skipped: jmeterTestPlan.hashTree.TestPlan.hashTree.ResultCollector
// Element skipped: jmeterTestPlan.hashTree.TestPlan.hashTree.ResultCollector

export let options = {
  stages: [
    {
      target: 50,
      duration: "30s",
    },
  ],
};

export default function (data) {
  if (__VU >= 1 && __VU <= 50) {
    /* Created from cURL on 2022-12-28T11:24:27.817 */
    url =
      "https://vlnh.mto.zing.vn/wlxxvng-prod/vng/payment/getServersByUserID?clientIP=125.235.136.88&ts=1671642108&userID=2332100573744275456&sig=092a2d0ca6ef879f7c578a68bfbc553f";
    opts = {
      redirects: 999,
    };
    r = http.request("GET", url, "", opts);

    url =
      "https://vlnh.mto.zing.vn/wlxxvng-prod/vng/payment/getProducts?loginChannel=10&roleID=1050676753&serverID=1002&ts=1671642112623&userID=2332100573744275456&sig=465ff9dd0650a1b9e75958f260e80e9a";
    opts = {
      redirects: 999,
    };
    r = http.request("GET", url, "", opts);

    url =
      "https://vlnh.mto.zing.vn/wlxxvng-prod/vng/payment/getRoles?clientIP=125.235.136.88&loginChannel=10&serverID=1002&ts=1671642111&userID=2332100573744275456&sig=db2e176d717b05b83faa1ba00fe6e6a8";
    opts = {
      redirects: 999,
    };
    r = http.request("GET", url, "", opts);

    url =
      "https://vlnh.mto.zing.vn/wlxxvng-prod/vng/payment/getCCU?clientIP=49.213.81.56&ts=1671642175101&sig=ccbb211c13737b753b476dc9fc6fd52e";
    opts = {
      redirects: 999,
    };
    r = http.request("GET", url, "", opts);

    url =
      "https://vlnh.mto.zing.vn/wlxxvng-prod/vng/payment/getTrans?amount=10000000&clientID=&country=VN&currency=VND&loginChannel=10&orderNumber=2332118772703322112&productID=web.vlafk.ns40000&roleID=1050676753&serverID=1002&ts=1671642222035&userID=2332100573744275456&sig=817735f600f5bad4ca6092615cec41ed";
    opts = {
      redirects: 999,
    };
    r = http.request("GET", url, "", opts);
  }
}
