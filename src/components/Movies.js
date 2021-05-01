import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/77CD8DDC0961550A0E431627EC759D5DA9F52802D00B23DA64754B315E473E83/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="recommended-img"/>
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/77CD8DDC0961550A0E431627EC759D5DA9F52802D00B23DA64754B315E473E83/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="recommended-img"/>
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/77CD8DDC0961550A0E431627EC759D5DA9F52802D00B23DA64754B315E473E83/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="recommended-img"/>
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/77CD8DDC0961550A0E431627EC759D5DA9F52802D00B23DA64754B315E473E83/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="recommended-img"/>
        </Wrap>
      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`
  margin-top: 30px;
`

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);

  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  overflow: hidden;

  img {
    width:100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scaleX(1.05);
    border-color:rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`