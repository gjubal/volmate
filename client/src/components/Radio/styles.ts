import styled from 'styled-components';

export const Container = styled.div`
  background: #f5f8fa;
  height: 170px;
  width: 200px;

  border: 1px solid #dce2e6;
  box-sizing: border-box;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;

    margin: 27px;
  }

  label {
    font-size: 20px;
    font-weight: 600;
  }

  input {
    height: 24px;
    width: 24px;
  }
`;

export const Bottom = styled.section`
  border-top: 1px solid #dce2e6;
  display: flex;
  align-items: center;

  label {
    margin: 27px;
  }
`;
