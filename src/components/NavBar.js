import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Form from './Form';
import Input from './input';
import FlexContainer from './FlexContainer';
import CitySearch from './CitySearch';

const StyledNavBar = styled.div`
  margin-bottom: 40px;
`;

export default function NavBar(props) {
  return (
    <StyledNavBar>
      <FlexContainer className='justify-space-between align-baseline'>
        <div>Weather App</div>
        <CitySearch />
        <div>
          <Button>&deg;C</Button>
          <Button>&deg;F</Button>
        </div>
      </FlexContainer>
    </StyledNavBar>
  );
}
