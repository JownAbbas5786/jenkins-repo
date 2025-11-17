pipeline {
  agent { label 'docker-agent' }
  environment {
    COMPOSE_PROJECT_NAME = 'myapp'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build images') {
      steps {
        sh 'docker-compose -f docker-compose.yml build'
      }
    }
    stage('Run tests (optional)') {
      steps {
        echo 'Add your test steps here'
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker-compose -f docker-compose.yml down'
        sh 'docker-compose -f docker-compose.yml up -d'
      }
    }
  }
  post {
    success {
      echo 'Deployed successfully'
    }
    failure {
      echo 'Build or deploy failed'
    }
  }
}