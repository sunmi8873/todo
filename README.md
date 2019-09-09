# script2019

todo / geolocation / greeting javascript / jquery

# 필수 프로그램 설치

## git 설치

https://git-scm.com/download/win

## VScode

https://code.visualstudio.com/download

## node 설치 (npm 포함)

https://nodejs.org/dist/v12.4.0/node-v12.4.0-x64.msi 로 설치

https://d2fault.github.io/2018/04/30/20180430-install-and-upgrade-nodejs-or-npm/ 에서 2번 참고

## yarn 설치 (npm과 유사한 패키지 프로그램, 옵션)

https://yarnpkg.com/en/docs/install

# git 세팅

1. 임의의 폴더 세팅
2. vsCode 터미널 (컨트롤 + `) 열어서 명령어 입력
3. git clone https://github.com/vanadis0929/script2019.git ./
4. 다 내려받아지면. npm install

# 폴더 구조

/index.html

/jquery/index.html

/asset/css/style.css (scss 작업 한것이 이곳으로 컴파일 되어 출력)

/asset/scss/style.scss (실제 css는 여기에 작업)

# 서버 실행 (위 과정을 모두 거친 후 )

1. npm start 후 localhost:8080/index.html (localhost:8080/jquery/index.html)
2. 새로운 터미널을 열고 npm run scss 하게되면 scss를 저장할 때 마다 자동으로 컴파일 함 (서버중단 은 컨트롤 + C)

# 작업
1. 새로고침 할 때 마다 배경이 바뀌게
2. 이름 입력하는 칸 만들어서 'hello 누구누구님 이렇게 나오게'  (새로고침해도 유지 되게)
3. todo 리스트 만들기 (input에 입력하면 ul로 리스트가 저장되게, 각각 지워지게) (새로고침해도 유지 되게)
4. 날씨 정보 받아오기 (위치, 지역, 온도 정도 나오게) 
https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric
api fetch는 잘 모르면 검색등을 통해서 찾아서 해봤으면 좋겠음
https://api.openweathermap.org 에서 회원가입해서 API키를 발급받아야 날씨정보를 가져 올 수 있음.

첨부로 업로드 한 1.png 참고

