import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  + div {
    margin-top: 1.4rem;
  }

  label {
    font-size: 14px;
  }

  input {
    width: 100%;
    height: 2.6rem;
    margin-top: 0.8rem;
    border-radius: 10px;
    background: #f5f8fa;
    border: 1px solid #dce2e6;
    outline: 0;
    padding: 0 1.6rem;
    font-size: 1rem;
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: #69cf9c;
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`;
