import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import Times from "../../fonts/timr45w.ttf"

import UntitledSansLight from "../../fonts/untitled-sans-web-light.woff"
import UntitledSansLight2 from "../../fonts/untitled-sans-web-light.woff2"
import UntitledSansMedium from "../../fonts/untitled-sans-web-medium.woff"
import UntitledSansMedium2 from "../../fonts/untitled-sans-web-medium.woff2"
import UntitledSansRegular from "../../fonts/untitled-sans-web-regular.woff"
import UntitledSansRegular2 from "../../fonts/untitled-sans-web-regular.woff2"

export const GlobalStyle = createGlobalStyle`
* { 
    margin:0; 
    padding:0; 
    box-sizing:border-box;   
    
}
 @font-face {
    font-family: 'Times';
          src: local('Times'),
          url(${Times}) format('ttf'),
      }
      @font-face {
          font-family: 'UntitledSansLight';
          src: local('UntitledSansLight'), local('UntitledSansLight'),
          url(${UntitledSansLight2}) format('woff2'),
          url(${UntitledSansLight}) format('woff');
      }
      @font-face {
          font-family: 'UntitledSansMedium';
          src: local('UntitledSansMedium'), local('UntitledSansMedium'),
          url(${UntitledSansMedium2}) format('woff2'),
          url(${UntitledSansMedium}) format('woff');
      }
    
      @font-face {
          font-family: 'UntitledSansRegular';
          src: local('UntitledSansRegular'), local('UntitledSansRegular'),
          url(${UntitledSansRegular2}) format('woff2'),
          url(${UntitledSansRegular}) format('woff');
      }
 
`

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`

export const Container = styled.div`

  width: 100%;
 
  font-size: ${props => props.theme.fontSize};
  background-color: #f9f9f4;
`

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props => props.justify = `right` ? `flex-end` : `flex-start`};
  
`
export const TextContainer = styled.div`
  display: inline;
  width: 42%;
`
export const ImageContainer = styled.img`
  display: inline;
  width: 58%;
`

export const InnerContainer = styled.div`
  margin-top: 9rem;
  display: flex;
  width: 100%;
`
export const RightContainer = styled.div`
  display: inline;
  width: 42%;
`
export const LeftContainer = styled.div`
  display: inline;
  width: 58%;
`
export const LogoImg = styled.img`
  display: inline;
`

export const Header1 = styled.h1`
  font-size: 64px;
  font-family: Times;
  font-weight: bold;
  color: #333333;
`
export const BC1 = styled.p`
  margin-top: 3.5rem;
  font-size: 36px;
  font-family: UntitledSansRegular;
  line-height: 2.15rem;
  color: #333333;

  :hover {
    color: ${props => (props.link ? "#80333333" : " #333333")};
  }
`
