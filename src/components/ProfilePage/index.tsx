import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';
import Feed from '../Feed'

interface Props {
  avatar: string;
}

const ProfilePage: React.FC<Props> = ({avatar}) => {
  return (
    <Container>
      <Banner>
        <Avatar>
        <img src={avatar} alt=""/>
        </Avatar>
      </Banner>

      <ProfileData>
       <EditButton outlined>Editar Perfil</EditButton>

        <h1>Pedro Cortez</h1>
        <h2>@pedro_cortez</h2>

        <p>
          Front-End Developer
        </p>

        <ul>
          <li>
            <LocationIcon />
            Franca SP, Brasil
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 14 de junho de 1999
          </li>

          <Followage>
            <span>
              Seguindo <strong>  94</strong>
            </span>
            <span>
             <strong>672  </strong> Seguidores
            </span>
          </Followage>
        </ul>
      </ProfileData>

      <Feed></Feed>
    </Container>
  );
}

export default ProfilePage;