// /1. 사용할 속성 import하기
import styled from "styled-components";
import { useState } from "react";


const StyledButton = styled.button`
  outline: none;
  border: 1px solid #222;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover{
    background-color: #333;
    color: #eee;
  }
`;
const Categoris = ({categoris,onSelect}) => {
  const [click,setClick] = useState("");
  return (
    <div className="category">
      <h2>퀴즈 카테고리를 선택해 주세요</h2>
      <div className="category-wrapper">
        {
          categoris.map((item,idx)=>{
            return <StyledButton key={idx} onClick={()=>{onSelect(item)}}> {item} </StyledButton>
          })
        }
      </div>
    </div>
  );
};
export default Categoris;



