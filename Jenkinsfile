podTemplate(yaml: """
kind: Pod
spec:
  containers:
  - name: kaniko
    image: gcr.io/kaniko-project/executor:debug
    imagePullPolicy: Always
    command:
    - /busybox/cat
    tty: true
"""
  ) {

  node(POD_LABEL) {
    stage('Build with Kaniko') {
      git 'https://github.com/CWempe/docker-dummy.git'
      container('kaniko') {
        sh '/kaniko/executor -f `pwd`/Dockerfile -c `pwd` --destination=image --tarPath=`pwd`'
      }
    }
  }
}
