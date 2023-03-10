pipeline{
    agent any
    environment{
        DOCKERHUB_CREDENTIALS=credentials('dockerhub')
    }
    stages{
        stage('Buid Dockerfile'){
            steps{
               sh 'docker build -t ducanh68/xk6-output .'
             }
        }
    }
}
