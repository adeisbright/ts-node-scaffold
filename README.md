# ts-node-scaffold
Quickly Scaffold a Node App to be written using Typescript. 

The Project comes with the following :

1. Error Definition and Classification : Common HTTP Errors are define ,
classified , and handled within a centralized middleware 

2. Logging : Operations are logged to three different files based on 
the level of what happened. 

Your log can be an info e.g when your server starts , or an error when your server crashes. 

3. Environment Variable Configuration 

4. Development and Start Scripts . Ensure you have PM2 to use the start script

5. JWT Token Generation Library , and JWT Verification Middleware

## Table of Contents 
1. Introduction 
1. How to Use 
1. Contributions

## How to Use TS NODE SCAFFOLD 

To use this project as a scaffold for your next project, do the following :

1. Clone the project with :git clone https://github.com/adeisbright/ts-node-scaffold.git  <project-name>

Ensure your project is created without a readme. You will make 
modifications to the readme that comes with our project by replacing 
the content with yours

2. Rename the project name in package.json , change the keywords to reflect your new project

3. Drop our remote, and point our remote to your repository by doing the following:

git remote remove origin 
git remote add origin <your-own-remote> 

4. Resolve Commit History with :

git pull <your-remote> main --allow-unrelated-histories 


5. Create a feature branch of the main , and start developing 

6. Push your latest changes : 
git push -u origin <branchName>

7. Raise a PR , Review, Merge 

8. Hurray!


## Contributions  

You can contribute to this project by forking it, make your changes, and raise a PR. 

You can also create an issue for something you think should be resolved 
