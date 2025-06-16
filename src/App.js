
import quizData from "./data/quizData";
import Categoris from "./Components/Categoris";
import { useState } from "react";
import QuizPage from "./Components/QuizPage";
import Results from "./Components/Results";

// 감각적인 모바일 프레임 스타일
const outerFrameStyle = {
  maxWidth: 390,
  margin: "48px auto",
  padding: "32px 0 24px 0",
  background: "linear-gradient(135deg, #f2f6ff 0%, #e0e3ea 100%)",
  borderRadius: "48px",
  boxShadow: "0 8px 32px 0 rgba(40,60,120,0.18), 0 1.5px 0 #fff inset",
  border: "2.5px solid #dde2ef",
  position: "relative",
  minHeight: "820px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const speakerStyle = {
  width: "60px",
  height: "7px",
  background: "linear-gradient(90deg, #b7bac1 0%, #e6e9f2 100%)",
  borderRadius: "4px",
  margin: "0 auto 16px auto",
  boxShadow: "0 1px 4px #b7bac1",
};

const innerScreenStyle = {
  background: "rgba(255,255,255,0.98)",
  borderRadius: "28px",
  minHeight: "730px",
  width: "340px",
  margin: "0 auto",
  boxShadow: "0 2px 16px 0 rgba(80,120,200,0.10)",
  padding: "0",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const homeButtonStyle = {
  width: "48px",
  height: "48px",
  background: "radial-gradient(circle at 60% 40%, #e5eaf5 60%, #cfd7e6 100%)",
  borderRadius: "50%",
  position: "absolute",
  left: "50%",
  bottom: "30px",
  transform: "translateX(-50%)",
  boxShadow: "0 2px 8px #b7bac1",
  border: "2px solid #e3e7f2",
};

const App = () => {
  const [category, setCategory] = useState("");
  const [filterQuiz, setFilterQuiz] = useState([]);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  // 카테고리 선택 시
  const onSelectCategory = (select) => {
    setCategory(select);
    const quizArr = quizData.quizzes.filter((data) => data.category === select);
    setFilterQuiz(quizArr);
  };

  // 퀴즈 종료 시
  const handleFinished = (score) => {
    setFinished(true);
    setScore(score);
  };

  // 퀴즈 재시작 시
  const handleRestart = () => {
    setCategory('');
    setFinished(false);
  };

  return (
    <div style={outerFrameStyle}>
      <div style={speakerStyle}></div>
      <div style={innerScreenStyle}>
        {!category && !finished && (
          <Categoris
            categoris={quizData.categories}
            onSelect={onSelectCategory}
          />
        )}
        {category && !finished && (
          <QuizPage quiz={filterQuiz} onFinished={handleFinished} />
        )}
        {finished && (
          <Results onRestart={handleRestart} appScore={score} />
        )}
      </div>
      <div style={homeButtonStyle}></div>
    </div>
  );
};

export default App;
