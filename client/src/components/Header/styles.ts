import styled, { css } from 'styled-components';

interface HeaderProps {
  type: 'main' | 'form' | 'popup';
}

export const Nav = styled.header`
  background: #fff;
  border: 1px solid #dce2e6;
`;

export const NavContent = styled.div<HeaderProps>`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  a {
    ${props =>
      props.type === 'main' &&
      css`
        margin-bottom: 20px;
        margin-left: 800px;
      `}
  }

  button {
    ${props =>
      props.type === 'popup' &&
      css`
        margin-bottom: 20px;
        margin-left: 800px;
      `}
  }

  ${props =>
    props.type === 'form' &&
    css`
      color: #a0acb2;
      height: 90px;
    `}
  h2 {
    margin-left: 450px;
  }
`;

export const Box = styled.div`
  width: 40px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #dce2e6;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
