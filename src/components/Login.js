import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
        *Monthly Price: R$ 27.90. Annual Price: R$ 279.90 upfront. Taxes and fees may apply.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);

  display: flex;
  align-items: top;
  justify-content: center;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.9;
    background-image: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;

    z-index: -1;
  }
`

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  margin-top: 100px;
  width: 85%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17px;  
`

const CTALogoOne = styled.img``

const SignUp = styled.a`
  cursor: pointer;
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1.4px;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;

  text-align: center;

  transition: all 250ms;

  &:hover {
    filter: brightness(0.9);
  }
`

const Description = styled.p`
  font-size: 11px;
  text-align: center;
  line-height: 1.2px;
`

const CTALogoTwo = styled.img`
  margin-top: 12px;
  width: 90%;
`