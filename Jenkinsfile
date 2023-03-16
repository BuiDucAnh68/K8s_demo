pipeline{
    agent{
        kubernetes{
            cloud 'kubernetes'
            yaml '''
        apiVersion: v1
        kind: Pod
        spec:
          containers:
          - name: maven
            image: maven:alpine
            command:
            - cat
            tty: true
          - name: docker
            image: docker:latest
            command:
            - cat
            tty: true
            volumeMounts:
             - mountPath: /var/run/docker.sock
               name: docker-sock
          volumes:
          - name: docker-sock
            hostPath:
              path: /var/run/docker.sock
'''
        }
    }
    stages{
        stage('Clone Repo'){
            steps{
                container('maven'){
                     git branch: 'main', changelog: false, poll: false, url: 'https://github.com/BuiDucAnh68/K8s_demo.git'
                }
            }
        }
        stage('Build-Docker-Image'){
            steps{
                container('docker'){
                    sh 'docker build -t ducanh68/xk6-test:${BUILD_NUMBER}'
                }
            }
        }
    }
}
