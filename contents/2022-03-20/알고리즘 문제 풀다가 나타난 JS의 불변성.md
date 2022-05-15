---
date: '2022-03-20'
title: '알고리즘 문제 풀다가 나타난 JS의 불변성'
categories: ['javascript', 'immutable']
summary: ''
thumbnail: '../../src/assets/thumbnail.png'
---

# 뇌리에 스치다

시작은 이러하다. 문자열에서 모음끼리만 역순으로 배열하는 알고리즘 문제를 접하게 되었다. ([참고 LEETCODE 345](https://leetcode.com/problems/reverse-vowels-of-a-string/)) 나의 생각은 이러했다.

```
1. 모음의 인덱스를 골라낸다. - 1번 순회
2. 인덱스의 앞과 뒤를 차례로 바꾼다. - 2번 순회
```

이 과정을 1번에 하기 위해서 문자열에 접근해서 바꾸면 되겠네 라는 생각에 아래와 같은 풀이를 생각하였다.

```js
function reverseVowel(str) {
  const vowels = 'aeiou'

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (vowels.includes(str[i])) {
      const tmp = str[i]
      str[i] = tmp[str.length - 1]
      tmp[str.length - 1] = tmp
    }
  }

  return str
}

reverseVowel('hello') // expected holle
```

'역시 Easy 난이도라 금방 풀리는군' 하면서 제출버튼을 눌렀다. 짜잔 ~ ???? 💥💥💥💥 뭐지 왜??? 아래와 같은 메세지를 마주 하였다. 결과값은 변함이 없는 'hello'라는 문자열을 출력하였다. 난 분명 스왑했단말이닷!!

![wrong](https://images.velog.io/images/jjanmo/post/56725f7d-93bb-48fc-b124-0ec37076cda1/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-03-20%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%203.12.10.png)

한동안 디버깅을 하였다. 스왑을 잘못하나? 조건을 잘못 사용했나? 문제를 잘못 이해했나? 등등. **그러다가 문득 뇌리를 스치는 문자열과 불변성 ~~💡 **

```
'아 맞다. 문자열은 인덱스로 접근은 가능하지만 이를 수정/삭제가 불가능하지.'
```

> [MDN 문서 참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String#%EB%AC%B8%EC%9E%90_%EC%A0%91%EA%B7%BC) 에도 적혀있다는...

# 기억 속 저편 어딘가에

**기억 속 어딘가에 있던 불변성**에 대한 내용으로 인해 해당 문제를 무사히(?) 해결할 수 있었다. 문제를 풀고 다시 한 번 생각해보았다.

```
그래. 문자열은 인덱스로 접근가능하지만, 수정/삭제를 할 수 없어. 그런데 왜??
원시타입이기 때문에 안되는 거자나. 원시타입은 불변성을 지니니까
그래?? 왜 그러는건데??
```

> 위 과정은 그냥 두서없는 저의 의식의 흐름입니다. 현실에서 저런식으로 주위 사람에게 왜를 남발하지 않으니, 안심하셔도 됩니다. ~~이렇게 보니 약간 정신빠지 사람 같네요.~~ 😅

이러한 왜의 남발로 인해서 원시타입과 불변성에 대해서 한번 정리해보고자한다. (사실 불변성이란 내용은 최근에는 리액트, 함수형 프로그래밍에서 많이 다루는 주제로서 불변 객체를 어떻게 만들수 있을까에 대해서 초점을 맞추고 있다. 이 부분은 나의 내공이 더 높아지는 언젠가 블로깅해볼 수 있지않을까 싶다.😇)

## 불변성이란

불변성이란, 변하지 않는 성질이라는 사전적 의미를 지닌다.

## 메모리 관점에서 원시타입

## 왜 문자열은 인덱스로 접근은 가능한데, 수정은 안되는거지?

문자열 vs 배열 메모리적으로 비교

## Ref

- https://medium.com/@lainakarosic/primitives-in-javascript-you-cant-change-index-0-of-a-string-e6f340fb4f19
- https://evan-moon.github.io/2020/01/05/what-is-immutable/
- https://sustainable-dev.tistory.com/156
- https://itnext.io/why-concept-of-immutability-is-so-damn-important-for-a-beginner-front-end-developer-8da85b565c8e
- https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec
