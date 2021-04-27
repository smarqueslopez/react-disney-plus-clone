import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Recommends from './Recommends'
import Trending from './Trending'
import Viewers from './Viewers'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import db from '../firebase'
import { setMovies } from '../features/movie/movieSlice'
import { selectUserName } from '../features/user/userSlice'
import { useCallback } from 'react'

const Home = (props) => {
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)

  const setAllMovies = useCallback(
    (movies) => {
      dispatch(
        setMovies({
          recommend: movies.recommend,
          newDisney: movies.newDisney,
          original: movies.original,
          trending: movies.trending
        })
      )
    },
    [dispatch]
  )

  useEffect(() => {
    const movies = {
      recommend: [],
      newDisney: [],
      original: [],
      trending: []
    }
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case 'recommend':
            movies.recommend.push({ id: doc.id, ...doc.data() })
            break
          case 'new':
            movies.newDisney.push({ id: doc.id, ...doc.data() })
            break
          case 'original':
            movies.original.push({ id: doc.id, ...doc.data() })
            break
          case 'trending':
            movies.trending.push({ id: doc.id, ...doc.data() })
            break
          default:
            break
        }
      })
      setAllMovies(movies)
    })
  }, [userName, setAllMovies])

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
