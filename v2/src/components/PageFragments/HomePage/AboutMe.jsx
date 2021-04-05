import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello! My name is Diogo Ferreira. I'm a Jr. Web Developer who is
    passionate about various web technologies. I like to experiment with different web
    technologies. I have an experience of nearly 3 years working with LAMP stack, MERN stack
    and ELK stack. Building fancy UI's just like this one that your seeing 😅 and writing blogs about tech stacks
    is what Rolwin loves to do. Check my blog which I update every week for some Javascript and some
    cool notes on web technologies.`,
  paraTwo: `Currently I work mostly with Javascript technologies like VueJS and NodeJS. I also
    have hands on experience working with cloud infrastructures like <b>AWS</b> and have deployed applications
    keeping scalability in mind. Docker and Kubernetes are some of the cool
    tools I use for <b>CI/ CD</b>. I'm always a learner and a self taught programmer.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Diogo', 'Ferreira', 'Diogo Ferreira', 'Jr developer', 'Javascript', 'VueJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            alt="location image"
            textH4="Living in"
            textH3="Mogi Guaçu, SP, Brazil"
            height={150}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="music.png"
            alt="music image"
            textH4="Passionate about music"
            textH3="Lo-fi + Coffee = Happiness"
            height={150}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="space.png"
            alt="Science image"
            textH4="Science"
            textH3="Passionate about science"
            height={150}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="technologies.png"
            alt="technologies image"
            textH4="Innovation"
            textH3="Passionate about technology"
            height={150}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="developer.png"
            alt="developer image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={150}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Studying Technologist in"
            textH3="Multiplatform Software Development"
            height={150}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
