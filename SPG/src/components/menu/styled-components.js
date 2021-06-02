import React from 'react'
import styled, {css} from 'styled-components'
import {Link} from 'gatsby'

export const SidebarContainer = styled.div `
width: 16%;
min-height: 100vh;
position: fixed;
`
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  color: #333333;
  
  top: 4.75rem;
  left: 84px;
`;

export const MenuDropdown = styled.div`
height: auto;
display: flex;
flex-direction: column;
`
export const MenuHeading = styled.div`
   font-family: "UntitledSansMedium"; 
  font-size: "28px";
  line-height: "1.3";
  width: 100%;
  
  text-transform: uppercase;
`;
export const MenuItem = styled(Link)`
  width: 100%;
  text-transform: capitalize;
  text-decoration: none;
  color: #333333;
  font-family: "UntitledSansRegular";
  &:hover {
    font-family: "UntitledSansMedium"; 
  }
  &.active {
    font-family: "UntitledSansMedium"; 
  }
`;


export const LogoContainer = styled.div`
position: fixed;
bottom: 96px;
`