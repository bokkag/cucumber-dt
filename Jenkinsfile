pipeline {
    agent any

        stage('Install') {
            steps {
                echo 'Install Dependencies'
                if(isUnix()){
                    bat 'npm install'
                }else{
                    sh 'npm install'
                }
                
            }
        }
        stage('Test') {
            steps {
                echo 'ExecuteTest'
                 if(isUnix()){
                    bat 'npm test'
                }else{
                    sh 'npm test'
                }
            }
        }
        stage('Report') {
            steps {
                echo 'Generate Report'
                 if(isUnix()){
                    bat 'npm run report'
                }else{
                    sh 'npm run report'
                }
            }
        }
         stage('Publish Report') {
            steps {
                echo 'Publish Report'
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'report', reportFiles: 'cucumber_report.html', reportName: 'Cucumber Report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
    }
}
