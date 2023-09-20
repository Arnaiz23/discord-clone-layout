pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy to Netlify') {
            steps {
                sh 'npm run deploy' 
              }
        }
    }
}
