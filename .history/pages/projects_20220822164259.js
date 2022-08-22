import React from "react"
import styled from "styled-components"
import { rhythm } from "../src/utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../data/projects.json"

const Container = styled.div`
  max-width: 960px;
  padding: ${rhythm(1)};

  @media (min-width: 960px) {
    padding: ${rhythm(1)} ${rhythm(2)};
  }
`

const SmallSamp = styled.samp`
  font-size: calc(80%);
`

const Projects = () => (
    <Layout>
      <SEO title="Gallery" />
      <Container>
        <h2>Generative Art</h2>
        <ul>
          {Projects.generative.map(({ name, link, description, date}) => (
            <li key={name}>
              <a href={link} rel="noopener noreferrer" target="_blank">
                {name}
              </a>
              <br />
              <SmallSamp>{date}. {description}</SmallSamp>
            </li>
          ))}
        </ul>
        <h2>Web</h2>
        <ul>
          {Projects.web.map(({ name, link, description, date }) => (
            <li key={name}>
              <a key={name} href={link} rel="noopener noreferrer" target="_blank">
                {name}
              </a>
              <br />
              <SmallSamp>{date}. {description}</SmallSamp>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
)

export default Projects
