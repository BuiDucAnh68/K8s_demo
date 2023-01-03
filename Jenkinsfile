pipeline{
    agent{
    kubernetes {
        cloud 'kubernetes'
        yamlFile 'k8spod.yaml'
    }
   }
    stages{
        stage('Add Curl Container'){
            steps{
                container('k6-machine'){
                    sh 'apk --no-cache add curl'
                }
            }
        }
        stage('Curl File JS'){
            steps{
                container('k6-machine'){
                    sh 'curl https://raw.githubusercontent.com/BuiDucAnh68/K8s_demo/main/test.js -o /home/scripts/test.js'
                }
            }
        }
        stage('Run Test K6 Stress Test'){
            steps{
                container('k6-machine'){
                    sh 'K6_PROMETHEUS_RW_SERVER_URL=http://grafana.gt.zing.vn:9090/api/v1/write k6 run -o xk6-prometheus-rw -o json=/home/scripts/test.json /home/scripts/test.js'
                }
            }
        }
        stage('Show Test JSON Dashboard Jenkins'){
            steps{
                container('k6-machine'){
                    sh 'cat /home/scripts/test.json'
                }
            }
        }
    }
}
