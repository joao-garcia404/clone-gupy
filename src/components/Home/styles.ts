import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;

  main {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    margin-top: 150px;

    h1 {
      width: 400px;
      font-family: 'Victor Serif',serif;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 110%;
      color: #13335f;
    }

    p {
      width: 410px;
      color: #888;
      font-size: 16px;
      line-height: 140%;
      font-family: 'Inter', sans-serif;
      margin-top: 20px;
    }

    button {
      font-family: 'Inter', sans-serif;
      background: #27add9;
      border: 1px solid #27add9;
      margin-top: 40px;
      font-size: 14px;
      min-width: 308px;
      padding: 16px 54px;
      color: #fff;
      border-radius: 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: background-color 0.2s;

      svg {
        margin-left: 5px;
      }

      &:hover {
        background: #118eb8;
      }
    }

    img {
      width: 580px;
      height: 440px;
    } 
  }

  @media (max-width: 1000px) {
    max-width: 100%;
    
    main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column-reverse;

      h1 {
        width: 100%;
        text-align: center;
        font-size: 32px;
      }

      p {
        width: 100%;
        text-align: center;
        font-size: 16px;
        margin-top: 20px;
      }

      img {
        width: 100%;
        height: 100%;
      } 
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 120px;
  margin-bottom: 80px;

  h3 {
    font-family: 'Victor Serif',serif;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 110%;
    margin-bottom: 20px;
    color: #7b7b7b;
  }

  div {
    display: flex;
    align-items: center;

    img {
      & + img {
        margin-left: 30px;
      }
    }
  }

  @media (max-width: 1000px) {
    h3 {
      text-align: center;
    }

    div {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        & + img {
          margin-left: 0;
          margin-bottom: 20px;
        }
      }
    }
  }
`;