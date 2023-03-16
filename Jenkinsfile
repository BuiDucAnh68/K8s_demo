pipeline{
    agent{
        kubernetes{
            cloud 'kubernetes'
            yaml '''
apiVersion: v1
kind: Pod
metadata:
    name: kaniko
    namespace: monitoring
spec:
    containers:
      - name: kaniko
        image: gcr.io/kaniko-project/executor:debug
        securityContext:
            privileged: true
        command: 
            - cat
        tty: true
        volumeMounts:
            - name: docker-config
              mountPath: /kaniko/.docker
    volumes:
        - name: docker-config
          projected:
            sources:
             - secret:
                name: docker-credentials
                items:
                    - key: .dockerconfigjson
                      path: config.json
'''
        }
    }
    stages{
        stage('Clone Repo'){
            steps{
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/BuiDucAnh68/K8s_demo.git'
            }
        }
        stage('Build and Push Repo Kaniko To DockerHub '){
            steps{
                container(name: 'kaniko'){
                    sh '''
                    /kaniko/executor --dockerfile `pwd`/Dockerfile --context `pwd` --destination=docker.io/ducanh68/xk6-output:latest
                    '''
                }
            }
        }
        stage('Deploy IAC To K8s'){
            steps{
                scripts{
                    withKubeConfig([credentialsId: 'azure-aks', serverUrl: 'https://aks-k6-01-dns-b7091d7a.hcp.eastasia.azmk8s.io:443']){
                         sh 'curl -LO "https://storage.googleapis.com/kubernetes-release/release/v1.20.5/bin/linux/amd64/kubectl"'  
                         sh 'chmod u+x ./kubectl'  
                         sh 'curl https://raw.githubusercontent.com/BuiDucAnh68/K8s_demo/main/HorizonPodAutoScale/deployment.yaml -o deployment.yaml'
                         sh 'curl https://raw.githubusercontent.com/BuiDucAnh68/K8s_demo/main/HorizonPodAutoScale/horizontalpodautoscale.yaml -o horizontal.yaml'
                         sh './kubectl apply -f deployment.yaml'
                         sh './kubectl apply -f horizontal.yaml'
                         sh './kubectl get pods'
                    }
                }
            }

        }

    }
}
