# 칸반보드 만들기

## 사용기술
React, styled-components, axios

## 고민한 내용
1. 불필요한 호출
2. 
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
  
