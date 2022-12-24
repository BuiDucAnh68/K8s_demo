pipeline{
    agent {
        kubernetes{
            cloud 'kubernetes'
            yaml """
    apiVersion: v1
    kind: Pod
    metadata:
        name: k6-deploy-k8s
    spec:
     containers:
      - name: k6-machine
        image: grafana/k6:latest

     volumes:
      - name: shared-data
        emptyDir: {}
    """
        }
    }
    stages{
        stage("Deploy"){
            steps {
                container('k6-machine'){
                    sh 'k6 run https://github.com/BuiDucAnh68/K8s_demo/k6.js'
                } 
            }
        }
    }

    }
