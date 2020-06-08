import React from 'react';
import { graphql } from 'gatsby';
import Typical from 'react-typical';
import { BuyCoffe, Kofi , GitHubLogo, Alsemo, Carcaras, Euro, Ipsis, Jessica } from '../assets/icons';
import styled from 'styled-components';
import { BREAKPOINT } from '../utils/constants';

import {
  Button,
  HeaderBack,
  HeadingXL,
  HeadingXLII,
  Image,
  ImageProfile,
  Layout,
  SEO,
  TextBody,
} from '../components';

const Icon = styled.img`
  border:0px;
  height:36px;
  margin: 0 auto 10vh auto;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    height: 36px;
  }
`;

const About = ({ data }) => {
  return (
    <>
      <SEO title="About me" />
      <HeaderBack />
      <Layout>
        <HeadingXL>
          About me
        </HeadingXL>
        <ImageProfile fluid={data.profile.childImageSharp.fluid} />
        <TextBody>
          Hello, welcome!
          <br />
          My name is Diogo, but i'm virtually known as Arik Bartzadok. I am a student of the technical course in Informatics integrated to 
          High School, at Etec Euro Albino de Souza in Mogi-Guaçu.
          <br />
          This page was created to divulge the skills that I have developed and to return to the 
          society some of the knowledge I acquired.
          <br />
        </TextBody>

        <HeadingXLII>
          My work
        </HeadingXLII>
        <TextBody>
          I currently work as a free-lancer in the development of Desktop, Web applications.
          <br />
          I work with the most diverse technologies present today, among them, being able to mention:

          ReactJS,
          ReactNative,
          JavaScript,
          CSS,
          PHP,
          C#,
          C++,
          Java,
          Python and many others ...
          <br />
        </TextBody>

        <HeadingXLII>
          Projects
        </HeadingXLII>
        <TextBody>
    
        <a href="https://henrique-designer.now.sh" target="_blank">
          <Icon src={Alsemo} alt="Designer" />
        </a>
        </TextBody>
        
        <TextBody>
        
          <a href="https://ipsis-literis.now.sh" target="_blank">
          <Icon src={Ipsis} alt="Ipsis Literis" />
        </a>
        </TextBody>
        
        <TextBody>
        
          <a href="https://euro-cast.now.sh" target="_blank">
          <Icon src={Euro} alt="Euro Cast" />
        </a>
        </TextBody>
        
        <TextBody>
        
          <a href="https://jessica-sweets.now.sh" target="_blank">
          <Icon src={Jessica} alt="Jessica Sweets" />
        </a>
        </TextBody>
        
        <TextBody>
        
          <a href="https://carcaras.netlify.app" target="_blank">
          <Icon src={Carcaras} alt="Carcaras" />
        </a>
        </TextBody>

        <HeadingXLII>
          Support me
        </HeadingXLII>
        <TextBody>
          
            
          
        </TextBody>
        <a href="https://ko-fi.com/C0C81IJH6" target="_blank">
          <Icon src={BuyCoffe} alt="Buy Me a Coffee at ko-fi.com" />
        </a>

      </Layout>
    </>
  );
};

export default About;

export const query = graphql`
  query {
    profile: file(relativePath: { eq: "assets/images/diogo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
