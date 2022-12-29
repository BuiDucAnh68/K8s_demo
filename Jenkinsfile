pipeline{
    agent {
        kubernetes{
            cloud 'kubernetes'
            yamlFile 'k8spod.yaml'
        }
    }
    
    stages{
        stage('Performance Testing') {
            steps{
                echo 'Success'
//                 container('k6-machine'){
//                     sh 'k6 run /home/k6/scripts/test.js --out influxdb=http://10.0.167.19:8086/myk6db'
//                     echo 'Success'
//                 }
                 
                }
                
        }
   }
}
