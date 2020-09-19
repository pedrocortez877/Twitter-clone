import React from 'react';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import Perfil from '../../assets/perfil.jpeg'
import Carol from '../../assets/perfilcarol.jpg'
import Deise from '../../assets/deise.jpg'

import StickyBox from 'react-sticky-box';


import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon/>
      </SearchWrapper>

      <StickyBox>
      <Body>
       <List 
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="Gabi Cortez" nickname="@gabicortez" avatar={Perfil}/>,
            <FollowSuggestion name="Carol Mendes" nickname="@carolmendes" avatar={Carol}/>,
            <FollowSuggestion name="Deise Bolos" nickname="@deisebolos" avatar={Deise}/>
          ]}
       />
       <List 
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
            <News />
          ]}
       />
       <List 
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
            <News />
          ]}
       />
       <List 
          title="Talvez você curta"
          elements={[
            <News />,
            <News />,
            <News />,
            <News />
          ]}
       />
      </Body>

      </StickyBox>

    </Container>
  );
}

export default SideBar;