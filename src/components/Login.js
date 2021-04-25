import styled from 'styled-components'

const Login = (props) => {
  return (
    <Container>
      <Content>Content</Content>
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

export default Login
