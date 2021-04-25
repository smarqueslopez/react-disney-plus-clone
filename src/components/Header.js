import styled from 'styled-components'

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img src='/images/logo.svg' alt='Disney+' />
      </Logo>
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

export default Header
