# 페이지 구조

## Overview

```
/                    → 홈 (쇼츠 피드)
/saved               → 저장한 단어
/search              → 검색
/word/:id            → 단어 상세 (딥링크용)
/settings            → 설정 (P2)
```

## 라우팅 구조

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/saved" element={<Saved />} />
  <Route path="/search" element={<Search />} />
  <Route path="/word/:wordId" element={<WordDetail />} />
  <Route path="/settings" element={<Settings />} />
</Routes>
```

## 페이지별 우선순위

| 페이지 | 우선순위 | 상태 | 설명 |
|--------|----------|------|------|
| Home | P0 | ✅ Done | 메인 쇼츠 피드 |
| Saved | P1 | 🔲 TODO | 저장한 단어 목록 |
| Search | P1 | 🔲 TODO | 단어 검색 |
| WordDetail | P1 | 🔲 TODO | 딥링크 진입점 |
| Settings | P2 | 🔲 TODO | 앱 설정 |

## 네비게이션

### 하단 탭바 (P1)

```
┌─────────────────────────────────┐
│  🏠 홈    🔍 검색    ❤️ 저장   │
└─────────────────────────────────┘
```

- 홈: 쇼츠 피드 (기본)
- 검색: 단어 검색
- 저장: 저장한 단어 목록

### 상단 헤더

- 홈: 로고 + 설정 아이콘
- 검색: 검색 입력창
- 저장: 타이틀 + 편집 버튼

---

## 상세 문서

- [Home (홈 피드)](./pages/home.md)
- [Saved (저장 목록)](./pages/saved.md)
- [Search (검색)](./pages/search.md)
- [Settings (설정)](./pages/settings.md)
