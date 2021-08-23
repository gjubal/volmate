import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #8257e5;
  width: 96px;
  height: 100%;
  position: absolute;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin-top: 40px;
  }

  div {
    display: flex;
    flex-direction: column;

    a {
      background: transparent;
      border: 0;

      + a {
        margin-top: 20px;
      }

      &:nth-of-type(1) {
        margin-top: 340px;
      }

      &:hover {
        color: ${shade(0.2, '#312e38')};
      }

      svg {
        color: #fff;
        width: 20px;
        height: 20px;
      }
    }

    /* > a {
      height: 30px;
      margin-top: 40px;
    } */
  }

  button:last-child {
    background: transparent;
    border: 0;
    margin: 350px 0;

    svg {
      color: #fff;
      width: 20px;
      height: 20px;
    }
  }
`;
