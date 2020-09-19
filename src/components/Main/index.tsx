import React from 'react';

 import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

 import ProfilePage from '../ProfilePage';

 import Perfil from '../../assets/perfilpedro.jpeg'
 
const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Pedro Cortez</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage avatar={Perfil}/> 

       <BottomMenu> 
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> 
    </Container>
  );
}

export default Main;