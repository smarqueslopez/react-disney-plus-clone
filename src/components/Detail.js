import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Detail = (props) => {
  const { id } = useParams()

  return <Container>Detail {id}</Container>
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`

export default Detail
