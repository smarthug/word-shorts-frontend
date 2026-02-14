# Word Shorts Frontend

> 영단어 학습 쇼츠 서비스 - 프론트엔드

**🚀 Live Demo:** https://smarthug.github.io/word-shorts-frontend/

## 스택

- **React 18** + **Vite 7**
- **Swiper 12** - 2D 스와이프 네비게이션
- **Framer Motion** - 애니메이션
- **Tailwind CSS v4**
- **Zustand** - 상태 관리
- **PWA** - 앱 설치 지원

## 핵심 UX

```
         ↑ 이전 단어
         │
← 다른쇼츠 ─┼─ 다른쇼츠 →
         │
         ↓ 다음 단어
```

- **상하 스와이프**: 다른 단어로 이동
- **좌우 스와이프**: 같은 단어의 다른 쇼츠

## 실행

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인

## 빌드

```bash
npm run build
npm run preview
```

## 프로젝트 구조

```
src/
├── components/
│   ├── VideoCard.jsx      # 쇼츠 카드
│   ├── WordOverlay.jsx    # 단어 오버레이
│   ├── ActionButtons.jsx  # 액션 버튼
│   └── BottomSheet.jsx    # 단어 상세
├── pages/
│   ├── Home.jsx           # 메인 피드
│   ├── Saved.jsx          # 저장 목록 (TODO)
│   └── Search.jsx         # 검색 (TODO)
├── stores/
│   └── useWordStore.js    # Zustand 상태
└── data/
    └── mockWords.js       # 목업 데이터
```

## 문서

- [📄 페이지 구조](./docs/PAGES.md)
- [🏠 Home (홈 피드)](./docs/pages/home.md)
- [❤️ Saved (저장 목록)](./docs/pages/saved.md)
- [🔍 Search (검색)](./docs/pages/search.md)
- [⚙️ Settings (설정)](./docs/pages/settings.md)

## 관련 레포

- [word-shorts-prd](https://github.com/smarthug/word-shorts-prd) - 기획/PRD 문서
- word-shorts (백엔드) - FastAPI + ComfyUI 파이프라인

## License

MIT
