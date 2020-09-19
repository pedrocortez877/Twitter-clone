import React from 'react';

import Main from '../Main'

import MenuBar from '../MenuBar'

import SideBar  from '../SideBar'

import Perfil from '../../assets/perfilpedro.jpeg'

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar avatar={Perfil} /> 
        <Main />
        <SideBar /> 
      </Wrapper>
    </Container>
  );
}

export default Layout;