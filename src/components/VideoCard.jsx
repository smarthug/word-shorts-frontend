import { useRef, useEffect, useState } from 'react';
import WordOverlay from './WordOverlay';
import ActionButtons from './ActionButtons';

export default function VideoCard({ word, short, totalShorts, currentIndex, isActive, onDetailClick }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // 활성 슬라이드일 때만 비디오 재생
  useEffect(() => {
    if (!videoRef.current) return;
    
    if (isActive) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked - 사용자 인터랙션 필요
        setIsPlaying(false);
      });
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isActive]);
  
  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  
  return (
    <div className="video-container" onClick={togglePlay}>
      {/* 비디오 또는 플레이스홀더 */}
      {short.videoUrl && short.videoUrl.startsWith('/') ? (
        // 로컬 비디오가 없을 때 플레이스홀더
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🎬</div>
            <p className="text-white/60 text-sm">{short.scenario}</p>
          </div>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={short.videoUrl}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      )}
      
      {/* 재생/일시정지 인디케이터 */}
      {!isPlaying && isActive && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-20 bg-black/40 rounded-full flex items-center justify-center">
            <span className="text-4xl">▶️</span>
          </div>
        </div>
      )}
      
      {/* 단어 오버레이 */}
      <WordOverlay 
        word={word} 
        short={short}
        totalShorts={totalShorts}
        currentIndex={currentIndex}
      />
      
      {/* 액션 버튼 */}
      <ActionButtons 
        word={word}
        short={short}
        onDetailClick={onDetailClick}
      />
    </div>
  );
}
