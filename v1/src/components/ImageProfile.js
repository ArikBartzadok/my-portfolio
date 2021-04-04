import styled from 'styled-components';
import Img from 'gatsby-image';

import { BREAKPOINT } from '../utils/constants';

export const ImageProfile = styled(Img)`
  margin: 2% 25% 5vh 25%;
  border-radius: 75px;

  @media (max-width: ${BREAKPOINT}px) {
    margin: 0 0 5vh 0;
  }
`;
