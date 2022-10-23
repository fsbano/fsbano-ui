pipeline {
    agent any

    stages {
        stage('Cypress') {
            steps {
                sh 'docker-compose up --abort-on-container-exit'
            }
        }
    }
}

