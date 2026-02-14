# Home (홈 피드)

> 메인 쇼츠 피드 - 앱의 핵심 화면

## 경로
- Route: `/`
- Component: `src/pages/Home.jsx`

## 레이아웃

```
┌─────────────────────────────┐
│  Word Shorts          ⚙️   │ ← 헤더 (선택적)
├─────────────────────────────┤
│                             │
│                             │
│      [ 영상 / 이미지 ]       │ ← 풀스크린 9:16
│                             │
│                             │
│  ┌───────────────────────┐  │
│  │ serendipity           │  │
│  │ 뜻밖의 행운            │  │
│  │ Lv.7 · 토익빈출        │  │
│  │ ● ○ ○  (1/3)          │  │ ← 쇼츠 인디케이터
│  └───────────────────────┘  │
│                             │
│                    ❤️ 234   │ ← 액션 버튼
│                    📖       │
│                    🔊       │
│                    📤       │
├─────────────────────────────┤
│  🏠      🔍      ❤️        │ ← 하단 탭바 (P1)
└─────────────────────────────┘
```

## 스와이프 인터랙션

### 2D 네비게이션

```
           ↑ 이전 단어
           │
← 다른쇼츠 ─┼─ 다른쇼츠 →
           │
           ↓ 다음 단어
```

| 방향 | 동작 | Swiper |
|------|------|--------|
| ↑↓ 상하 | 단어 변경 | Outer (vertical) |
| ←→ 좌우 | 같은 단어 다른 쇼츠 | Inner (horizontal, nested) |

## 컴포넌트 구조

```
Home
├── Swiper (vertical) ─────────── 단어 간 이동
│   └── SwiperSlide
│       └── Swiper (horizontal) ─ 쇼츠 간 이동
│           └── SwiperSlide
│               └── VideoCard
│                   ├── Video/Image
│                   ├── WordOverlay
│                   └── ActionButtons
└── BottomSheet ───────────────── 단어 상세 (모달)
```

## 상태 관리

```js
// useWordStore.js
{
  words: Word[],           // 단어 목록
  currentWordIndex: number,
  currentShortIndex: number,
  savedShortIds: string[], // localStorage 저장
}
```

## 액션 버튼

| 버튼 | 동작 | 구현 |
|------|------|------|
| ❤️ | 저장/해제 | Zustand + localStorage |
| 📖 | 상세 보기 | BottomSheet 열기 |
| 🔊 | 발음 듣기 | Web Speech API |
| 📤 | 공유 | Web Share API |

## 비디오 재생

- 활성 슬라이드만 재생 (`isActive` prop)
- 음소거 기본 (autoplay 정책)
- 탭하면 재생/일시정지 토글
- 슬라이드 벗어나면 정지 + 처음으로

## 성능 최적화

- [ ] 가상화 (많은 단어 시)
- [ ] 비디오 프리로딩 (다음 1-2개)
- [ ] 이미지 lazy loading
- [ ] Skeleton UI

## TODO

- [x] 기본 스와이프 네비게이션
- [x] 단어 오버레이
- [x] 액션 버튼
- [x] 바텀시트
- [ ] 하단 탭바
- [ ] 실제 비디오 연동
- [ ] 무한 스크롤 / 페이지네이션
