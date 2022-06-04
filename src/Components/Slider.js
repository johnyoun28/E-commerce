import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`

const Wrapper = styled.div`
    height: 100%;
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 5% 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;

`
const Button = styled.button`
    padding: 2%;
    background-color: transparent;
    cursor: pointer;
    font-size: 20px;
`



const Slider = () => {
  return (
    <div>
       <Container>
       <Arrow direction='left'>
            <ArrowLeftOutlined />
        </Arrow>

        <Wrapper>
            <Slide>
                <ImgContainer>
                <Image src="https://www.nicepng.com/png/full/8-88585_women-fashion-png-example-of-magazine-cover.png"/>
                </ImgContainer>
            <InfoContainer>
                <Title>SUMMER SALE!</Title>
                <Desc>DON'T COMPRMOISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Desc>
                <Button>SHOW NOW</Button>
            </InfoContainer>


            </Slide>

        </Wrapper>

        <Arrow direction='right'>
            <ArrowRightOutlined />
        </Arrow>

       </Container>


    </div>
  )
}

export default Slider