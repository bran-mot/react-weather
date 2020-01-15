import React from 'react';
import styled from 'styled-components';

const StyledTabBar = styled.div`
  display: flex;
`;

export default function TabBar(props) {
  return <StyledTabBar>{props.children}</StyledTabBar>;
}
