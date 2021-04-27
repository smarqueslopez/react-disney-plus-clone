import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectNewDisney } from '../features/movie/movieSlice'

const NewDisney = (props) => {
  const movies = useSelector(selectNewDisney)

  return (
    <Container>
      <Title>New in Disney+</Title>
      <Content>
        {movies?.map((movie, key) => {
          return (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          )
        })}
      </Content>
    </Container>
  )
}

const Title = styled.h4`
  margin: 21.28px 0;
`

const Container = styled.div`
  padding: 0 0 26px 0;
`

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const Wrap = styled.div`
  padding-top: 56.25%;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    inset: 0px;
    position: absolute;
    top: 0;
    display: block;
    opacity: 1;
    object-fit: cover;
    z-index: 1;
    transition: opacity 500ms ease-in-out 0s;
  }

  &:hover {
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
  }
`

export default NewDisney
