import styled from 'styled-components';

export const Container = styled.div`
  background: #d6f3f9;
  margin-left: 100px; 

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 700px;
    height: 800px;

    p { 
      width: 66%;
      font-family: 'Inter',sans-serif;
      font-style: normal;
      font-weight: normal;
      color: #13335f;
      font-size: 15px;
      line-height: 140%;
      margin-top: 50px;
    }
  }

  @media (max-width: 1000px) {
    margin-top: 50px;
    margin-left: 0;

    div {
      width: 100%;
      height: 100%;
      padding: 50px 30px;

      img {
        width: 100%;
      }

      p { 
        width: 100%;
        text-align: center;
      }
    }
  }
`;