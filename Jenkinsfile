pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/jitmanyushandilya/GPTApps.git'
            }
        }

        stage('Build and Test Flask') {
            steps {
                script {
                    // Change directory to the flask-server directory
                    dir('flask-server') {
                        // Install Flask dependencies
                        sh 'pip install -r requirements.txt'
                    }
                }
            }
        }

        stage('Build and Test React') {
            steps {
                script {
                    // Change directory to the my-app directory
                    dir('my-app') {
                        // Install React dependencies
                        sh 'yarn install'

                        // Run React tests or build
                        sh 'yarn run test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Change directory to the flask-server directory
                    dir('flask-server') {
                        // Script to deploy Flask app
                        sh 'python server.py'
                    }
                }
            }
        }
    }
}
