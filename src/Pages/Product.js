
import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import Newsletter from '../Components/Newsletter'

const Container = styled.div``
const Wrapper = styled.div``
const ImgContainer = styled.div``
const Image = styled.img``
const InfoContainer = styled.div``
const Title = styled.h1``
const Desc = styled.p``
const Price = styled.span``



const Product = () => {
  return (
    <Container>
        <NavBar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem Ipsum</Desc>
                <Price>$20</Price>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product