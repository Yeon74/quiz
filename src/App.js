//1.퀴즈데이터 가져오기
import quizData from "./data/quizData"
import Categoris from "./Components/Categoris"
import { useState } from "react";
import QuizPage from "./Components/QuizPage";
import Results from "./Components/Results";

const App = () => {

  // console.log(quizData.categoris);
  const [category, setCategory] = useState("");
  const [filterQuiz, setFilterQuiz] = useState([]);
  const [finished, setFinished] = useState(false);
  const [score,setScore] = useState(0);

 
  //자식한테 보내져야 함
  const onSelectCategory = (select) => {
    setCategory(select);
    //
    const quizArr = quizData.quizzes.filter((data)=>{
      return data. category === select;
    });
    setFilterQuiz(quizArr);
  }  
  const handleFinished = (score )=> {
    setFinished(true);
    setScore(score);

  }
  const handleRestart = ()=>{
    setCategory('');
    setFinished(false);
  }

 
  return (
    <div className="app">
      {!category && !finished &&
        <Categoris categoris={quizData.categories}
          //자식한테 보내는 함수 ↓
          onSelect={onSelectCategory}
        />
      }
      {
        category && !finished && (<QuizPage quiz={filterQuiz}
          onFinished={handleFinished}/>)
      }
      {
       finished && ( <Results onRestart={handleRestart} appScore={score}/>)
      }
      
    </div>
  );
};
export default App;