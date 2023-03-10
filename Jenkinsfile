pipeline{
    agent{
        docker{
            image 'docker:latest'
        }
    }
    environment{
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    }
    stages{
        stage('Buid Dockerfile'){
            steps{
               sh 'docker ps -a'
             }
        }
    }
}
