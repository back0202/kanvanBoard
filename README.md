# 칸반보드 만들기

## 사용기술
React, styled-components, axios, typescript

## 고민한 내용
### 불필요한 호출

처음에 db를 todo, doing, done 3가지로 나눴다. 문제는 api 호출을 할때 3번 호출을 해야한다는 것과 드래그앤 드랍 순서를 변경하고 db를 변경할때 api를 2번 호출해서 불필요한 호출이 많아진다는것이다. 
그래서 
```
  kanbanBoard: [
   {
      "title": 4,
      "content": 12,
      "id": 1,
      "deadLine": 22,
      "status": "todo",
      "manager": "백광천",
      "order": 1024
    },
  ]
```
  
kanbanBoadr라는 배열에 객체를 넣고 status라는 프로퍼티를 너어서 3가지 상태를 구분해 줬다.
(json server에서 중첩? 이 안돼는거 같아서 이 방법사용)






### 각 상태별 순서를 어떻게 지정할것인가

https://velog.io/@server30sopt/DB%EC%97%90%EC%84%9C-%EC%83%81%EB%8C%80%EC%A0%81-%EC%9C%84%EC%B9%98-%EA%B0%92%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%B4-%EB%93%9C%EB%9E%98%EA%B7%B8-%EC%95%A4-%EB%93%9C%EB%A1%AD%EC%9C%BC%EB%A1%9C-%EC%9D%B8%ED%95%9C-%EC%88%9C%EC%84%9C-%EB%B3%80%EA%B2%BD-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0

order이라는 프러퍼티를 줘서 상대적 인덱스를 기준으로 순서를 변경하였다.


### 이 코드는 유지보수가 편리한 코드인가

결국 코딩은 유지보수가 편리한 앱을 만드는 것이 목표인데, 이 코드는 유지보수가 편리한가 라는 고민을 하였다. 객체지향프로그래밍과 함수형프로그래밍을 적용시켜보고 싶었다.
2방법다 개념은 이해를 하나 어떻게 적용을 해야하는가에 대한 고민을 많이 하게되었다.
