pipeline{
    agent{
    kubernetes {
        cloud 'kubernetes'
        yamlFile 'k8spod.yaml'
    }
   }
    stages{
        stage('Run test'){
            steps{
                container('k6-machine'){
                    sh 'K6_PROMETHEUS_RW_SERVER_URL=http://10.0.243.212:9090/api/v1/write k6 run -o xk6-prometheus-rw /home/scripts/test.js'
                }
            }
        }
    }
}
