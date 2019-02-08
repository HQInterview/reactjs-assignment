import styled, { keyframes } from 'styled-components'

export const MainWrapper = styled.div`
	display: inline-block;
	width:46%;
	margin-left: 4%;
`;

export const Move = keyframes`
  0%   {top: 50%; left: 50%;}
  50%  {top: 60%; left: 50%; }
  100% {top: 40%; left: 50%;}
`;
export const BigBall = styled.div`
  position:absolute;
  height:20px;width:20px;
  background:#3949AB;
  border-radius:50%;
  top:50%;
  margin-left:-10px;
  display:flex;
  z-index:9999;
  animation: ${Move} .9s infinite;
`

export const SmallBalls = styled.div`
  display:block;
`;

export const Sm = keyframes`
  0%   {opacity:0;}
  100% {opacity:1}
`;

export const SmallBall = styled.div`
  position:absolute;
  height:20px;width:20px;
  background:#d58c56;
  border-radius:50%;
  top:40%;
  left:50%;
  opacity:1;
  z-index:2222;
  margin-left:-10px;
  animation: ${Sm} .6s infinite;
`

export const Shadow = keyframes`
  0%   {width: 10px;}
  50%  {width: 20px; }
  100% {width: 10px;}
`

export const BallShadow = styled.div`
  position: absolute;
  top: 61%;
  left: 0px;
  right: 0;
  background: #a59f9f;
  height: 20px;
  width: 3px;
  border-radius: 50%;
  transform: rotateX(100deg);
  animation: ${Shadow} .9s infinite;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
`

export const S1m = keyframes`
  0%   {margin-left:-10px;}
  50%{ margin-left:40px;}
  100% {margin-left:-10px;}
`;

export const Sb1 = styled.div`
  animation: ${S1m} .9s infinite;
  animation-delay:.9s;
`;

export const S2m = keyframes`
  0%   {margin-left:-10px;}
  50%{ margin-left:-50px;}
  100% {margin-left:-10px;}
`;

export const Sb2 = styled.div`
  animation: ${S2m} .9s infinite;
  animation-delay:.9s;
`

export const Sb3 = styled.div`
  animation-delay:.9s;
`

export const S3m = keyframes`
  0%   {margin-left:-10px;}
  50%{ margin-left:-50px;}
  100% {margin-left:-10px;}
`

export const S4m = keyframes`
  0%   {margin-left:-10px;}
  50%{ margin-left:-90px;}
  100% {margin-left:-10px;}
`

export const Sb4 = styled.div`
  animation: ${S4m} .9s infinite;
  animation-delay:.9s;
`

export const S5m = keyframes`
  0%   {margin-left:-10px;}
  50%{ margin-left:90px;}
  100% {margin-left:-10px;}
`;

export const Sb5 = styled.div`
  animation: ${S5m} .9s infinite;
  animation-delay:.9s;
`;
