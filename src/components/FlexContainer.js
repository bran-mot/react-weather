import React from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
  &.center {
    justify-content: center;
  }
  &.column {
    flex-direction: column;
  }
  &.fluid {
    width: 100%;
  }
  &.align-baseline {
    align-items: baseline;
  }
  &.align-center {
    align-items: center;
  }
  &.justify-space-between {
    justify-content: space-between;
  }
  &.justify-center {
    justify-content: center;
  }
  &.justify-items-center {
    justify-items: center;
  }
`;
export default function FlexBox(props) {
  return <StyledFlex className={props.className}>{props.children}</StyledFlex>;
}
