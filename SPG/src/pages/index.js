import React, { useEffect } from "react"

import Seo from "../components/seo"

import Layout from "../components/layout"

import Landing from "../components/pages/landing/landing"
import { MenuProvider } from "../components/context/menuState"

const IndexPage = () => {
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  })

  function logit() {
    console.log()
  }

  return (
    <MenuProvider>
      <Layout>
        <Landing />
      </Layout>
    </MenuProvider>
  )
}

export default IndexPage
