// const quizData = {
//   categories: ["저축", "투자", "대출", "보험"],
//   quizzes: [
//     // 저축 카테고리
//     {
//       id: 1,
//       category: "저축",
//       difficulty: "쉬움",
//       question: "💬 친구 민수: \"매달 월급을 받으면 다 써버려... 나 어떻게 하지?\"\n👉 어떤 금융상품을 추천할까?",
//       choices: ["적금", "정기예금", "펀드", "대출"],
//       correct: "적금"
//     },
//     {
//       id: 2,
//       category: "저축",
//       difficulty: "보통",
//       question: "🧠 수빈이: \"이자 계산할 때 유리한 방식이 있다던데...?\"\n👉 당신의 설명은?",
//       choices: ["복리", "단리", "변동금리", "고정금리"],
//       correct: "복리"
//     },
//     {
//       id: 3,
//       category: "저축",
//       difficulty: "어려움",
//       question: "😰 민재: \"급할 때 꺼내쓸 돈을 어디에 넣어야 할까?\"\n👉 가장 적합한 금융상품은?",
//       choices: ["수시입출금 통장", "정기예금", "펀드", "채권"],
//       correct: "수시입출금 통장"
//     },
//     {
//       id: 4,
//       category: "저축",
//       difficulty: "쉬움",
//       question: "📦 한솔: \"예금도 하고, 필요하면 대출도 받을 수 있는 통장이 있대! 그게 뭐였더라?\"",
//       choices: ["마이너스 통장", "적립식 펀드", "통장 정기예금", "정기 적금"],
//       correct: "마이너스 통장"
//     },
//     {
//       id: 5,
//       category: "저축",
//       difficulty: "보통",
//       question: "💡 연우: \"세금을 줄이면서 저축할 수 있는 방법이 있다던데?\"\n👉 어떤 절세형 상품일까?",
//       choices: ["소득세", "부가가치세", "취득세", "재산세"],
//       correct: "소득세"
//     },

//     // 투자 카테고리
//     {
//       id: 6,
//       category: "투자",
//       difficulty: "쉬움",
//       question: "📘 진우: \"ETF? 그게 뭘 줄인 거야?\"\n👉 올바른 뜻은?",
//       choices: ["Exchange Traded Fund", "Equity Transfer Fund", "Economy Trade Fund", "Exchange Trade Finance"],
//       correct: "Exchange Traded Fund"
//     },
//     {
//       id: 7,
//       category: "투자",
//       difficulty: "보통",
//       question: "📈 수아: \"주식 시장에서 대표 지수를 뭐라고 해?\"\n👉 정답은?",
//       choices: ["KOSPI", "CPI", "CD", "ETF"],
//       correct: "KOSPI"
//     },
//     {
//       id: 8,
//       category: "투자",
//       difficulty: "어려움",
//       question: "📊 하민: \"여러 곳에 투자하면 뭐가 좋지?\"\n👉 분산 투자의 핵심 목적은?",
//       choices: ["수익률 증가", "위험 감소", "거래 비용 절감", "세금 우대 혜택"],
//       correct: "위험 감소"
//     },
//     {
//       id: 9,
//       category: "투자",
//       difficulty: "쉬움",
//       question: "🎯 해린: \"특정 가격에 거래할 수 있는 권리가 있다던데?\"\n👉 어떤 금융 상품일까?",
//       choices: ["옵션", "선물", "스왑", "주식"],
//       correct: "옵션"
//     },
//     {
//       id: 10,
//       category: "투자",
//       difficulty: "보통",
//       question: "🧑‍💼 태민: \"펀드 매니저가 열심히 관리해주는 펀드는 뭐지?\"\n👉 해당 유형은?",
//       choices: ["액티브 펀드", "패시브 펀드", "ETF", "리츠(REITs)"],
//       correct: "액티브 펀드"
//     },

