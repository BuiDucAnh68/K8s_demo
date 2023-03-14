node{
            stage('Build K8s'){
                withKubeConfig([credentialsId: 'azure-aks', serverUrl:'https://aks-k6-01-dns-b7091d7a.hcp.eastasia.azmk8s.io:443']){
                    sh 'git clone https://github.com/BuiDucAnh68/K8s_demo.git'
                    sh 'cd K8s_demo'
                    sh 'curl -LO "https://storage.googleapis.com/kubernetes-release/release/v1.20.5/bin/linux/amd64/kubectl"'  
                    sh 'chmod u+x ./kubectl' 
                    sh './kubectl apply -f HorizonPodAutoScale/*'
                    sh './kubectl get pods -A'
                }
            }
        }
    
