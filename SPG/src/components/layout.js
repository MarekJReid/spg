import React, {useEffect, useContext} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Sidebar from "./menu/Sidebar"

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)



  return (
    <LayoutContainer >
     
        
      <Sidebar />
      {children}
    
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 5.25rem;
  flex-direction: column;
`
