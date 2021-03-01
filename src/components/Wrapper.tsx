import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const SubWrapper = styled.div`
  width: calc(100% - 150px);
  height: 100%;
  margin-left: 150px;
`;

export const Wrapper: React.FC = () => {
  return (
    <MainWrapper>
      <SubWrapper />
    </MainWrapper>
  );
};
