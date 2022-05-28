---
date: '2022-03-31'
title: 'Typescript는 왜 이러는걸까'
categories: ['typescript', 'type-guard', 'type-challenge']
summary: ''
thumbnail: '../../src/assets/thumbnail.png'
---

```ts
interface Circle {
  type: number
  radius: number
}

interface Rectangle {
  type: string
  sideLength: number
}

type Shape = Circle | Rectangle

function getArea(shape: Shape) {
  if (typeof shape.type === 'number') {
    return Math.PI ** shape.radius // error 💥
  }
}
```

> 잘 돌아가는 코드 같지만 getArea() 함수 안의 리턴문에서 에러를 내뿜는다. 아래는 에러 메세지이다.

![](https://images.velog.io/images/jjanmo/post/3916ff33-2908-4234-b139-715739333ab5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-03-31%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.02.06.png)
