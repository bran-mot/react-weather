import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color, 0.25s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transition: background-color, 0.25s;
  }
`;

export default function Button(props) {
  return (
    <StyledButton type={props.type} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
}
