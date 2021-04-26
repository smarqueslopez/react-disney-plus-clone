import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Recommends from './Recommends'
import Trending from './Trending'
import Viewers from './Viewers'

const Home = (props) => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )
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
