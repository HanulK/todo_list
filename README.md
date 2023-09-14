# Git alias 'hist'
git config --global alias.hist "log --graph --pretty=format:'%C(yellow)[%h]%C(reset) %C(auto)%ad%C(reset) | %C(auto)%d%C(reset) %n %C(bold black)%an%C(reset) %C(bold black)(%ar)%C(reset) %n %C(bold white)%s%C(reset) %n' --date=short"  

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# JS -> TS

1. TS 환경 구성
- NPM 초기화 & package.json 생성 : $npm init -y
- TS 라이브러리 설치 : $npm i typescript --save-dev or $npm i typescript -D
- TS 설정 파일 생성 & 기본 값 추가 : package.json과 같은 위치에서 tsconfig.json 파일 생성 및 내용 추가   
```
{
    "compilerOptions": {
        // js파일도 컴파일 대상 여부
        "allowJs": true,
        // tsc로 컴파일 시 변환되는 ES버전
        "target": "ES5",
        // node_modules/@types/react/index 모듈을 사용하기 위한 추가
        "esModuleInterop": true,
        // 타입스크립트의 결과물이 들어가는 경로 설정
        "outDir": "./dist",
        // Promise base 코드 작성 시 Promise를 인식시켜주는 목적
        "moduleResolution": "Node",
        // 컴파일 과정에서 사용될 라이브러리 파일 설정
        "lib": [
            "ES2015",       // 프로미스 객체를 타입스크립트에서 인식할 수 있도록 하는 라이브러리
            "DOM",          // dom api를 사용하는 경우 필요
            "DOM.Iterable"
        ],
        // ''--jsx' 플래그를 제공하지 않으면 JSX를 사용할 수 없습니다' 해결
        "jsx": "react-jsx"
    },
    // 프로젝트를 기준으로 어떤 폴더를 대상으로 타입스크립트를 컴파일 시킬 것인지 결정하는 부분
    "include": [
        "./src/**/*"
    ],
    // 컴파일 대상 제외 옵션
    "exclude": [
        "node_modules",
        "dist"
    ]
}
```
- '--jsx' 플래그를 제공하지 않으면 JSX를 사용할 수 없습니다.
    - VScode에서의 TS 버전과 Global 환경에 설치된 TS버전이 달라서 발생
    - typescript 설치 여부 확인 : $npm list -g typescript / 버전이 나오면 설치된 것, 아니라면 설치 필요
    - typescript 설치 : $npm -i g typescript
    - Global NPM path 확인 : $npm root -g
    - VScode의 setting.json 열어 typescript 버전 매칭 : {"typescript.tsdk":"[$GLOBAL_NPM_PATH]/typescript/lib"}