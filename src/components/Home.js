import styled from 'styled-components'

const Home = (props) => {
  return <Container>HOME</Container>
}

const Container = styled.main`
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  top: 72px;
  display: block;
  overflow-x: hidden;

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0px;
    opacity: 1;
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
  }
`

export default Home
