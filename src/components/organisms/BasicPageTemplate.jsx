import React from "react";
import styled from "styled-components";
import Header from "./Header";

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  background: rgb(244, 245, 244);
  min-height: 100vh;
  justify-content: center;
`;

const InnerInnerWrapper = styled.div`
  width: 65rem;
  max-width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  background: rgb(250, 250, 250);
`;

export default function BasicPageTemplate(props) {
  return (
    <OuterWrapper>
      <Header />
      <InnerWrapper>
        <InnerInnerWrapper>{props.contents}</InnerInnerWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
}
