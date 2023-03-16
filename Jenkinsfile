podTemplate(yaml: '''
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
      imagePullPolicy: Always
      command: 
        - /busybox/cat
      tty: true
      volumeMounts:
        - name: jenkins-docker-cfg
          mountPath: /root/.docker
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

){
    node(POD_LABEL){
        stage('Build with Kaniko'){
            git 'https://github.com/BuiDucAnh68/K8s_demo.git'
            container('kaniko'){
                sh '/kaniko/executor -f `pwd`/Dockerfile -c `pwd` --destination=ducanh68/xk6-output-test --tarPath=`pwd`'
            }

        }

    }
}
