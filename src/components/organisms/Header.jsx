import React from "react";
import styled from "styled-components";

const OuterWrapper = styled.div`
  display: flex;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  height: 52px;
  align-items: center;
  padding: 0 14px;
  justify-content: space-between;
  z-index: 100;
`;

const SiteName = styled.div`
  font-size: 1.2rem;
  color: rgb(30, 180, 20);
`;
const Control = styled.div``;

export default function Header() {
  return (
    <OuterWrapper>
      <SiteName>麻雀学習</SiteName>
      <Control>何かしらのボタン</Control>
    </OuterWrapper>
  );
}