//     // 대출 카테고리
//     {
//       id: 11,
//       category: "대출",
//       difficulty: "쉬움",
//       question: "📆 도윤: \"매달 같은 금액을 내고 있어. 이게 무슨 방식이야?\"",
//       choices: ["원리금 균등 상환", "원금 균등 상환", "만기 일시 상환", "변동 상환"],
//       correct: "원리금 균등 상환"
//     },
//     {
//       id: 12,
//       category: "대출",
//       difficulty: "보통",
//       question: "🏠 해나: \"집 살 때 대출 한도는 뭘 보고 정하지?\"",
//       choices: ["DSR", "LTV", "DTI", "금리"],
//       correct: "LTV"
//     },
//     {
//       id: 13,
//       category: "대출",
//       difficulty: "어려움",
//       question: "📉 지윤: \"요즘 대출 금리가 자꾸 바뀌어... 무슨 대출인 거야?\"",
//       choices: ["변동금리 대출", "고정금리 대출", "혼합금리 대출", "주택담보대출"],
//       correct: "변동금리 대출"
//     },
//     {
//       id: 14,
//       category: "대출",
//       difficulty: "쉬움",
//       question: "💳 소윤: \"필요할 때 조금씩 쓰는 대출은 뭐였지?\"",
//       choices: ["마이너스 통장 대출", "정기예금 대출", "모기지론", "주택담보대출"],
//       correct: "마이너스 통장 대출"
//     },
//     {
//       id: 15,
//       category: "대출",
//       difficulty: "보통",
//       question: "🔍 현우: \"DSR이 뭐야? 은행에서 자꾸 물어보던데?\"",
//       choices: ["대출자의 상환 능력", "부동산 가치", "금리 변동률", "은행 수익성"],
//       correct: "대출자의 상환 능력"
//     },

//     // 보험 카테고리
//     {
//       id: 16,
//       category: "보험",
//       difficulty: "쉬움",
//       question: "🚗 태형: \"방금 사고 났는데 보험 되겠지?\"\n👉 어떤 보험일까?",
//       choices: ["자동차보험", "생명보험", "화재보험", "실손보험"],
//       correct: "자동차보험"
//     },
//     {
//       id: 17,
//       category: "보험",
//       difficulty: "보통",
//       question: "⏳ 예진: \"보험료 못 내면 당장 효력이 없어지는 건 아니래. 그 기간이 뭐지?\"",
//       choices: ["유예기간", "면책기간", "납입기간", "보장기간"],
//       correct: "유예기간"
//     },
//     {
//       id: 18,
//       category: "보험",
//       difficulty: "어려움",
//       question: "🏥 아라: \"아플 때 치료비를 받을 수 있는 보험이 있대. 이름이 뭐야?\"",
//       choices: ["실손보험", "연금보험", "화재보험", "자동차보험"],
//       correct: "실손보험"
//     },
//     {
//       id: 19,
//       category: "보험",
//       difficulty: "쉬움",
//       question: "🕊️ 은우: \"사망하면 유가족에게 돈이 나오는 보험 있잖아?\"\n👉 그 이름은?",
//       choices: ["생명보험", "화재보험", "실손보험", "연금보험"],
//       correct: "생명보험"
//     },
//     {
//       id: 20,
//       category: "보험",
//       difficulty: "보통",
//       question: "📑 재현: \"보험료는 왜 사람마다 금액이 다르지?\"\n👉 이유는?",
//       choices: ["연령", "건강 상태", "보장 금액", "모두 해당"],
//       correct: "모두 해당"
//     }
//   ]
// };

// export default quizData;

