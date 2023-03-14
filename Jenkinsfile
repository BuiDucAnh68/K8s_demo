node{
            stage('Build K8s'){
                withKubeConfig([credentialsId: 'azure-aks', serverUrl:'https://aks-k6-01-dns-b7091d7a.hcp.eastasia.azmk8s.io:443']){
                    sh 'kubectl apply -f HorizonPodAutoScale/*'
                    sh 'kubectl get pods -A'
                }
            }
        }
    
