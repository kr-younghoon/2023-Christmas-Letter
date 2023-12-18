# 2023 크리스마스 편지(2023-Christmas-Letter)

`#React`

### - 서비스 소개

##### 서비스 설명

React를 통한 크리스마스 편지 보내기 웹사이트를 구현하였습니다.

##### 디자인 시안 공개

(보류)

##### 실제 웹사이트 구현 사진

(보류)

### commit convention

feat : 기능 개발
fix : 버그 수정 - 수정 이유와 수정 내역
refactor : 기능 변경이 없는 코드 수정 (예: 변수명 수정) - 수정 이유와 수정 내역
test : 테스트 코드 작성 및 수정
docs : 문서 작성 및 수정
build : 빌드 파일 작성 및 수정
style : 스타일 변경(reformat, indent)
setting: 개발 환경 설정
chore : 단순한 작업 (예: 파일 경로)

### - 하면서 알게 된 이슈

#### [1. 파이어베이스 빌드 이후 빈 화면](https://velog.io/@jisang8255/REACTfirebase..%EB%B0%B0%ED%8F%AC%ED%96%88%EB%8A%94%EB%8D%B0...%EB%B9%88-%ED%99%94%EB%A9%B4)

-   `firebase init` 이후에 public을 default로 선택할 수 있는 항목이 있다. 거기에서 public 으로 가면 안되고 build로 가야한다. 만약 잘못했다면, `firebase.json`에서 `"public": "public"` 이라고 되어 있는 것을 `"public": "build"`로 바꿔야 한다.

### 나중에 봐야하는 것들.

#### [1. 좌석지정 구현할때..](https://chat.openai.com/share/f62abc30-d8e5-4031-9329-0699eb3017f6)

-   진짜 기술적 챌린지인데 이걸 먼저 구현해야하나 싶을 정도로 내 머릿속에서 어떻게 해야할지 그림이 안그려진다. 백엔드적인 구현이 조금 필요하려나 생각중.
