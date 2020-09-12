import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';

import { Wrapper } from '../../styles/global';

import wcbuLogo from '../../assets/wcbu_logo.png';

const Header: React.FC = () => {
  const history = useHistory();
  const [href, setHref] = useState('');

  useEffect(() => {
    const location = history.location.pathname;

    setHref(location);
  }, [history.location.pathname]);

  return (
    <Wrapper>
      <Container location={href}>
        <img src={wcbuLogo} alt="WCBU Logo" />

        <div>
          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Header;
