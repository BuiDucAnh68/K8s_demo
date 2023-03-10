pipeline{
    agent any
    environment{
        DOCKERHUB_CREDENTIALS = credentials('DockerHub')
    }
    stages{
        stage('Buid Dockerfile'){
            steps{
               sh 'docker build -t ducanh68/xk6-output-k6 .'
            }
        }
        stage('Login') {
            steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
       }
        }
      stage('Push') {
      steps {
        sh 'docker push ducanh68/xk6-output-k6'
      }
    }
    }
}
