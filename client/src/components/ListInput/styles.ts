import styled from 'styled-components';

export const InputBlock = styled.div`
  position: relative;

  label {
    font-size: 1rem;
  }

  input {
    width: 100%;
    height: 2.8rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: #f8f8fc;
    border: 1px solid #e6e6f0;
    outline: 0;
    padding: 0 1.6rem;
    font: 1rem;
  }

  :focus-within::after {
    width: (100% - 3.2rem);
    height: 2px;
    content: '';
    background: #916bea;
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }
`;
