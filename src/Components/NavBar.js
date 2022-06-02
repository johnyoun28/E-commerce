import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between ;
    align-items:center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer ;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    outline: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Header = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const MenuItems = styled.div`
    font-size: 14px ;
    cursor: pointer;
    display: flex;
    margin-left: 25px;
`

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                   <Input/> 
                   <Search style={{color:"gray", fontSize:16 }} />
                </SearchContainer>
            </Left>
            <Center>
                <Header>TESTING.</Header>
            </Center>

            <Right>
                <MenuItems>SIGN IN</MenuItems>
                <MenuItems>REGISTER</MenuItems>
                <MenuItems>
                <Badge badgeContent={100} color="primary">
                <ShoppingCartOutlined />
                </Badge>
      
  
                </MenuItems>
                
            </Right>
        </Wrapper>

    </Container>
  )
}

export default NavBar