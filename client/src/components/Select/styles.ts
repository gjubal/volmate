import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  + div {
    margin-top: 1.4rem;
  }

  label {
    font-size: 14px;
  }

  select {
    color: #312e38;
    width: 100%;
    height: 1.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: #f5f8fa;
    border: 1px solid #c1bccc;
    outline: 0;
    padding: 0 1.6rem;
    font-size: 14px;
  }

  &:focus-within::after {
    width: 100% - 3.2rem;
    height: 2px;
    content: '';
    background: #69cf9c;
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`;
