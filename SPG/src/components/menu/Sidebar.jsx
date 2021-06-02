import React from "react"
import { LogoImg } from "../global/GlobalStyles"
import Menu from "./menu"
import { LogoContainer, SidebarContainer } from "./styled-components"
import Logo from "../../images/logo.svg"
const Sidebar = () => {
  return (
    <SidebarContainer>
      <Menu />
      <LogoContainer>
        <LogoImg src={Logo} />
      </LogoContainer>
    </SidebarContainer>
  )
}

export default Sidebar
