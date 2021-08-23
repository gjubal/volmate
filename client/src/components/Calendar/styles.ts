import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4.8rem;
  width: 1200px;

  main {
    background: #ffffff;
    width: 100%;
    max-width: 1200px;
    border: 1px solid #dce2e5;
    border-radius: 16px;
    margin: -3.2rem auto 3.2rem;
    padding-top: 2.4rem;
    overflow: hidden;
    display: grid;

    fieldset {
      border: 0;
      padding: 4rem 2.4rem;

      + fieldset {
        margin-top: 6.4rem;
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
`;

export const WeekGrid = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(7, 150px);
`;

export const DayColumn = styled.div`
  h3 {
    width: 80%;
    border-bottom: 1px solid #8257e5;
  }
`;

export const EmployeeRow = styled.div`
  margin-top: 30px;

  p {
    font-size: 0.9rem;
  }
`;
