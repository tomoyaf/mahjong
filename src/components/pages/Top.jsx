import React from "react";
import styled from "styled-components";
import BasicPageTemplate from "../organisms/BasicPageTemplate";

const OuterWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const MahjongWrapper = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  max-width: calc(100vw - 10px);
  width: 32rem;
  height: 32rem;
  background: rgb(225, 253, 223);
  font-weight: bold;
  color: rgb(150, 150, 150);
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  display: flex;
  margin-top: 1.2rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: rgb(150, 150, 150);
`;
const FormTitleWrapper = styled.div`
  margin-top: 1.2rem;
  display: flex;
`;
const QuestionTitle = styled.div`
  display: flex;
  margin-bottom: 1.2rem;
`;

export default function Top() {
  return (
    <BasicPageTemplate
      contents={
        <OuterWrapper>
          <QuestionTitle>
            第1問. 以下は東風戦の4人麻雀の局面です。
          </QuestionTitle>
          <MahjongWrapper>麻雀の局面</MahjongWrapper>
          <FormTitleWrapper>
            相手の手配を予想してみてください。
          </FormTitleWrapper>
          <FormWrapper>答えを送信するためのフォーム</FormWrapper>
        </OuterWrapper>
      }
    ></BasicPageTemplate>
  );
}
