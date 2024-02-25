import React from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
    background-color: #c0392b;
    height: 30xp;
    color: #fff;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on orders over $50
    </Container>
  )
}

export default Announcement