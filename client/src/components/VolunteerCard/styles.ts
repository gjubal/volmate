import styled from 'styled-components';

export const Article = styled.article`
  background: #ffffff;
  border: 1px solid #e6e6f0;
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;

  > p {
    padding: 0 2rem;
    font-size: 1rem;
    line-height: 1.4rem;
  }

  @media (min-width: 700px) {
    > p {
      padding: 0 3.2rem;
    }
  }
`;

export const Header = styled.header`
  padding: 3.2rem 2rem;
  display: flex;
  align-items: center;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  div {
    margin-left: 2.4rem;

    strong {
      font-weight: 500;
      font-size: 1.5rem;
      display: block;
      color: #32264d;
    }
  }

  span {
    font-size: 1rem;
    display: block;
    margin-top: 0.4rem;
  }

  @media (min-width: 700px) {
    padding: 3.2rem;
  }
`;

export const Footer = styled.footer`
  padding: 3.2rem 2rem;
  background: #fafafc;
  border-top: 1px solid #e6e6f0;
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    strong {
      color: #8257e5;
      font-size: 1.2rem;
      display: block;
    }
  }

  button {
    width: 20rem;
    height: 4rem;
    background: #04d361;
    color: #ffffff;
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 500 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: 0.2s;

    &:hover {
      background: #04bf58;
    }
  }

  @media (min-width: 700px) {
    padding: 3.2rem;

    p strong {
      display: initial;
      margin-left: 1.6rem;
    }

    button {
      width: 24.5rem;
      font-size: 1rem;
      justify-content: center;

      img {
        margin-right: 1.6rem;
      }
    }
  }
`;
