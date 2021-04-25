import styled from 'styled-components'

const Login = (props) => {
  return (
    <Container>
      <Content>
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
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`

export default Login
