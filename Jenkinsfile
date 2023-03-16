pipeline{
    agent{
        kubernetes{
            cloud 'kubernetes'
            yaml '''
apiVersion: v1
kind: Pod
metadata:
    name: kaniko
spec:
    containers:
      - name: kaniko
        image: gcr.io/kaniko-project/executor:debug
        imagePullPolicy: Always
        command:
            - sleep
        args:
            - 999999
        tty: true
        volumeMounts:
          - name: jenkins-docker-cfg
            mountPath: /kaniko/.docker
    volumes:
      - name: jenkins-docker-cfg
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
    environment{
        registry = "ducanh68/xk6-output-test"
        resgistry= 'dockerhub'
    }
    stages{
        stage('Checkout'){
            steps{
                git 'https://github.com/BuiDucAnh68/K8s_demo.git'
            }
        }
        stage('Build'){
            environment{
                REPOSITORY = 'ducanh68'
                IMAGE = 'xk6-output-test'
                REGISTRY = 'https://hub.docker.com/'
            }
            steps{
                container(name: 'kaniko', shell: '/busybox/sh'){
                    sh '''
                    #!/busybox/sh
                    /kanikok/executor -f `pwd`/Dockerfile -c `pwd` --cache=true --destination=${REGISTRY}/${REPOSITORY}/${IMAGE}
                    '''
                }
            }
        }
    }   
}
