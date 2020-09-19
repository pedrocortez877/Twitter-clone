import React from 'react';

import { Container, Tab, Tweets} from './styles';

import Tweet from '../Tweet'

import Perfil from '../../assets/perfilpedro.jpeg'

import Image from '../../assets/image.jpg'

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>
       <Tweets>
        <Tweet avatar={Perfil} image={Image}/>
        <Tweet avatar={Perfil} image={Image}/>
        <Tweet avatar={Perfil} image={Image}/>
        <Tweet avatar={Perfil} image={Image}/>
        <Tweet avatar={Perfil} image={Image}/>
      </Tweets>
    </Container>
  );
}

export default Feed;