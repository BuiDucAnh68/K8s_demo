pipeline{
    agent{
        label agent
    }
    stages{
        stage("Build Pod"){
            steps{
                podTemplate(yaml: readTrusted('k8spod.yaml')) {
                    node(POD_LABEL){
                        container('k6-machine'){
                            echo POD_CONTAINER
                            sh 'hostname'
                        }
                    }

            }

        }
    }

    }
}