pipeline{
    agent{
        docker {
            image'docker:latest'
        }
    }
    environment{
        DOCKERHUB_CREDENTIALS = credentials('DockerHub')
    }
    stages{
        stage('Buid Dockerfile'){
            steps{
               sh 'docker build -t ducanh68/xk6-output-k6 .'
               sh 'docker ps -a'
             }
        }
    }
}
