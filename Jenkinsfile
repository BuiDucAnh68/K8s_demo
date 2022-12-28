pipeline{
    agent {
        kubernetes{
            cloud 'kubernetes'
            
        }
    }
    podTemplate(yaml: readTrusted('k8spod.yaml'))
    node(POD_LABEL){
        container('k6-machine'){
            sh 'k6 run /home/k6/scripts/test.js --out influxdb=http://10.0.167.19:8086/myk6db'
        }

    }
    stages{
        stage('Performance Testing') {
            steps{
                 echo 'Success'
                }
                
        }
        }
        
        }
