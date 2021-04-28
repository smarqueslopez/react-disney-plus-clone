import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../firebase'

const Detail = (props) => {
  const { id } = useParams()
  const [detailData, setDetailData] = useState({})

  useEffect(() => {
    db.collection('movies')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data())
        } else {
          console.log('no such document in firebase 🔥')
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error)
      })
  }, [id])

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src='/images/play-icon-black.png' alt='' />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src='/images/play-icon-white.png' alt='' />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src='/images/group-icon.png' alt='' />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  )
}

const Container = styled.div`
  min-height: calc(100vh-250px);
  padding: 0 calc(3.5vw + 5px);
  display: block;
  position: relative;
  top: 72px;
  overflow-x: hidden;
`

const Background = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  width: 100%;
  height: 25vw;
  min-height: 170px;
  padding-bottom: 24px;
  margin: 0px auto;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  -webkit-box-pack: start;

  img {
    width: 35vw;
    max-width: 600px;
    min-width: 200px;
  }
`

const ContentMeta = styled.div`
  max-width: 874px;
`

const Controls = styled.div`
  margin: 24px 0px;
  min-height: 56px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`
const Player = styled.button`
  height: 56px;
  padding: 0px 24px;
  margin: 0px 22px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  color: rgb(0, 0, 0);
  background: rgb (249, 249, 249);
  cursor: pointer;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    margin: 0px 10px 0px 0px;
    font-size: 12px;

    img {
      width: 25px;
    }
  }
`

const Trailer = styled(Player)`
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  background: rgba(0, 0, 0, 0.3);
`

const AddList = styled.div`
  height: 44px;
  width: 44px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    display: inline-block;
    background-color: rgb(249, 249, 249);

    &:first-child {
      height: 2px;
      width: 16px;
      transform: translate(1px, 0px) rotate(0deg);
    }

    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translateX(-8px) rotate(0deg);
    }
  }
`

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: white;
  cursor: pointer;

  div {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: rgb(0, 0, 0);

    img {
      width: 100%;
    }
  }
`

const SubTitle = styled.div`
  min-height: 20px;
  font-size: 15px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

const Description = styled.div`
  padding: 16px 0px;
  font-size: 20px;
  line-height: 1.4;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export default Detail
