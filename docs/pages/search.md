# Search (검색)

> 단어 검색 및 필터링

## 경로
- Route: `/search`
- Component: `src/pages/Search.jsx`
- 우선순위: P1

## 레이아웃

```
┌─────────────────────────────┐
│  🔍 영단어 검색...      ✕   │ ← 검색 입력
├─────────────────────────────┤
│                             │
│  빠른 필터                   │
│  ┌────┐ ┌────┐ ┌────┐      │
│  │토익│ │회화│ │일상│ ...   │
│  └────┘ └────┘ └────┘      │
│                             │
│  레벨                        │
│  ○ 전체  ○ 초급  ○ 중급  ○ 고급 │
│                             │
├─────────────────────────────┤
│  인기 단어                   │
│                             │
│  1. serendipity   Lv.7     │
│  2. ephemeral     Lv.8     │
│  3. ubiquitous    Lv.6     │
│  ...                        │
│                             │
├─────────────────────────────┤
│  🏠      🔍      ❤️        │
└─────────────────────────────┘
```

## 검색 결과

```
┌─────────────────────────────┐
│  🔍 seren                ✕  │
├─────────────────────────────┤
│                             │
│  검색 결과 (2)               │
│                             │
│  ┌─────┐ serendipity        │
│  │ 🖼️  │ 뜻밖의 행운         │
│  └─────┘ Lv.7 · 쇼츠 3개    │
│                             │
│  ┌─────┐ serene             │
│  │ 🖼️  │ 고요한, 평온한      │
│  └─────┘ Lv.5 · 쇼츠 2개    │
│                             │
├─────────────────────────────┤
│  🏠      🔍      ❤️        │
└─────────────────────────────┘
```

## 필터 옵션

### 카테고리
- 토익 빈출
- 일상 회화
- 비즈니스
- 감정/추상
- 시간/변화

### 레벨
| 레벨 | 범위 | 설명 |
|------|------|------|
| 초급 | 1-3 | 기초 어휘 |
| 중급 | 4-6 | 일반 어휘 |
| 고급 | 7-10 | 고급 어휘 |

### 정렬
- 관련도순 (기본)
- 인기순
- 레벨순

## 컴포넌트 구조

```
Search
├── SearchHeader
│   ├── SearchInput
│   └── ClearButton
├── FilterSection (검색 전)
│   ├── QuickFilters (카테고리 칩)
│   └── LevelFilter (라디오)
├── SearchResults (검색 후)
│   └── WordCard (반복)
├── PopularWords (검색 전)
│   └── WordRow (반복)
└── TabBar
```

## 검색 로직

```js
// 클라이언트 필터링 (MVP)
const searchWords = (query, filters) => {
  return words.filter(word => {
    const matchQuery = word.word.includes(query) || 
                       word.meaningKo.includes(query);
    const matchLevel = filters.level === 'all' || 
                       getLevelRange(filters.level).includes(word.level);
    const matchCategory = !filters.category || 
                          word.category === filters.category;
    return matchQuery && matchLevel && matchCategory;
  });
};
```

## TODO

- [ ] 검색 입력 UI
- [ ] 실시간 검색 (debounce)
- [ ] 카테고리 필터
- [ ] 레벨 필터
- [ ] 검색 결과 목록
- [ ] 인기 단어 (검색 전)
- [ ] 최근 검색어
- [ ] 빈 결과 UI
