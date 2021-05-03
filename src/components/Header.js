import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth, provider } from '../firebase'
import { selectUserName, selectUserPhoto, setSignOut, setUserLogin } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'


function Header() {
  const history = useHistory()
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

  useEffect(() => {
   auth.onAuthStateChanged(async (user) => {
     if(user){
       dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }))
      history.push('/')
     }
   })
  }, [dispatch, history])

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then((result) => {
      let user = result.user;
      dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }))
      history.push('/')
    })
    .catch(err => {
      return console.error(err);
    })
  }
 

  const signOut = () => {
    auth.signOut()
    .then(() => {
      dispatch(setSignOut())
      history.push('/login')
    })
    .catch(err => {
      return console.error(err);
    })
  }

  return (
    <Nav>
      <Logo src="/images/logo.svg"/>
      { !userName ?
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer> :
        (
        <>
          <NavMenu>
            <Link to="/">
                <img src="/images/home-icon.svg" alt="home-icon"/>
                <span>HOME</span>
            </Link>
            <Link to="/search">
              <img src="/images/search-icon.svg" alt="search-icon"/>
              <span>SEARCH</span>
            </Link>
            <Link to="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="watchlist-icon"/>
              <span>WATCHLIST</span>
            </Link>
            <Link to="/originals">
              <img src="/images/original-icon.svg" alt="original-icon"/>
              <span>ORIGINALS</span>
            </Link>
            <Link to="/movies">
              <img src="/images/movie-icon.svg" alt="movie-icon"/>
              <span>MOVIES</span>
            </Link>
            <Link to="/series">
              <img src="/images/series-icon.svg" alt="series-icon"/>
              <span>SERIES</span>
            </Link>
          </NavMenu>
          <UserImg 
            onClick={signOut}
            src={userPhoto}
          />
        </>
        )  
      }
     
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
height: 70px;
background: #090b13;

display: flex;
align-items: center;
padding: 0 36px;

`

const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left:25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color: rgb(255, 255, 255);

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &::after{
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: -12px;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover{
      span:after{
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`

const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const Login = styled.div`
  cursor: pointer;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.6);

  letter-spacing: 1.5px;
  font-weight: bold;
  text-transform: uppercase;

  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`