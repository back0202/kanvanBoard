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
2방법다 개념은 이해를 하나 어떻게 적용을 해야하는가에 대한 고민을 많이 하게되었다. 결국 적용을 못 하였는데 내가 생각한 이유는 지금 이 프로젝트는 작은 프로젝트이기 때문에 당장 필요하지 않다? 그렇기 때문에 이론만 알고 있는 나는 이걸 적용하기 어렵다는 결론을 해서 적용하지 못 했다.

## 알게된점
1. 타입스크립트를 사용한지 얼마 되지 않아서 오류가 많이 발생했다. 그 중에서 타입스크립트는 js와 다르게 객체에 접근할때 a["string"]으로 접근하지 못 한다는 걸 알게되었다. literal string이 무엇인지 정리하는 시간을 가졌다. 또 타입스크립트라는게 정확히 먼지 알지 못 했는데 이번에 공부하면서 정확히 정리 할 수 있었다. js는 동적타입언어이며 런타입에 타입이 결정된다. 결국 실행을 해야지 오류를 알수 있다.
타입스크립트는 정적 타입 검사로 컴파일시 오류를 찾을수 있어 코드 작성 과정에서 오류를 실시간으로 찾을수 있어 디버깅에 유리하다. 결국 변수에 타입을 미리 넣어 주면서 잘못된 타입이 들어오는걸 방지하는 거고 이걸 더 깊게 생각하면 위의 객체에 status는 todo, doing, done 3가지만 온다. 이걸 string이 아니라 todo | doing | done  literal string 이 3가지만 올수 있다고 지정해서 다른 문자가 들어오는걸 막는게 타입스크립트를 사용하는 이유와 맞다는 생각이 들었다.

2.

