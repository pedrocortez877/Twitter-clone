import React from 'react';

import Button from '../Button'

import { Container, TopSide, Logo, MenuButton, HomeIcon, BellIcon, EmailIcon, FavoriteIcon, ProfileIcon, BotSide, Avatar, ProfileData, ExitIcon } from './styles';

interface Props {
  avatar: string;
}

const MenuBar: React.FC<Props> = ({avatar}) => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <BotSide>
        <Avatar>
        <img src={avatar} alt=""/>
        </Avatar>

        <ProfileData>
          <strong>Pedro Cortez</strong>
          <span>@pedrocortez</span>
        </ProfileData>

        <ExitIcon />

      </BotSide>
    </Container>
  );
}

export default MenuBar;