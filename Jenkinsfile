pipeline{
    agent any
    environment{
        registryCredential = 'dockerhub'
    }
    stages{
        stage('Buid Dockerfile'){
            steps{
               sh 'docker ps -a'
             }
        }
    }
}
