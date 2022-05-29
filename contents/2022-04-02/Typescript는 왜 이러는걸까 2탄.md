---
date: '2022-04-02'
title: 'Typescript는 왜 이러는걸까 2탄'
categories: ['typescript', 'type-challenge']
summary: ''
thumbnail: '../../src/assets/thumbnail.png'
---

[type-challenge](https://github.com/type-challenges/type-challenges)라는 오픈소스를 통해서 사내에서 스터디 중이다. 이번에 고민을 하게 된 문제는 [LookUp](https://github.com/type-challenges/type-challenges/blob/master/questions/62-medium-type-lookup/README.md) 이라는 문제이다. 일반적인 풀이에 대한 해석은 어느 정도 이해를 하였는데, 갑툭튀한 **새로운 접근 방식의 풀이**가 ~~우리~~(나!!)의 머리를 멘붕에 빠지게 만들었다. 하지만 늘 그렇듯 우리는 답을 찾아낸다.(~캬캬~😎) **집단 지성**😎 으로 이를 해석하고 이해하는데 성공하였다. 그럼에도 나는 아직 먼가 해소되지 못한 부분이 있는 것 같아서 스스로 위 과정을 복기해보고자 한다.

> 아래는 해당 문제의 솔루션이기 때문에 문제를 직접 스스로의 힘으로 풀어보고 싶다면 당장 위 링크로 도망가시길 바랍니다.🙏

```ts
type LookUp<U extends object, T extends string, P = U> = U extends U
  ? [U] extends [P]
    ? T extends U[keyof U]
      ? U
      : never
    : never
  : never
```
