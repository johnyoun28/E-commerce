import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Slider = () => {
  return (
    <div>
       <Container>
       <Arrow>
            <ArrowLeftOutlined />
        </Arrow>

        <Arrow>
            <ArrowRightOutlined />
        </Arrow>

       </Container>


    </div>
  )
}

export default Slider