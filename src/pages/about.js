import React from 'react';
import { graphql } from 'gatsby';

import {
  Button,
  HeaderBack,
  HeadingXL,
  Image,
  ImageProfile,
  Layout,
  SEO,
  TextBody,
} from '../components';

const About = ({ data }) => {
  return (
    <>
      <SEO title="About me" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About me</HeadingXL>
        <ImageProfile fluid={data.profile.childImageSharp.fluid} />
        <TextBody>
        Hello welcome!


My name is Diogo. I am a student of the technical course in Informatics integrated to High School, at Etec de Mogi-Guaçu.
          <br />
          <br />
          Hello world!
        </TextBody>
        <Button href="mailto:diogo.santos134&#64;etec.sp.gov.br">Get in touch</Button>
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
