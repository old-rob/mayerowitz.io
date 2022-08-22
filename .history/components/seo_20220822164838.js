/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Head from "next/head"
import PropTypes from "prop-types"
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from 'utils/typography'

import Site from "../data/site"

function SEO({ description, lang, meta, title }) {

  const metaDescription = description || Site.description

  return (
    <Head>
      <TypographyStyle typography={typography} />
      <GoogleFont typography={typography} />
    </Head>
  )
}

export default SEO
