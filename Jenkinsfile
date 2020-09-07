pipeline {
    agent  any

    stages {
        
        stage ('Checkout') {
            steps {
                checkout scm
                }
            }
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }   
        
        stage('Start the App') { 
            steps {
                sh 'npm start' 
            }
        }   
        stage ('Deployment Build'){
            steps {
               sh 'npm run build'
            }
        }
        
    }
}
