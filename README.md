# AngularAmplifySample
## プロジェクト作成
```
docker pull alexsuch/angular-cli:6.2-chromium
docker run -it --rm -w /app -v $(pwd):/app alexsuch/angular-cli:6.2-chromium ng new angular-amplify-sample
```
## Git連携
```
git add .
git commit
git remote add origin git@github.com:mori-hisayuki/angular-amplify-sample.git
git push origin master
```
## gitignore追加
```
# dependencies
/node_modules

#amplify
.amplifyrc@late
amplify
```

## gitmjoi連携
```
gitmoji -i
```
## AWS Amplify & Angular
```
npm install aws-amplify --save
npm install aws-amplify-angular --save
npm install @aws-amplify/cli@multienv --save
```

## Amplify
```
amplify init
Note: It is recommended to run this command from the root of your app directory
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using angular
? Source Directory Path:  src
? Distribution Directory Path: dist
? Build Command:  ng build
? Start Command: ng serve
Using default provider awscloudformation
```


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
```
