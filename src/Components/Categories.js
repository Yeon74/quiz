//1. 사용할 속성 import하기
import styled from "styled-components";
import { useState } from "react";
const Categoris = () => {
  const [click,setClick] = useState("");
  return (
    <div className="category">
      <h2>퀴즈 카테고리를 선택해 주세요</h2>
      <div>
        <button> 저축 </button>
        <button> 투자 </button>
        <button> 대출 </button>
        <button> 보험 </button>
      </div>
    </div>
  );
};
export default Categoris;