import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom' 
import db from '../firebase'

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    db.collection("movies")
    .doc(id)
    .get()
    .then((doc)=> {
      doc ? setMovie(doc.data()) : window.location.href="../index.html"
    })
  }, [id])

  return (
    <Container>
      {movie &&
       (
         <>
            <Background>
              <img src={movie.backgroundImg} alt={movie.title}/>
            </Background>

            <ImageTitle>
              <img src={movie.titleImg} alt={movie.title}/>
            </ImageTitle>

            <Controls>
              <PlayButton>
                <img src="/images/play-icon-black.png" alt="play"/>
                <span>PLAY</span>
              </PlayButton>
              <TrailerButton>
                <img src="/images/play-icon-white.png" alt="trailer"/>
                <span>TRAILER</span>
              </TrailerButton>
              <AddButton>
                <span>+</span>
              </AddButton>
              <GroupWatchButton>
                <img src="/images/group-icon.png" alt="group"/>
              </GroupWatchButton>
            </Controls>
            <Subtitle>
            {movie.subTitle}
            </Subtitle>
            <Description>
              {movie.description}
            </Description>
         </>
       )
      }
    </Container>
  )
}

export default Detail

const Container = styled.div`
min-height: calc(100vh -70px);
padding: 0 calc(3.5vw + 5px);
position: relative;
`

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.8;

  z-index: -1;

  img {
    width: 100%;
    height:100%;
    object-fit: cover;
  }
`
const ImageTitle = styled.div`
  min-height: 170px;
  min-width: 200px;
  margin-top: 60px;
  height: 30vh;
  width: 35vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.button`
  display: flex;
  align-items: center;

  background: transparent;
  border: none;

`

const PlayButton = styled.button`
  cursor: pointer;
  border-radius: 4px;
  font-size: 15px;
  letter-spacing: 1.8px;
  padding: 0px 24px;
  margin-right: 22px;
  height: 56px;
  background: rgb(249,249,249);
  border: none;

  display: flex;
  align-items: center;

  &:hover {
    background: rgb(218, 218, 218);
  
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

`

const AddButton = styled.button`
  cursor: pointer;
  width: 44px;
  height: 44px;
  margin-right: 16px;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: invert(1);
    border: none;
  }

  span {
    font-size: 30px;
    color: rgb(255, 255, 255);
  }
`

const GroupWatchButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const Description = styled.p`
  color: rgb(249, 249, 249);
  line-height: 1,4px;
  font-size: 20px;
  margin-top: 16px;
  max-width: 760px;
  white-space: normal;
`
