import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import VideoCard from '../components/VideoCard';
import BottomSheet from '../components/BottomSheet';
import useWordStore from '../stores/useWordStore';

// Swiper 스타일
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const { words, setCurrentWordIndex, setCurrentShortIndex, currentWordIndex, currentShortIndex } = useWordStore();
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [activeWord, setActiveWord] = useState(null);
  const [activeShort, setActiveShort] = useState(null);
  
  const handleWordChange = (swiper) => {
    setCurrentWordIndex(swiper.activeIndex);
  };
  
  const handleShortChange = (wordIndex, swiper) => {
    if (wordIndex === currentWordIndex) {
      setCurrentShortIndex(swiper.activeIndex);
    }
  };
  
  const handleDetailClick = (word, short) => {
    setActiveWord(word);
    setActiveShort(short);
    setIsDetailOpen(true);
  };
  
  return (
    <div className="h-screen w-screen bg-black">
      {/* 세로 Swiper: 단어 간 이동 */}
      <Swiper
        direction="vertical"
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel]}
        onSlideChange={handleWordChange}
        className="h-full w-full"
      >
        {words.map((word, wordIndex) => (
          <SwiperSlide key={word.id}>
            {/* 가로 Swiper: 같은 단어의 쇼츠 간 이동 */}
            <Swiper
              direction="horizontal"
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              nested={true}
              onSlideChange={(swiper) => handleShortChange(wordIndex, swiper)}
              className="h-full w-full"
            >
              {word.shorts.map((short, shortIndex) => (
                <SwiperSlide key={short.id}>
                  <VideoCard
                    word={word}
                    short={short}
                    totalShorts={word.shorts.length}
                    currentIndex={shortIndex}
                    isActive={wordIndex === currentWordIndex && shortIndex === currentShortIndex}
                    onDetailClick={() => handleDetailClick(word, short)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* 상세 바텀시트 */}
      <BottomSheet
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        word={activeWord}
        short={activeShort}
      />
    </div>
  );
}
