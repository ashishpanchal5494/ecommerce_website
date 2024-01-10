import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import { ReactComponent as Logo } from '../../src/images/crown.svg'
import Nav from './Nav'

function Header() {
  return (
    <MainHeader>
        <NavLink to="/">
            <Logo className='logo'/>
        </NavLink>
        <Nav/>
    </MainHeader>
  )
}


const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

export default Header
