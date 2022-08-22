import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
//import "./gallery.css"

import { getAllGalleryImages } from "../../lib/gallery"

const Container = styled.div`
  max-width: 500px;
  padding: 3rem;
  width: 100%;
  margin: 0 auto;
`

const Meta = styled.div`
  padding-top: 1em;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const SmallSamp = styled.samp`
  font-size: calc(65%);
`

export async function getServerSideProps() {
  const images = getAllGalleryImages()

  return {
    paths: images,
  }
}

const Gallery = (images) => {
  console.log(images)

    return(
    <Layout>
      <SEO title="Gallery" />
      {data.allFile.edges.map(({ node }) => (
        <Container>
          <Zoom>
            <GatsbyImage image={getImage(node)} />
          </Zoom>
          <Meta>
            <span>
              <SmallSamp>{node.name.split("_")[0]}</SmallSamp>
            </span>
            <SmallSamp>{node.name.split("_")[1]}</SmallSamp>
          </Meta>
        </Container>
      ))}
    </Layout>
  )
}

export default Gallery
