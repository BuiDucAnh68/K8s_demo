pipeline{
    agent {
        docker { image 'docker:latest' }
    }
    environment{
        DOCKERHUB_CREDENTIALS=credentials('dockerhub')
        
    }
    stages{
        stage('Buid Dockerfile'){
            steps{
               sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin
             
            }
        }
    }
}
