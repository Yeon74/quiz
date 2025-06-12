//1.퀴즈데이터 가져오기
import quizData from "./data/quizData"
import Categories from "./Components/Categories"

const App = () => {
  console.log(quizData)
  return (
    <div className="app">
      <Categories />
      
    </div>
  );
};

export default App;