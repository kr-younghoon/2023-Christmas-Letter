## 2023 크리스마스 편지..

(일단 생략)


### 하면서 알게 된 이슈.
#### 1. 파이어베이스 빌드 이후 빈 화면
- `firebase init` 이후에 public을 default로 선택할 수 있는 항목이 있다. 거기에서 public 으로 가면 안되고 build로 가야한다. 만약 잘못했다면, `firebase.json`에서 `"public": "public"` 이라고 되어 있는 것을 `"public": "build"`로 바꿔야 한다.
