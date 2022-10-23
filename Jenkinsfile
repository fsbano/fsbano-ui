pipeline {
    agent any
    options {
        ansiColor('xterm')
    }
    stages {
        stage('Cypress') {
            steps {
                sh 'docker-compose up --abort-on-container-exit'
            }
        }
    }
}

