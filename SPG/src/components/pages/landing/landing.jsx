import React from "react"
import { useTheme } from "styled-components"
import styled from "styled-components"

import HomeImage from "../../../images/homeImage.png"
import {
  Container,
  ImageContainer,
  SectionContainer,
  LeftContainer,
  RightContainer,
  InnerContainer,
  LogoImg,
  Header1,
  BC1,
} from "../../global/GlobalStyles"

import Logo from "../../../images/logo.svg"
import Menu from "../../menu/menu"
const Landing = () => {
  const theme = useTheme()
  return (
    <Container>
      <SectionContainer justify={`right`}>
        <ImageContainer theme={theme} src={HomeImage} />
      </SectionContainer>

      <SectionContainer>
        <InnerContainer>
          <RightContainer></RightContainer>
          <LeftContainer>
            <Header1>Scott Pickett Group</Header1>
            <BC1>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </BC1>
            <BC1 link>Learn More</BC1>
          </LeftContainer>
        </InnerContainer>
      </SectionContainer>
      <SectionContainer>
        <InnerContainer>
          <RightContainer></RightContainer>
          <LeftContainer>
            <Header1>Venues</Header1>
            <BC1>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur.
            </BC1>
          </LeftContainer>
        </InnerContainer>
      </SectionContainer>
    </Container>
  )
}

export default Landing
