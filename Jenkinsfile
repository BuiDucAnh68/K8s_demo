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
                    sh 'K6_PROMETHEUS_RW_SERVER_URL=http://10.0.243.212:9090/api/v1/write k6 run -o xk6-prometheus-rw /home/scripts/test.js'
                }
            }
        }
    }
}
