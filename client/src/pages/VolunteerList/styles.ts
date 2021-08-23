import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  main {
    margin: 3.2rem auto;
    width: 90%;
  }

  @media (min-width: 700px) {
    max-width: 100%;

    main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }
  }
`;

export const Form = styled.form`
  margin-top: 3.2rem;

  label {
    color: #d4c2ff;
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 16px;
    position: absolute;
    bottom: -28px;

    input + input {
      margin-top: 0;
    }

    select + select {
      margin-top: 0;
    }
  }
`;
