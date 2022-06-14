import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #fcf5f5;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Title = styled.h1``
const Desc = styled.div``
const InputContainer = styled.div``
const Input = styled.input``
const Button = styled.button``

const Newsletter = () => {
  return (
      <Container>
          <Title>Newsletter</Title>
          <Desc>Get timely updates from your favorite products.</Desc>
          <InputContainer>
            <Input placeholder='Your email'/>
            <Button>
                <Send/>
            </Button>
          </InputContainer>
      </Container>

  )
}

export default Newsletter