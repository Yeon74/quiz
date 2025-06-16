

// const Results = ({ appScore, onRestart }) => {
//     return (
//         <div className="result">
//             <p>퀴즈종료</p>
//             <p>최종점수: {appScore}점</p>
//             <button onClick={() => { onRestart() }}>다시시작</button>
//         </div>
//     );
// };

// export default Results;

import styled from "styled-components";

const ResultContainer = styled.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 32px 12px 40px 12px;
  background: #fff;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    max-width: 100vw;
    padding: 24px 4vw 28px 4vw;
    min-height: 100dvh;
  }
`;

const ResultScore = styled.div`
  font-size: 2em;
  color: #1976d2;
  margin-bottom: 18px;
  font-weight: 700;
  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`;

const RestartButton = styled.button`
  padding: 1em 0;
  width: 100%;
  max-width: 340px;
  border: none;
  border-radius: 0.8em;
  background: #1976d2;
  color: #fff;
  font-size: 1.13em;
  font-weight: 500;
  margin-top: 16px;
  transition: background 0.18s;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(25, 118, 210, 0.09);
  &:active,
  &:hover {
    background: #1565c0;
  }
  @media (max-width: 600px) {
    font-size: 1em;
    padding: 0.9em 0;
    max-width: 100%;
  }
`;

const Results = ({ onRestart, appScore }) => (
  <ResultContainer>
    <ResultScore>점수: {appScore}</ResultScore>
    <RestartButton onClick={onRestart}>다시 시작</RestartButton>
  </ResultContainer>
);

export default Results;
