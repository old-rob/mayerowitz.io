/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Head from "next/head"
import PropTypes from "prop-types"

import Site from "../data/site"

function SEO({ description, lang, meta, title }) {

  const metaDescription = description || Site.description

  return (
    <Head>
    </Head>
  )
}

export default SEO
