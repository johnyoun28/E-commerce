import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    /* display: flex; */
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
    margin: 20px 0px;

`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #${props => props.color};
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3``

const List = styled.ul``

const ListItem = styled.li

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LOGO</Logo>
            <Desc>Lorem ipsum</Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>

            {/* <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List> */}

        </Center>
        <Right>

        </Right>
    </Container>
  )
}

export default Footer