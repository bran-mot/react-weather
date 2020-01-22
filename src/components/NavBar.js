import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import FlexContainer from './FlexContainer';
import CitySearch from './CitySearch';
import UnitSwitcher from './unitSwitcher';

const StyledNavBar = styled.div`
  margin-bottom: 40px;
`;

export default function NavBar(props) {
  return (
    <StyledNavBar>
      <FlexContainer className='justify-space-between align-baseline'>
        <div>Weather App</div>
        <CitySearch />
        <UnitSwitcher />
      </FlexContainer>
    </StyledNavBar>
  );
}
