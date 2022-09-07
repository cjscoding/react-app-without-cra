### devDependencies

// Babel 핵심 의존성 라이브러리. Babel(바벨)은 자바스크립트 ES6를 ES5로 컴파일하여 현재 브라우저가 이해할 수 있도록 변환하는 도구
"babel-core": "^6.26.3",

// babel과 webpack을 사용해 자바스크립트 파일을 컴파일
"babel-loader": "^8.2.5",

// ES2015, ES2016, ES2017 버전을 지정하지 않아도 바벨이 자동으로 탐지해 컴파일
"babel-preset-env": "^1.7.0",

// 리액트를 사용한다는 것을 바벨에게 전달
"babel-preset-react": "^6.24.1",

// TC39에서 검토 중인 Stage 1 스펙을 사용. (stage-0부터 3까지는 EcmaScript 스펙 중에서 비공식 실험적인 기술들을 사용할 수 있게 해주는 프리셋으로 Stage 2와 Stage 3도 사용 가능)
"babel-preset-stage-1": "^6.24.1",

// import/require()처럼 @import와 url() 해석
"css-loader": "^6.7.1",

// 애플리케이션을위한 HTML 파일을 생성하거나 템플릿을 제공
"html-webpack-plugin": "^5.5.0",

// `<style>` 태그를 삽입하여 CSS에 DOM을 추가
"style-loader": "^3.3.1",

// 모듈 번들러
"webpack": "^5.74.0",

// Webpack 4.0.1 이상에서 필요한 커맨드라인 인터페이스
"webpack-cli": "^4.10.0",

// 애플리케이션 개발 서버를 제공

### scripts

webpack-dev-server: webpack.config.js 파일을 최상단 디렉토리 기본 구성 항목으로 찾음
