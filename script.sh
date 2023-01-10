apk update --no-cache
apk add curl --no-cache
curl https://raw.githubusercontent.com/BuiDucAnh68/K8s_demo/main/test.js -o /home/scripts/test.js
k6 run /home/scripts/test.js
