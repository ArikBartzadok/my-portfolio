import styled from 'styled-components';

import { BREAKPOINT } from '../utils/constants';

export const HeadingTextLogo = styled.h3`
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

  font-size: 32px;
  font-weight: 700;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 28px;
  }
`;
