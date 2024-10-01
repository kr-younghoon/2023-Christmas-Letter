# 2023 크리스마스 편지(2023-Christmas-Letter)

`react` `firebase` `redux`

# - 서비스 소개

## 서비스 설명

React를 통한 크리스마스 편지 보내기 웹사이트를 구현하였습니다.

## 디자인 시안 공개

![디자인](https://github.com/user-attachments/assets/df6e865b-7bc3-418b-bed8-a4ae56f42286)

### 하면서 알게 된 이슈

#### [1. 파이어베이스 빌드 이후 빈 화면](https://velog.io/@jisang8255/REACTfirebase..%EB%B0%B0%ED%8F%AC%ED%96%88%EB%8A%94%EB%8D%B0...%EB%B9%88-%ED%99%94%EB%A9%B4)

-   `firebase init` 이후에 public을 default로 선택할 수 있는 항목이 있다. 거기에서 public 으로 가면 안되고 build로 가야한다. 만약 잘못했다면, `firebase.json`에서 `"public": "public"` 이라고 되어 있는 것을 `"public": "build"`로 바꿔야 한다.

#### [2. 404 페이지를 만들 때?](https://anerim.tistory.com/226#google_vignette)

- `<Route path="/*" element={<NotFound/>} />` 이런식으로 /*을 해줘야한다. 원래는 switch를 통해 `path` 없이 해줘도 됐었지만, react-router-dom 버전이 올라감에 따라 switch 가 사라지게 되었다.

#### [3. 좌석지정 구현할때..](https://chat.openai.com/share/f62abc30-d8e5-4031-9329-0699eb3017f6)

-   진짜 기술적 챌린지인데 이걸 먼저 구현해야하나 싶을 정도로 내 머릿속에서 어떻게 해야할지 그림이 안그려진다. 백엔드적인 구현이 조금 필요하려나 생각중.


