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
      containers('kaniko'){
      steps{
        git 'https://github.com/BuiDucAnh68/K8s_demo.git'
        sh 'docker build -t ducanh68/xk6-output .'
        sh 'docker -version'
      }
      }

  }
}
}
