import React from 'react';

import { Container, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Description, ImageContent, Dot, Icons, Status, CommentIcon, RetweetIcon, LikeIcon  } from './styles';

interface Props {
  avatar: string;
  image: string;
}

const Tweet: React.FC<Props> = ({avatar, image}) => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon/>
        Você Retweetou
      </Retweeted>

      <Body>
        <Avatar>
        <img src={avatar} alt=""/>
        </Avatar>

        <Content>
          <Header>
            <strong>Pedro Cortez</strong>
            <span>@pedrocortez</span>
            <Dot/>
            <time>27 de jun</time>
          </Header>

          <Description>Foguete não tem ré</Description>

          <ImageContent>
          <img src={image} alt=""/>
          </ImageContent>

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;