import { motion } from 'framer-motion';
import useWordStore from '../stores/useWordStore';

export default function ActionButtons({ short, word, onDetailClick }) {
  const { toggleSaveShort, isShortSaved } = useWordStore();
  const isSaved = isShortSaved(short.id);
  
  const handleSave = () => {
    toggleSaveShort(short.id);
  };
  
  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(word.word);
      utterance.lang = 'en-US';
      speechSynthesis.speak(utterance);
    }
  };
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Word Shorts - ${word.word}`,
          text: `${word.word}: ${word.meaningKo}`,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  };
  
  const buttonVariants = {
    tap: { scale: 0.9 },
    hover: { scale: 1.1 }
  };

  return (
    <div className="action-buttons">
      {/* 저장 버튼 */}
      <motion.button
        className="flex flex-col items-center"
        variants={buttonVariants}
        whileTap="tap"
        whileHover="hover"
        onClick={handleSave}
      >
        <motion.div
          animate={isSaved ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          <span className={`text-3xl ${isSaved ? 'text-red-500' : 'text-white'}`}>
            {isSaved ? '❤️' : '🤍'}
          </span>
        </motion.div>
        <span className="text-xs text-white mt-1">{short.likeCount}</span>
      </motion.button>
      
      {/* 상세보기 버튼 */}
      <motion.button
        className="flex flex-col items-center"
        variants={buttonVariants}
        whileTap="tap"
        whileHover="hover"
        onClick={onDetailClick}
      >
        <span className="text-3xl">📖</span>
        <span className="text-xs text-white mt-1">상세</span>
      </motion.button>
      
      {/* 발음 듣기 버튼 */}
      <motion.button
        className="flex flex-col items-center"
        variants={buttonVariants}
        whileTap="tap"
        whileHover="hover"
        onClick={handleSpeak}
      >
        <span className="text-3xl">🔊</span>
        <span className="text-xs text-white mt-1">발음</span>
      </motion.button>
      
      {/* 공유 버튼 */}
      <motion.button
        className="flex flex-col items-center"
        variants={buttonVariants}
        whileTap="tap"
        whileHover="hover"
        onClick={handleShare}
      >
        <span className="text-3xl">📤</span>
        <span className="text-xs text-white mt-1">공유</span>
      </motion.button>
    </div>
  );
}
