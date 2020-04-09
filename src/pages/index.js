import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Typical from 'react-typical';

import { BREAKPOINT } from '../utils/constants';

import {
  HeaderLogo,
  HeadingBlogTheme,
  HeadingTextLogo,
  HeadingXL,
  HeadingXLII,
  HeadingL,
  ImageProfile,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from '../components';

const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 15vh;
  }
`;

const TextHome = styled.p`
  color: var(--dark-color-light);
  display: block;
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 10vh;
  margin-left: auto;
  margin-right: auto;
  max-width: 28em;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 19px;
    margin-bottom: 7vh;
  }
`;

const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`;

const Home = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <ImageProfile fluid={data.profile_pixel.childImageSharp.fluid} />
          <HeadingXL>
          <Typical
              steps={['Hi,', 1000, 'Hi, Im Diogo.', 500]}
              loop={Infinity}
              wrapper="p"
            />
          </HeadingXL>

          <HeadingXLII>I'm a full-stack developer</HeadingXLII>

          <TextHome>          
          This page was created to publicize the skills
          that I developed and to return to society part of the knowledge I acquired.
          Welcome to my little big universe!
          </TextHome>

      

          <HeadingTextLogo>
            <Typical
              steps={['Blog.', 1000, 'Recent posts.', 500]}
              loop={Infinity}
              wrapper="p"
            />
          </HeadingTextLogo>

          <br />
        </Hero>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.fields.slug} key={node.id}>
            <Post>
              <HeadingL>{node.frontmatter.title}</HeadingL>
              <TextBody>{node.excerpt}</TextBody>
              <HeadingBlogTheme>{node.frontmatter.theme}</HeadingBlogTheme>
              <TextDate>{node.frontmatter.date}</TextDate>
            </Post>
          </Link>
        ))}
      </Layout>
    </>
  );
};

export default Home;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            theme
          }
          fields {
            slug
          }
          excerpt
        }
      }
    },
    profile_pixel: file(relativePath: { eq: "assets/images/diogo_pixel_1_2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
