pipeline{
    agent {
        kubernetes {
        cloud 'kubernetes'
        }
        stages{
            stage('Build K8s')
            steps{
                script{
                    sh 'kubectl apply -f HorizonPodAutoScale/* '
                }
            }
        }
}
