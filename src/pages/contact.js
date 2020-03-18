import React from 'react';
import { graphql } from 'gatsby';

import {
  Button,
  HeaderBack,
  HeadingXL,
  Image,
  Layout,
  SEO,
  TextBody,
} from '../components';

const About1 = ({ data }) => {
  return (
    <>
      <SEO title="Contact" />
      <HeaderBack />
      <Layout>
        <HeadingXL>Contact</HeadingXL>
        <TextBody>
          Name
          <br />
          Email
          <br />
          Email2
          <br />
          Telephone
        </TextBody>
        <Button href="mailto:your&#64;email.com">Get in touch</Button>
      </Layout>
    </>
  );
};

export default About1;

export const query = graphql`
  query {
    RandomPhoto: file(relativePath: { eq: "assets/images/RandomPhoto.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
