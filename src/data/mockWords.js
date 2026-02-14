// 목업 데이터 - 단어 : 쇼츠 = 1 : N
export const mockWords = [
  {
    id: '1',
    word: 'serendipity',
    meaningKo: '뜻밖의 행운',
    meaningEn: 'The occurrence of events by chance in a happy way',
    pronunciation: '/ˌserənˈdɪpɪti/',
    level: 7,
    category: '추상/감정',
    toeicFreq: 'medium',
    example: 'Finding this cafe was pure serendipity.',
    shorts: [
      {
        id: 's1-1',
        wordId: '1',
        scenario: '카페에서 우연히 옛 친구를 만나는 장면',
        videoUrl: '/videos/serendipity-1.mp4',
        thumbnailUrl: '/thumbnails/serendipity-1.jpg',
        likeCount: 234
      },
      {
        id: 's1-2',
        wordId: '1',
        scenario: '잃어버린 지갑을 찾아주는 낯선 사람',
        videoUrl: '/videos/serendipity-2.mp4',
        thumbnailUrl: '/thumbnails/serendipity-2.jpg',
        likeCount: 189
      },
      {
        id: 's1-3',
        wordId: '1',
        scenario: '우연히 들어간 가게에서 꿈의 직장 면접 기회를 얻음',
        videoUrl: '/videos/serendipity-3.mp4',
        thumbnailUrl: '/thumbnails/serendipity-3.jpg',
        likeCount: 312
      }
    ]
  },
  {
    id: '2',
    word: 'ephemeral',
    meaningKo: '순간적인, 덧없는',
    meaningEn: 'Lasting for a very short time',
    pronunciation: '/ɪˈfemərəl/',
    level: 8,
    category: '시간/변화',
    toeicFreq: 'low',
    example: 'Fame is ephemeral in the digital age.',
    shorts: [
      {
        id: 's2-1',
        wordId: '2',
        scenario: '벚꽃이 바람에 흩날리는 장면',
        videoUrl: '/videos/ephemeral-1.mp4',
        thumbnailUrl: '/thumbnails/ephemeral-1.jpg',
        likeCount: 456
      },
      {
        id: 's2-2',
        wordId: '2',
        scenario: '눈송이가 손 위에서 녹는 순간',
        videoUrl: '/videos/ephemeral-2.mp4',
        thumbnailUrl: '/thumbnails/ephemeral-2.jpg',
        likeCount: 321
      }
    ]
  },
  {
    id: '3',
    word: 'ubiquitous',
    meaningKo: '어디에나 있는',
    meaningEn: 'Present, appearing, or found everywhere',
    pronunciation: '/juːˈbɪkwɪtəs/',
    level: 6,
    category: '상태/특성',
    toeicFreq: 'high',
    example: 'Smartphones have become ubiquitous.',
    shorts: [
      {
        id: 's3-1',
        wordId: '3',
        scenario: '거리 곳곳에서 스마트폰을 보는 사람들',
        videoUrl: '/videos/ubiquitous-1.mp4',
        thumbnailUrl: '/thumbnails/ubiquitous-1.jpg',
        likeCount: 178
      },
      {
        id: 's3-2',
        wordId: '3',
        scenario: '전 세계 어디서나 보이는 커피 프랜차이즈',
        videoUrl: '/videos/ubiquitous-2.mp4',
        thumbnailUrl: '/thumbnails/ubiquitous-2.jpg',
        likeCount: 203
      }
    ]
  },
  {
    id: '4',
    word: 'resilient',
    meaningKo: '회복력 있는',
    meaningEn: 'Able to recover quickly from difficulties',
    pronunciation: '/rɪˈzɪliənt/',
    level: 5,
    category: '성격/특성',
    toeicFreq: 'high',
    example: 'Children are often more resilient than adults.',
    shorts: [
      {
        id: 's4-1',
        wordId: '4',
        scenario: '넘어져도 다시 일어나 걷는 아이',
        videoUrl: '/videos/resilient-1.mp4',
        thumbnailUrl: '/thumbnails/resilient-1.jpg',
        likeCount: 567
      }
    ]
  },
  {
    id: '5',
    word: 'meticulous',
    meaningKo: '꼼꼼한, 세심한',
    meaningEn: 'Showing great attention to detail',
    pronunciation: '/məˈtɪkjələs/',
    level: 6,
    category: '성격/특성',
    toeicFreq: 'medium',
    example: 'She is meticulous about her work.',
    shorts: [
      {
        id: 's5-1',
        wordId: '5',
        scenario: '완벽하게 정리된 책상과 노트',
        videoUrl: '/videos/meticulous-1.mp4',
        thumbnailUrl: '/thumbnails/meticulous-1.jpg',
        likeCount: 234
      },
      {
        id: 's5-2',
        wordId: '5',
        scenario: '세밀하게 그림을 그리는 화가',
        videoUrl: '/videos/meticulous-2.mp4',
        thumbnailUrl: '/thumbnails/meticulous-2.jpg',
        likeCount: 289
      }
    ]
  }
];

export default mockWords;
