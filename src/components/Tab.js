import React from 'react';
import styled from 'styled-components';

const StyledTab = styled.div`
  padding: 10px 20px;
  transition: background-color 0.25s;
  border: 1px solid white;
  &.active {
    background-color: white;
    color: black;
    &:hover {
      background-color: white;
      color: black;
    }
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transition: background-color 0.25s;
  }
`;

export default function Tab(props) {
  return <StyledTab className={props.className}>{props.children}</StyledTab>;
}
