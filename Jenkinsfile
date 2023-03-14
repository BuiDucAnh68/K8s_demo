node{
        stages{
            stage('Build K8s'){
                withKubeConfig([credentialsId: 'azure-aks']){
                    sh 'kubectl apply -f HorizonPodAutoScale/*'
                    sh 'kubectl get pods -A'
                }
            }
        }
    }
