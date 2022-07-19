import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`

`
const SocialContainer = styled.div`

`
const SocialIcon = styled.div`

`

const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LOGO</Logo>
            <Desc>Lorem ipsum</Desc>
            <SocialContainer>
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon>
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>

        </Center>
        <Right>

        </Right>
    </Container>
  )
}

export default Footer