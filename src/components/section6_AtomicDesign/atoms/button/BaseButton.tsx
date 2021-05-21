import styled from 'styled-components';

const BaseButton = styled.button`
  /*background-color: #40514e; */
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &: hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
export default BaseButton;
