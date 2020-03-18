import styled from 'styled-components';

import { BREAKPOINT } from '../utils/constants';

export const HeadingContact = styled.h3`
background: -webkit-linear-gradient(
    240deg,
    hsl(189, 100%, 50%),
    hsl(174, 79%, 49%),
    hsl(188, 81%, 59%),
    hsl(213, 62%, 61%),
    hsl(240, 100%, 70%)
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-align: left;

  display: block;
  font-size: 20px;
  letter-spacing: -1.5px;
  line-height: 1.2;
  margin-bottom: 2.5vh;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 30px;
  }
`;
