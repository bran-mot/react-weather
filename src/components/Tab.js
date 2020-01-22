import React from 'react';
import styled from 'styled-components';

const StyledTab = styled.a`
  display: block;
  font-size: 0.75rem;
  padding: 5px 10px;
  transition: background-color 0.25s;
  border: 1px solid white;
  &.active {
    background-color: #ffffff;
    color: #000000;
    mix-blend-mode: screen;
    &:hover {
      background-color: white;
      color: black;
    }
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transition: background-color 0.25s;
  }
  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  &:last-child {
    border-radius: 0 5px 5px 0;
  }
`;

export default function Tab(props) {
  return (
    <StyledTab className={props.className} onClick={props.onClick}>
      {props.children}
    </StyledTab>
  );
}
