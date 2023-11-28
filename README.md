# 오늘의 집 사이트 클론 코딩 

**[실제 사이트](https://ohou.se/)
[제작한 사이트](https://chloeun.github.io/)**


"오늘의 집" 사이트를 클론하여 구현한 웹 페이지입니다. 
`flex` 와 `grid` 를 사용하여 최대한 원본 페이지와 유사한 레이아웃을 구성하고, JavaScript Swiper 라이브러리를 활용하여 몇 가지 기능을 구현하였습니다.

## 주요 기능 및 구현 내용

### 1. 레이아웃 및 디자인

`flex` 와 `grid` 를 사용하여 페이지 레이아웃을 설계하였습니다. 이미지에 호버 효과를 부여하여 사용자가 상호작용할 때 시각적인 효과를 증가시켰습니다.

### 2. Javascript - Swiper

#### 2.1 배너 스와이퍼

오른쪽 배너 부분에는 Swiper 라이브러리를 사용하여 이미지 슬라이드를 구현하였습니다. 

```javascript
new Swiper ('.__rightBanner .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  navigation: {
    prevEl: '.__rightBanner .swiper-prev',
    nextEl: '.__rightBanner .swiper-next'
  }
});
```

#### 2.2 실시간 순위 스와이퍼

실시간 순위 부분에서는 세로 방향의 Swiper를 활용하여 수직으로 슬라이드 하는 기능을 구현했습니다.

#### 2.3 카테고리 스와이퍼

카테고리 부분에 Swiper 라이브러리를 적용하여 사용자가 다양한 카테고리를 슬라이드하여 선택할 수 있는 기능을 구현했습니다. 

```js
new Swiper(".category .mySwiper", {
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 16
    },
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
```
카테고리 부분에서는 Swiper 이전/다음 버튼이 마우스 호버 시 나타나도록 구현하였습니다. 

### 3. 이미지 위에 설명 추가

일부 이미지에는 `position: absolute`를 사용하여 이미지 위에 요소를 추가했습니다. 
