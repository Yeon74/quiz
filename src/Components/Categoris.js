

import styled from "styled-components";

const CategoryContainer = styled.div`
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

const CategoryTitle = styled.h2`
  font-size: 1.3em;
  margin-bottom: 28px;
  text-align: center;
  color: #222;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 1.1em;
    margin-bottom: 20px;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
  @media (max-width: 600px) {
    gap: 10px;
    max-width: 100%;
  }
`;

const StyledButton = styled.button`
  outline: none;
  border: 1.5px solid #1976d2;
  border-radius: 1rem;
  padding: 1.05em 0;
  cursor: pointer;
  background: #f7faff;
  color: #1976d2;
  font-size: 1.13em;
  font-weight: 500;
  transition: background 0.18s, color 0.18s, border 0.18s;
  box-shadow: 0 1px 4px rgba(25, 118, 210, 0.07);
  width: 100%;
  &:active,
  &:hover {
    background-color: #1976d2;
    color: #fff;
    border-color: #1565c0;
  }
  @media (max-width: 600px) {
    font-size: 1em;
    padding: 0.9em 0;
  }
`;

const Categoris = ({ categoris, onSelect }) => (
  <CategoryContainer>
    <CategoryTitle>퀴즈 카테고리를 선택해 주세요</CategoryTitle>
    <CategoryWrapper>
      {categoris.map((item, idx) => (
        <StyledButton key={idx} onClick={() => onSelect(item)}>
          {item}
        </StyledButton>
      ))}
    </CategoryWrapper>
  </CategoryContainer>
);

export default Categoris;
