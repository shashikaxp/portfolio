import React from 'react';
import Background from './Background';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  height: -webkit-fill-available;
  display: flex;
  align-content: center;
  align-items: center;
`;

const BackgroundWrapper = styled.div`
  flex: 1;
  z-index: 2;
`;

const TextContainer = styled.div`
  height: fit-content;
  text-align: center;
  font-size: 5vw;
  line-height: 1.2;
  color: #fff;
  font-family: 'quicksand';
`;

const Name = styled.span`
  color: #e31b6d;
`;

const Text = styled.p`
  margin: 0;
  padding: 0;
`;

export default function Banner() {
  return (
    <ContentWrapper>
      <Background />
      <BackgroundWrapper>
        <TextContainer>
          <Text>
            Hello, i'm <Name>Shashika Weerakkody</Name>
          </Text>
          <Text>i'm a full-stack web developer.</Text>
        </TextContainer>
      </BackgroundWrapper>
    </ContentWrapper>
  );
}
