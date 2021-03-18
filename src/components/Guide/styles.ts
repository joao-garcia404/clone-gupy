import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background: #ECFBFF;
`;

export const Content = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  padding: 80px 20px 0;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .recruitment {
    width: 500px;

    h2 {
      color: #13335f;
      margin-bottom: 20px;
      font-family: 'Victor Serif',serif;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 110%;
    }

    p {
      font-size: 16px;
      line-height: 140%;
      color: #7b7b7b;
      font-family: 'Inter', sans-serif;
      margin-bottom: 20px;
    }

    button {
      background: #27add9;
      border: 1px solid #27add9;
      margin-top: 20px;
      font-size: 14px;
      /* min-width: 308px; */
      padding: 16px 54px;
      border-radius: 8px;
      color: #fff;
      font-family: 'Inter', sans-serif;
    }
  }

  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 50px 20px 0;

    .video img {
      width: 360px;
      height: 200px;
    }

    .recruitment {
      width: 100%;
      margin-top: 50px;

      padding: 0 20px;

      h2 {
        font-weight: bold;
        font-size: 26px;
        line-height: 110%;
        text-align: center;
      }

      p {
        font-size: 16px;
        text-align: center;
      }
    }
  }
`;

export const Footer = styled.footer`
  max-width: 1300px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  div {
    width: 230px;
    margin-left: 100px;
    margin-top: 80px;
    margin-bottom: 80px;

    img {
      margin-bottom: 10px;
    }

    h3 {
      color: #13335f;
      margin-bottom: 20px;
      font-family: 'Victor Serif',serif;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 110%;
    }

    p {
      color: #7b7b7b;
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      line-height: 140%;

      span {
        color: #13335f;
      }
    }
  }

  @media (max-width: 1000px) {
    max-width: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center;

    div {
      width: 100%;
      margin-left: 0;
      margin-top: 30px;
      margin-bottom: 80px;
      padding: 0 50px;

      img {
        margin-bottom: 10px;
      }

      h3 {
        color: #13335f;
        margin-bottom: 20px;
        font-family: 'Victor Serif',serif;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 110%;
      }
    }
  }
`;