import React from "react";
import styled from "styled-components";

const CourtCreateWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 58px 0px 66px 0px;
  background-color: #f5f5f5;
`;

const BeopjeomIcon = styled.div`
  width: 150px;
  height: 150px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 27px;
`;

const CreateDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 67px;
`;

const NoTrial = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #15366d;

  &:last-child {
    margin-top: 15px;
  }
`;

const Letter = styled.div`
  width: 488px;
  height: 553px;
  background-color: yellow;
`;

export const CourtCreate: React.FC = () => {
  return (
    <CourtCreateWrapper>
      <BeopjeomIcon>법과점심</BeopjeomIcon>
      <CreateDescription>
        <NoTrial>아직 진행중인 재판이 없습니다.</NoTrial>
        <NoTrial>재판을 예약하고 열어주세요!</NoTrial>
      </CreateDescription>
      <Letter></Letter>
    </CourtCreateWrapper>
  );
};
