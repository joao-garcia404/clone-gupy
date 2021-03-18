import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  background: #fffaf0;  
  padding: 40px 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 32px;
    text-align: center;
    color: #13335f;
    margin-top: 30px;
  }

  .items {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 20px;
  }

  .ia {
    flex-direction: column;
    justify-content: center;
    text-align: center;

    margin-top: 20px;

    h3 {
      font-size: 26px;
      color: #13335f;
      font-weight: normal;
    }

    img {
      margin-top: 30px;
    }

    h4 {
      font-size: 38px;
      color: #13335f;
      font-weight: bold;
      margin-top: 30px;
    }

    p {
      width: 330px;
      margin-top: 10px;
      font-family: 'Inter', sans-serif;
      text-align: center;
      color: #13335f;
    }

    & + div {
      margin-left: 40px;
    }
  }

  button {
    width: 300px;
    height: 55px;
    margin-top: 70px;
    border-radius: 8px;
    text-align: center;
    color: #fff;
    background: #27add9;
    border: 1px solid #27add9;
    cursor: pointer;
    font-family: 'Inter', sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 5px;
    }
  }

  @media (max-width: 1000px) {
    padding: 40px 20px;

    h2 {
      font-size: 26px;
    }

    .items {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      margin-top: 20px;
    }

    .ia {
      p {
        width: 100%;
      }

      & + div {
        margin-left: 0px;
      }
    }
  }
`;

export const WhyGupy = styled.div`
  width: 100%;
  padding: 70px 0;
  background: #ecfcff;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Items = styled.div`
  text-align: center;

  h2 {
    font-size: 32px;
    color: #13335f;
    font-weight: bold;
    text-align: center;
  }

  .items {
    display: flex;
    align-items: center;
    justify-content: center;

    .item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: baseline;
      flex-direction: column;

      img {
        margin-top: 30px;
      }

      h3 {
        width: 340px;
        margin-top: 20px;
        font-size: 24px;
        color: #13335f;
        font-weight: bold;
      }

      p {
        color: #91a5bc;
        width: 330px;
        font-size: 14px;
        margin-top: 10px;
        font-family: 'Inter', sans-serif;
      } 
    }

    & + div {
      margin-left: 20px;
    }
  }

  @media (max-width: 1000px) {
    .items {
      flex-direction: column;
    }
  }
`;