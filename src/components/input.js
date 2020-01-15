import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid white;
  background-color: transparent;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  margin-right: 10px;
`;

export default function Input(props) {
  return (
    <StyledInput
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
