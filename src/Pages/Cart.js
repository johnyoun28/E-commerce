import React from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import styled from 'styled-components'

const Container = styled.div``

const Cart = () => {
  return (
    <Container>
        <NavBar/>
        <Announcement/>
        Cart
        <Footer/>
    </Container>
  )
}

export default Cart