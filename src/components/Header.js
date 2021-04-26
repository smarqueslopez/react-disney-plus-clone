import styled from 'styled-components'
import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { auth, provider } from '../firebase'
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState
} from '../features/user/userSlice'

const Header = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

  const setUser = useCallback(
    (user) => {
      dispatch(
        setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        })
      )
    },
    [dispatch]
  )

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user)
        history.push('/home')
      }
    })
  }, [setUser, history])

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => setUser(result.user))
        .catch((error) => alert(error.message))
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState())
          history.push('/')
        })
        .catch((error) => alert(error.message))
    }
  }

  return (
    <Nav>
      <Logo>
        <img src='/images/logo.svg' alt='Disney+' />
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <div>
              <img src='/images/home-icon.svg' alt='HOME' />
              <span>HOME</span>
            </div>
            <div>
              <img src='/images/search-icon.svg' alt='SEARCH' />
              <span>SEARCH</span>
            </div>
            <div>
              <img src='/images/watchlist-icon.svg' alt='WATCHLIST' />
              <span>WATCHLIST</span>
            </div>
            <div>
              <img src='/images/original-icon.svg' alt='ORIGINALS' />
              <span>ORIGINALS</span>
            </div>
            <div>
              <img src='/images/movie-icon.svg' alt='MOVIES' />
              <span>MOVIES</span>
            </div>
            <div>
              <img src='/images/series-icon.svg' alt='SERIES' />
              <span>SERIES</span>
            </div>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  )
}

const Nav = styled.nav`
  height: 70px;
  padding: 0 36px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  background-color: #090b13;
  letter-spacing: 16px;
`

const Logo = styled.a`
  width: 80px;
  max-height: 70px;
  padding: 0;
  margin-top: 4px;
  display: inline-block;
  font-size: 0;
  cursor: pointer;

  img {
    width: 100%;
    display: block;
  }
`

const NavMenu = styled.div`
  height: 100%;
  margin-right: auto;
  margin-left: 25px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  div {
    padding: 0 12px;
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
      margin-right: 5px;
    }

    span {
      padding: 2px 0px;
      position: relative;
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      white-space: nowrap;
      color: rgb(249, 249, 249);

      &:before {
        content: '';
        width: auto;
        height: 2px;
        position: absolute;
        bottom: -6px;
        left: 0px;
        right: 0px;
        opacity: 0;
        visibility: hidden;
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:before {
        opacity: 1;
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }

  /*
  @media (max-width: 769px) {
    display: none;
  }
  */
`

const Login = styled.a`
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, 0.6);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    color: #000;
    background-color: #f9f9f9;
    border-color: transparent;
  }
`

const UserImg = styled.img`
  height: 100%;
`

const DropDown = styled.div`
  width: 100px;
  padding: 10px;
  position: absolute;
  top: 48px;
  right: 0px;
  opacity: 0;
  font-size: 14px;
  letter-spacing: 3px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
`

const SignOut = styled.div`
  height: 48px;
  width: 48px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${UserImg} {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`

export default Header
