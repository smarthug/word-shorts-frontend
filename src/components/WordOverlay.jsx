import { motion } from 'framer-motion';

const levelColors = {
  easy: 'bg-green-500',    // 1-3
  medium: 'bg-yellow-500', // 4-6
  hard: 'bg-red-500'       // 7-10
};

const getLevelColor = (level) => {
  if (level <= 3) return levelColors.easy;
  if (level <= 6) return levelColors.medium;
  return levelColors.hard;
};

const toeicStars = {
  high: '★★★',
  medium: '★★☆',
  low: '★☆☆'
};

export default function WordOverlay({ word, short, totalShorts, currentIndex }) {
  return (
    <motion.div 
      className="word-overlay"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* 단어 */}
      <h1 className="text-3xl font-bold text-white drop-shadow-lg mb-1">
        {word.word}
      </h1>
      
      {/* 발음 */}
      <p className="text-gray-300 text-sm mb-2">
        {word.pronunciation}
      </p>
      
      {/* 뜻 */}
      <p className="text-white text-lg font-medium mb-3">
        {word.meaningKo}
      </p>
      
      {/* 태그들 */}
      <div className="flex items-center gap-2 flex-wrap">
        {/* 레벨 */}
        <span className={`px-2 py-0.5 rounded-full text-xs font-bold text-white ${getLevelColor(word.level)}`}>
          Lv.{word.level}
        </span>
        
        {/* 카테고리 */}
        <span className="px-2 py-0.5 rounded-full text-xs bg-white/20 text-white">
          {word.category}
        </span>
        
        {/* 토익 빈출도 */}
        <span className="text-xs text-yellow-400">
          토익 {toeicStars[word.toeicFreq]}
        </span>
      </div>
      
      {/* 쇼츠 인디케이터 (2개 이상일 때만) */}
      {totalShorts > 1 && (
        <div className="flex items-center gap-1 mt-3">
          {Array.from({ length: totalShorts }).map((_, i) => (
            <div 
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === currentIndex ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
          <span className="text-xs text-white/60 ml-2">
            {currentIndex + 1}/{totalShorts}
          </span>
        </div>
      )}
    </motion.div>
  );
}
