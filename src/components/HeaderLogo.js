import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { FixedBar, HeadingTextLogo } from '../components';
import { BREAKPOINT } from '../utils/constants';
import { Rocket } from '../assets/icons';

const Icon = styled.img`
  height: 34px;
  max-width: 100%;
  max-height: 100%;
  width: 34px;

  @media (max-width: ${BREAKPOINT}px) {
    height: 28px;
    width: 28px;
  }
`;

const HeaderWrapper = styled(FixedBar)`
  justify-content: space-between;
`;

const Logo = styled.p`
  font-size: 32px;
  font-weight: 700;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 28px;
  }
`;

export const HeaderLogo = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
      <Icon src={Rocket} alt="Diogo Ferreira" />
      </Link>

      <Link to="/about">
        <p>About me.</p>
      </Link>

      <Link to="/blog">
        <p>Blog.</p>
      </Link>

      <Link to="/contact">
        <p>Contact.</p>
      </Link>
    </HeaderWrapper>
  );
};
