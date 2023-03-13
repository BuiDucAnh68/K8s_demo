pipeline{
 agent any
 options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }
stages {
    stage('Build') {
      steps {
        sh 'docker build -t ducanh68/xk6-output:latest .'
      }
    }
    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push') {
      steps {
        sh 'docker push ducanh68/xk6-output:latest'
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}

