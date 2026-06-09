pipeline {
    agent any

    environment {
        WWW_DIR = '/var/www/lasserre-consulting-site'
    }

    stages {

        stage('Build') {
            steps {
                sh 'npm ci'
                sh 'npx ng build --configuration production'
            }
        }

        stage('Lint') {
            steps {
                sh 'npx ng lint'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    if [ -z "${WWW_DIR}" ] || [ ! -d "${WWW_DIR}" ]; then
                        echo "WWW_DIR invalide ou absent : ${WWW_DIR}"
                        exit 1
                    fi
                    rm -rf "${WWW_DIR:?}/"*
                '''
                sh "cp -r ${WORKSPACE}/dist/lasserre-consulting-site/browser/fr ${WWW_DIR}/"
                sh "cp -r ${WORKSPACE}/dist/lasserre-consulting-site/browser/en ${WWW_DIR}/"
            }
        }

    }

    post {
        success {
            echo 'lasserre-consulting-site déployé avec succès.'
        }
        failure {
            echo 'Echec du pipeline lasserre-consulting-site.'
        }
    }
}
