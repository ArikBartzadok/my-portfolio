import React from 'react';
import { graphql } from 'gatsby';

import {
  HeaderBack,
  HeadingBlogTheme,
  HeadingXL,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from '../components';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <>
      <SEO title={post.frontmatter.title} />
      <HeaderBack />
      <Layout>
        <HeadingXL>{post.frontmatter.title}</HeadingXL>
        <HeadingBlogTheme>{post.frontmatter.theme}</HeadingBlogTheme>
        <TextDate>{post.frontmatter.date}</TextDate>
        <TextBody dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </>
  );
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        theme
      }
    }
  }
`;
