# task-manager-api
# Jenkins & Docker CI/CD Pipeline

## Overview
This project sets up a Continuous Integration and Continuous Deployment (CI/CD) pipeline using Jenkins and Docker. It automates building, testing, and deploying an application inside Docker containers.

## Features
- Automatically installs dependencies
- Runs tests to ensure code quality
- Builds Docker images
- Deploys Docker containers

## Technologies
- Jenkins
- Docker
- Git
- Node.js (example)

## Getting Started

### Prerequisites
- Jenkins installed and running
- Docker installed and running
- Git installed

### Setup
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>

#Jenkinsfile Example
pipeline {
  agent any

  stages {
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Run tests') {
      steps {
        bat 'npm test'
      }
    }

    stage('Build Docker Image') {
      steps {
        bat 'docker build -t your-app-image .'
      }
    }

    stage('Deploy Docker Container') {
      steps {
        bat 'docker run -d -p 8080:8080 your-app-image'
      }
    }
  }
}

#Notes
Jenkins agents can run outside the project directory.

Ensure Jenkins user has permission to run Docker commands.

#Troubleshooting
Check Jenkins console logs for errors.

Verify Docker service is running.

Adjust permissions if Docker commands fail.

#Contact

Let me know if you want me to add or change anything!

