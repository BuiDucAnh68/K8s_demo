pipeline{
    agent{
        docker{
            image 'docker:latest'
        }
    }
    environment{
        DOCKERHUB_CREDENTIALS = credentials('DockerHub')
    }
    stages{
        stage('Buid Dockerfile'){
            steps{
               sh 'docker ps -a'
             }
        }
    }
}
