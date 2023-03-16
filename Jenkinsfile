pipeline{
    agent{
        kubernetes{
            cloud 'kubernetes'
            yaml '''
        apiVersion: v1
        kind: Pod
        metadata:
          name: pod-machine
          namespace: monitoring
        spec:
          securityContext:
            runAsUser: 0
            runAsGroup: 0
          containers:
          - name: maven
            image: maven:alpine
            command:
            - cat
            tty: true
          - name: docker
            image: docker:latest
            command: ["dockerd", "--host", "tcp://127.0.0.1:2375"]
            securityContext:
              privileged: true
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
                    sh 'dockerd'
                    sh 'docker info'
                    sh 'docker buildx build -f Dockerfile -t "ducanh68/xk6-test:${BUILD_NUMBER}" . '
                }
            }
        }
    }
}
