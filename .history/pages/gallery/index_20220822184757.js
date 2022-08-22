import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import Image from "next/image"
//import "./gallery.css"

import { getAllGalleryImages } from "../../lib/gallery"

const Container = styled.div`
  position: relative;
  max-width: 500px;
  padding: 3rem;
  width: 50%;
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

export async function getStaticProps() {
  const images = getAllGalleryImages()

  return {
    props: {
      images: images,
    },
  }
}

const Gallery = ({images}) => {
  console.log("hello")
  console.log(images)

    return(
   <Layout>
     <SEO title="Gallery" />
     {images.map(({ path, name }) => (
       <Container key={name}>
         <div style={{maxWidth: '500px', width: '100%', height: '500px', position: 'relative'}}>
            <Image
              src={`/gallery/${path}`}
              alt={name}
              blurDataURL={`/gallery/${path}`}
              placeholder="blur"
              layout="fill"
              loading="lazy"
            />
          </div>
         <Meta>
           <span>
             <SmallSamp>{name.split("_")[0]}</SmallSamp>
           </span>
           <SmallSamp>{name.split("_")[1]}</SmallSamp>
         </Meta>
       </Container>
     ))}
   </Layout>
  )
}

export default Gallery
