import React from 'react';
import { 
  MainWrapper,
  Move,
  BigBall,
  SmallBalls,
  Sm,
  SmallBall,
  Shadow,
  BallShadow,
  S1m,
  Sb1,
  S2m,
  Sb2,
  Sb3,
  S3m,
  S4m,
  Sb4,
  S5m,
  Sb5
} from './LoaderStyles'

const Loading = () => {
  return (
    <MainWrapper>
      <BigBall />
      <SmallBalls>
        <SmallBall><Sb1 /></SmallBall>
        <SmallBall><Sb2 /></SmallBall>
        <SmallBall><Sb3 /></SmallBall>
        <SmallBall><Sb4 /></SmallBall>
        <SmallBall><Sb5 /></SmallBall>
      </SmallBalls>
      <BallShadow />
    </MainWrapper>
  )
}

export default Loading
