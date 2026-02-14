import { motion, AnimatePresence } from 'framer-motion';
import useWordStore from '../stores/useWordStore';

export default function BottomSheet({ isOpen, onClose, word, short }) {
  const { toggleSaveShort, isShortSaved } = useWordStore();
  
  if (!word || !short) return null;
  
  const isSaved = isShortSaved(short.id);
  
  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word.word);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 백드롭 */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* 시트 */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-slate-800 rounded-t-3xl z-50 max-h-[80vh] overflow-y-auto"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* 드래그 핸들 */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-12 h-1.5 bg-gray-500 rounded-full" />
            </div>
            
            {/* 헤더 */}
            <div className="px-6 pb-4 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">{word.word}</h2>
                <button 
                  className="p-2 hover:bg-slate-700 rounded-full transition-colors"
                  onClick={handleSpeak}
                >
                  🔊
                </button>
              </div>
              <p className="text-gray-400 text-sm">{word.pronunciation}</p>
            </div>
            
            {/* 태그 */}
            <div className="px-6 py-3 flex gap-2 border-b border-slate-700">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                Lv.{word.level}
              </span>
              <span className="px-3 py-1 bg-slate-600 text-gray-300 rounded-full text-sm">
                {word.category}
              </span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                토익 {word.toeicFreq === 'high' ? '★★★' : word.toeicFreq === 'medium' ? '★★☆' : '★☆☆'}
              </span>
            </div>
            
            {/* 의미 */}
            <div className="px-6 py-4 border-b border-slate-700">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-lg">🇰🇷</span>
                <p className="text-white text-lg">{word.meaningKo}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">🇺🇸</span>
                <p className="text-gray-300">{word.meaningEn}</p>
              </div>
            </div>
            
            {/* 예문 */}
            <div className="px-6 py-4 border-b border-slate-700">
              <h3 className="text-gray-400 text-sm mb-2">📝 예문</h3>
              <p className="text-white italic">"{word.example}"</p>
            </div>
            
            {/* 현재 쇼츠 시나리오 */}
            <div className="px-6 py-4 border-b border-slate-700">
              <h3 className="text-gray-400 text-sm mb-2">🎬 현재 시나리오</h3>
              <p className="text-white">{short.scenario}</p>
            </div>
            
            {/* 액션 버튼 */}
            <div className="px-6 py-6 flex gap-3">
              <button
                className={`flex-1 py-3 rounded-xl font-medium transition-colors ${
                  isSaved 
                    ? 'bg-red-500 text-white' 
                    : 'bg-slate-600 text-white hover:bg-slate-500'
                }`}
                onClick={() => toggleSaveShort(short.id)}
              >
                {isSaved ? '❤️ 저장됨' : '📖 저장하기'}
              </button>
              <button
                className="flex-1 py-3 rounded-xl bg-slate-600 text-white hover:bg-slate-500 font-medium transition-colors"
                onClick={onClose}
              >
                닫기
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
