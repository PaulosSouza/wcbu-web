import React from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

import { Wrapper } from '../../styles/global';

const Home: React.FC = () => (
  <Wrapper>
    <Header />

    <Container>
      <h1>wcbu</h1>
      <h2>gaming</h2>
    </Container>
  </Wrapper>
);

export default Home;
