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
    securityContext:
        runAsUser: 0
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
        stage('Build Repo'){
            steps{
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/BuiDucAnh68/K8s_demo.git'
                container(name: 'kaniko'){
                    sh '''
                    /kaniko/executor --dockerfile `pwd`/Dockerfile --context `pwd` --destination=docker.io/ducanh68/xk6-output:$BUILD_NUMBER
                    '''
                }
            }
        }

    }

}
