pipeline{
    agent{
    kubernetes{
        yamlFile: 'k8spod.yaml'
    }
    
    }
    stages{
        stage('Run test'){
            steps{
                container('k6-machine'){
                    sh 'k6 run /home/scripts/test.js'
                }
            }
        }
    }
}
