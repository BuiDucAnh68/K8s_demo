pipeline{
    agent {
        kubernetes{
            cloud 'kubernetes'
            yamlFile 'k8spod.yaml'
        }
    }
    stages{
        stage("Deploy K6 to Pod"){
            steps {
              
//                 container('k6-machine'){
                    echo 'Success'
//                 } 
            }
        }
//         stage("Run Script with  K6"){
//             steps{
//                 container('k6-machine'){
//                     sh "k6 run https://github.com/BuiDucAnh68/K8s_demo/blob/main/k6.js"
//                 }
//             }
            
//         }
              
    }

    }
