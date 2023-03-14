node{

            stage('Build K8s'){
                withKubeConfig([credentialsId: 'azure-aks', serverUrl:'https://aks-k6-01-dns-b7091d7a.hcp.eastasia.azmk8s.io:443']){
                    sh 'curl -LO "https://storage.googleapis.com/kubernetes-release/release/v1.20.5/bin/linux/amd64/kubectl"'  
                    sh 'chmod u+x ./kubectl' 
                    sh 'curl https://raw.githubusercontent.com/BuiDucAnh68/K8s_demo/main/HorizonPodAutoScale/deployment.yaml -o deployment.yaml && ./kubectl apply -f deployment.yaml'
                    sh 'curl https://raw.githubusercontent.com/BuiDucAnh68/K8s_demo/main/HorizonPodAutoScale/horizontalpodautoscale.yaml -o horizontalpodautoscale.yaml && ./kubectl apply -f horizontalpodautoscale.yaml'
                    sh './kubectl get pods -A'
                }
            }
        }
    
