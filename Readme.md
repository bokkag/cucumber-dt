##Steps to version control the local scenario based feature files
##Instructions
1)Once all the step definitions are done and executed as expected then go to github and create a new repository
2)Then to convert the local feature files to git repository run the command `git init` , then you can the see the git style structure and the branch will be displayed as <master>
3) Make sure to create a file called <.gitignore> so that you don't want the node modules and package.json files to be pushed to the remote repository, which you can do by installing the gitignore extension and right click on the node modules and package.json files and select <Add to .gitignore>
4) Now as expected stage and commit all the feature files to the remote repository by `git add.` and `git commit -m 'message'`
5) Now we need to change the master branch to main branch because in github the branch will be named as <main> and to do that run the command `git branch -M main`
6) To add the repository run the command `git remote add origin https://github.com/bokkag/cucumber-dt.git`
7) Now the last step to push all your feature files to remote repository is to run the command `git push -u origin main` ,and once you run the command you can see all your local feature files in  remote repository

