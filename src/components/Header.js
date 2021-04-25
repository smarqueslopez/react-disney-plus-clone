import styled from 'styled-components'

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <a href='/'>
          <img src='/images/logo.svg' alt='Disney+' />
        </a>
      </Logo>
      <NavMenu>
        <a href='/home'>
          <img src='/images/home-icon.svg' alt='HOME' />
          <span>HOME</span>
        </a>
        <a href='/search'>
          <img src='/images/search-icon.svg' alt='SEARCH' />
          <span>SEARCH</span>
        </a>
        <a href='/watchlist'>
          <img src='/images/watchlist-icon.svg' alt='WATCHLIST' />
          <span>WATCHLIST</span>
        </a>
        <a href='/originals'>
          <img src='/images/original-icon.svg' alt='ORIGINALS' />
          <span>ORIGINALS</span>
        </a>
        <a href='/movies'>
          <img src='/images/movie-icon.svg' alt='MOVIES' />
          <span>MOVIES</span>
        </a>
        <a href='/series'>
          <img src='/images/series-icon.svg' alt='SERIES' />
          <span>SERIES</span>
        </a>
      </NavMenu>
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

  a {
    padding: 0 12px;
    display: flex;
    align-items: center;

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

  @media (max-width: 768px) {
    display: none;
  }
`

export default Header
