import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { ButtonLink } from '../components';
import { BREAKPOINT } from '../utils/constants';
import { Rocket, GitHub, Netlify, GatsbyIcon, Gatsby, Brazil, Medium, Kofi} from '../assets/icons';

const Container = styled.footer`
  margin-top: 20vh;
  padding-bottom: 10vh;
  padding-top: 5vh;
  text-align: right;
  justify-content: space-between;

  @media (max-width: ${BREAKPOINT}px) {

  }
`;

const Icon = styled.img`
  height: 50px;
  width: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    height: 28px;
    width: 28px;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <a href="https://github.com/ArikBartzadok"
      target="_blank"
      rel="noopener noreferrer"
      >
        <Icon src={GitHub} alt="Git Hub" />
      </a>

      <a
        href="https://medium.com/@diogocraft.2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={Medium} alt="Medium" />
      </a>

      <a
        href="https://app.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={Netlify} alt="Netlify" />
      </a>

      <a
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={Gatsby} alt="GatsbyJS" />
      </a>

      <a
        href="https://ko-fi.com/C0C81IJH6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={Kofi} alt="Buy Me a Coffee at ko-fi.com" />
      </a>

      <a
        href="https://diogodeveloper.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon src={Brazil} alt="Brazil" />
      </a>
    </Container>
  );
};