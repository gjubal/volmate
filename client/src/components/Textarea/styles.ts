import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  + div {
    margin-top: 1.4rem;
  }

  label {
    font-size: 14px;
  }

  textarea {
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: #f5f8fa;
    border: 1px solid #c1bccc;
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.6rem;
    font-size: 14px;
  }

  &:focus-within::after {
    width: calc(100% - 3.2rem);
    height: 2px;
    content: '';
    background: #f5f8fa;
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 7px;
  }
`;
