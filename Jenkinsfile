pipeline{
    agent {
        kubernetes{
            cloud 'MyKubeConfig'
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

    }
