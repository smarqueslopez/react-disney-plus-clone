import styled from 'styled-components'

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg' alt='cta-logo-one' />
          <SignUp>GET IT ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon forn an additional
            fee with a Disney+ subscription. As of 03/26/21 the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src='/images/cta-logo-two.png' alt='cta-logo-two' />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  )
}

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
`

const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-bottom: 10vw;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-sizing; border-box;
`

const BgImage = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  background-image: url('/images/login-background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
`

const CTA = styled.div`
  width: 100%;
  max-width: 650px;
  margin-top: 0;
  margin-right: auto;
  margin-bottom: 2vw;
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
`

const CTALogoOne = styled.img`
  width: 100%;
  max-width: 600px;
  min-height: 1px;
  margin-bottom: 12px;
  display: block;
`

const SignUp = styled.a`
  width: 100%;
  padding: 16.5px 0;
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  font-size: 18px;
  letter-spacing: 1.5px;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #0483ee;
  }
`

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 24px 0;
  line-height: 1.5;
  letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
`

export default Login