const quizData = {
  categories: ["국가", "수도", "지형", "문화"],
  quizzes: [
    // 국가 카테고리
    {
      id: 1,
      category: "국가",
      difficulty: "쉬움",
      question: "국기의 의미가 자유, 평등, 박애인 나라는 어디일까요?",
      choices: ["프랑스", "이탈리아", "독일", "영국"],
      correct: "프랑스"
    },
    {
      id: 2,
      category: "국가",
      difficulty: "쉬움",
      question: "태극기가 국기인 나라는?",
      choices: ["대한민국", "일본", "중국", "베트남"],
      correct: "대한민국"
    },
    {
      id: 3,
      category: "국가",
      difficulty: "보통",
      question: "아마존 열대우림이 위치한 나라는?",
      choices: ["브라질", "아르헨티나", "콜롬비아", "칠레"],
      correct: "브라질"
    },
    {
      id: 4,
      category: "국가",
      difficulty: "보통",
      question: "단풍잎이 그려진 국기를 가진 나라는?",
      choices: ["캐나다", "미국", "영국", "호주"],
      correct: "캐나다"
    },
    {
      id: 5,
      category: "국가",
      difficulty: "어려움",
      question: "세계에서 가장 먼저 해가 뜨는 나라 중 하나는?",
      choices: ["뉴질랜드", "일본", "호주", "피지"],
      correct: "뉴질랜드"
    },

    // 수도 카테고리
    {
      id: 6,
      category: "수도",
      difficulty: "쉬움",
      question: "일본의 수도는 어디일까요?",
      choices: ["도쿄", "오사카", "교토", "나고야"],
      correct: "도쿄"
    },
    {
      id: 7,
      category: "수도",
      difficulty: "쉬움",
      question: "영국의 수도는?",
      choices: ["런던", "맨체스터", "에든버러", "리버풀"],
      correct: "런던"
    },
    {
      id: 8,
      category: "수도",
      difficulty: "보통",
      question: "캐나다의 수도는?",
      choices: ["오타와", "토론토", "밴쿠버", "몬트리올"],
      correct: "오타와"
    },
    {
      id: 9,
      category: "수도",
      difficulty: "보통",
      question: "인도의 수도는?",
      choices: ["뉴델리", "뭄바이", "벵갈루루", "첸나이"],
      correct: "뉴델리"
    },
    {
      id: 10,
      category: "수도",
      difficulty: "어려움",
      question: "호주의 수도는?",
      choices: ["캔버라", "시드니", "멜버른", "브리즈번"],
      correct: "캔버라"
    },

    // 지형 카테고리
    {
      id: 11,
      category: "지형",
      difficulty: "쉬움",
      question: "🏔️ 세계에서 가장 높은 산은?",
      choices: ["에베레스트", "알프스", "안데스", "킬리만자로"],
      correct: "에베레스트"
    },
    {
      id: 12,
      category: "지형",
      difficulty: "쉬움",
      question: "🌊 세계에서 가장 큰 바다는?",
      choices: ["태평양", "대서양", "인도양", "북극해"],
      correct: "태평양"
    },
    {
      id: 13,
      category: "지형",
      difficulty: "보통",
      question: "🏜️ 사하라 사막이 위치한 대륙은?",
      choices: ["아프리카", "아시아", "유럽", "오세아니아"],
      correct: "아프리카"
    },
    {
      id: 14,
      category: "지형",
      difficulty: "보통",
      question: "🏞️ 나일강이 흐르는 대륙은?",
      choices: ["아프리카", "아시아", "유럽", "남아메리카"],
      correct: "아프리카"
    },
    {
      id: 15,
      category: "지형",
      difficulty: "어려움",
      question: "🗻 '킬리만자로' 산이 위치한 나라는?",
      choices: ["탄자니아", "케냐", "에티오피아", "남아프리카공화국"],
      correct: "탄자니아"
    },

    // 문화 카테고리
    {
      id: 16,
      category: "문화",
      difficulty: "쉬움",
      question: "🎎 '스시'로 유명한 나라는?",
      choices: ["일본", "중국", "태국", "베트남"],
      correct: "일본"
    },
    {
      id: 17,
      category: "문화",
      difficulty: "쉬움",
      question: "🍕 '피자'의 본고장은?",
      choices: ["이탈리아", "프랑스", "스페인", "독일"],
      correct: "이탈리아"
    },
    {
      id: 18,
      category: "문화",
      difficulty: "보통",
      question: "🎨 '모나리자'가 전시된 박물관은?",
      choices: ["루브르 박물관", "대영 박물관", "메트로폴리탄 박물관", "에르미타주 박물관"],
      correct: "루브르 박물관"
    },
    {
      id: 19,
      category: "문화",
      difficulty: "보통",
      question: "🎭 브라질의 유명한 축제는?",
      choices: ["리우 카니발", "옥토버페스트", "디아 데 로스 무에르토스", "라 토마티나"],
      correct: "카니발"
    },
    {
      id: 20,
      category: "문화",
      difficulty: "어려움",
      question: "🎶 '탱고'가 탄생한 나라는?",
      choices: ["아르헨티나", "스페인", "멕시코", "쿠바"],
      correct: "아르헨티나"
    }
  ]
};

export default quizData;
