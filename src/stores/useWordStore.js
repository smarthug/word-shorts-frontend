import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { mockWords } from '../data/mockWords';

const useWordStore = create(
  persist(
    (set, get) => ({
      // 데이터
      words: mockWords,
      savedShortIds: [], // 저장한 쇼츠 ID 목록
      
      // 현재 위치
      currentWordIndex: 0,
      currentShortIndex: 0,
      
      // 액션: 단어 이동 (상하 스와이프)
      setCurrentWordIndex: (index) => {
        set({ 
          currentWordIndex: index,
          currentShortIndex: 0  // 단어 바꾸면 쇼츠 인덱스 리셋
        });
      },
      
      // 액션: 쇼츠 이동 (좌우 스와이프)
      setCurrentShortIndex: (index) => {
        set({ currentShortIndex: index });
      },
      
      // 액션: 쇼츠 저장/해제
      toggleSaveShort: (shortId) => {
        const { savedShortIds } = get();
        if (savedShortIds.includes(shortId)) {
          set({ savedShortIds: savedShortIds.filter(id => id !== shortId) });
        } else {
          set({ savedShortIds: [...savedShortIds, shortId] });
        }
      },
      
      // 액션: 저장 여부 확인
      isShortSaved: (shortId) => {
        return get().savedShortIds.includes(shortId);
      },
      
      // 현재 단어 가져오기
      getCurrentWord: () => {
        const { words, currentWordIndex } = get();
        return words[currentWordIndex];
      },
      
      // 현재 쇼츠 가져오기
      getCurrentShort: () => {
        const { words, currentWordIndex, currentShortIndex } = get();
        const word = words[currentWordIndex];
        return word?.shorts[currentShortIndex];
      },
      
      // 저장된 쇼츠 목록 가져오기
      getSavedShorts: () => {
        const { words, savedShortIds } = get();
        const saved = [];
        words.forEach(word => {
          word.shorts.forEach(short => {
            if (savedShortIds.includes(short.id)) {
              saved.push({ ...short, word: word.word, meaningKo: word.meaningKo });
            }
          });
        });
        return saved;
      }
    }),
    {
      name: 'word-shorts-storage',
      partialize: (state) => ({ savedShortIds: state.savedShortIds })
    }
  )
);

export default useWordStore;
