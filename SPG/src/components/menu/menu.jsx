import React, { useState, useContext } from "react"

import { MenuContext } from "../context/menuState"

import {
  MenuContainer,
  MenuDropdown,
  MenuHeading,
  MenuItem
} from "./styled-components"

const Menu = () => {
  const [open] = useState(false)

  return (

      <MenuContainer>
        <MenuHeading>Menu</MenuHeading>
        <MenuDropdown open={open}>
          <MenuItem to="/" activeClassName="active">
            Home
          </MenuItem>
          <MenuItem to="/book-a-table" activeClassName="active">
            {" "}
            Book a table
          </MenuItem>
          <MenuItem to="/events" activeClassName="active">
            Events
          </MenuItem>
          <MenuItem to="/whats-on" activeClassName="active">
            What's On
          </MenuItem>
          <MenuItem to="/gift-vouchers" activeClassName="active">
            {" "}
            Git Vouchers
          </MenuItem>
        </MenuDropdown>
      </MenuContainer>
     
  )
}

export default Menu
