pipeline{
  agent {
    kubernetes{
      yaml '''
      apiVersion: v1
      kind: Pod
      spec:
      containers:
        - name: kaniko
          image: gcr.io/kaniko-project/executor:debug
          securityContext:
            privilleged: true
          imagePullPolicy: Always
          command: 
            - sleep
          args:
            - 9999
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
  stages{
    stage('Build'){
      steps{
        containers(name:'kaniko', shell: '/busybox/sh'){
          sh '''
              #!/busybox/sh
              echo "FROM jenkins/inbound-agent:latest" > Dockerfile
              /kaniko/executor --context `pwd` --destination ducanh68/busybox-hello-kaniko:latest
              '''
        }
      
    }
  }
}
