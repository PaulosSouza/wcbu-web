import React from 'react';

import Header from '../../components/Header';

import { Container, Wind } from './styles';

import { Wrapper } from '../../styles/global';

import windIcon from '../../assets/wind.png';

const About: React.FC = () => (
  <Wrapper>
    <Header />

    <Container>
      <h1>
        &quot; Nascida como uma brincadeira de amigos em meados de 2015, a wcbu
        gaming após grande período de inatividade planeja retornar em breve com
        novidades &quot;
      </h1>
    </Container>

    <div>
      <Wind src={windIcon} alt="Wind logo" />
    </div>
  </Wrapper>
);

export default About;
