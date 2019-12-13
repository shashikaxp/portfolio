import React, { Fragment } from 'react';
import Background from './Background';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const TextContainer = styled.div`
  position: absolute;
  height: fit-content;
  left: 0;
  right: 0;
  top: 38vh;
  bottom: 0;
  text-align: center;
  font-size: 4vw;
  line-height: 1.2;
  color: #fff;
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
    <Fragment>
      <BackgroundWrapper>
        <Background />
        <TextContainer>
          <Text>
            Hello, i'm <Name>Shashika Weerakkody</Name>
          </Text>
          <Text>i'm a full-stack web developer</Text>
        </TextContainer>
      </BackgroundWrapper>
    </Fragment>
  );
}
