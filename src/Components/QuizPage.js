// import { useState } from "react";


// const QuizPage = ({ quiz = [], onFinished }) => {
//     const [currentIdx,setCurrentIdx] = useState(0);
//     const [score,setScore] = useState(0);
//     const currentQuiz = quiz[currentIdx];

//     const handleClick = (item)=>{
//         //정답인지 아닌지 체크
//         // if(item === currentQuiz.correct ){
//         //     setScore(score+10);
//         // }

//         const result = (item===currentQuiz.correct) ? score+10:score;

       
//         if(currentIdx+1 < quiz.length) {
//             //계속 실행이 되어야 하고
//              setCurrentIdx(currentIdx+1);
//              setScore(result);
//         } else{
//             //문제 끝
//             // console.log('문제내는거 끝');
//            onFinished(result);
//         }
//     };

    
//     return (
//         <div className="quiz-page">
//             <h2>퀴즈({currentIdx+1}/{quiz.length})</h2>
//          <p>{currentQuiz.question}</p>
//          <div className="choices">
//            {
//             currentQuiz.choices.map((item,idx)=>{
//                 return <button key={idx} onClick={()=>{handleClick(item)}}>{item}</button>
//             })
//             }
//          </div>
//         <p>점수:{score}</p>
//         </div>
//     );
// };

// export default QuizPage;

import styled from "styled-components";
import { useState } from "react";


const QuizContainer = styled.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 24px 12px 32px 12px;
  background: #fff;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    max-width: 100vw;
    padding: 16px 4vw 24px 4vw;
    min-height: 100dvh;
  }
`;

const QuizTitle = styled.h2`
  font-size: 1.15em;
  margin-bottom: 18px;
  color: #222;
  text-align: center;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 1em;
  }
`;

const Question = styled.p`
  font-size: 1.08em;
  margin-bottom: 20px;
  color: #222;
  @media (max-width: 600px) {
    font-size: 0.99em;
  }
`;

const Choices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    gap: 8px;
  }
`;

const ChoiceButton = styled.button`
  outline: none;
  border: 1.5px solid #1976d2;
  border-radius: 0.8em;
  padding: 1em 0;
  cursor: pointer;
  background: #f2f6fa;
  color: #1976d2;
  font-size: 1.06em;
  font-weight: 500;
  transition: background 0.18s, color 0.18s, border 0.18s;
  box-shadow: 0 1px 4px rgba(25, 118, 210, 0.07);
  width: 100%;
  &:active,
  &:hover {
    background: #1976d2;
    color: #fff;
    border-color: #1565c0;
  }
  @media (max-width: 600px) {
    font-size: 0.98em;
    padding: 0.88em 0;
  }
`;

const Score = styled.p`
  font-size: 1em;
  color: #1976d2;
  text-align: right;
  margin-top: 18px;
  @media (max-width: 600px) {
    font-size: 0.95em;
  }
`;

const QuizPage = ({ quiz = [], onFinished }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const currentQuiz = quiz[currentIdx];

  const handleClick = (item) => {
    const result = item === currentQuiz.correct ? score + 10 : score;
    if (currentIdx + 1 < quiz.length) {
      setCurrentIdx(currentIdx + 1);
      setScore(result);
    } else {
      onFinished(result);
    }
  };

  return (
    <QuizContainer>
      <QuizTitle>퀴즈({currentIdx + 1}/{quiz.length})</QuizTitle>
      <Question>{currentQuiz.question}</Question>
      <Choices>
        {currentQuiz.choices.map((item, idx) => (
          <ChoiceButton key={idx} onClick={() => handleClick(item)}>
            {item}
          </ChoiceButton>
        ))}
      </Choices>
      <Score>점수: {score}</Score>
    </QuizContainer>
  );
};

export default QuizPage;
