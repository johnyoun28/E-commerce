import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.

`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;

`
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`
const Button = styled.button`
  background-color: white;
  color: gray;
  cursor: pointer;
  padding: 10px;
  font-weight: 600;

`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      

    </Container>
  )
}

export default CategoryItem