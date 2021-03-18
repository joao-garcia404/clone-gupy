import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  background: #fff;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  .contact {
    width: 100%;
    margin-top: 60px;
    padding: 40px 80px;
    border-radius: 10px;
    background: #d6f3f9;

    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      font-family: 'Victor Serif',serif;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 110%;
      margin-bottom: 6px;
      color: #061c39;
    }

    p {
      width: 70%; 
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      line-height: 140%;
      margin-top: 30px;
      color: #13335f;
      margin-bottom: 16px;
    }
  }

  .ask {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      margin-bottom: 28px;
      font-size: 14px;
      min-width: 308px;
      padding: 16px 54px;
      border: 0;
      border-radius: 8px;
      text-align: center;
      background-color: #061c39;
      color: #d6f3f9;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: background-color 0.4s;

      svg {
        margin-left: 5px;
      }

      &:hover {
        background: #27add9;
      }
    }

    .icons {
      img {
        & + img {
          margin-left: 30px;
        }
      }
      
    }
  }

  @media (max-width: 1000px) {
    max-width: 100%;

    .contact {
      .year {
        width: 100%;
        padding: 0 20px;

        img {
          width: 90%;
        }
      }

      padding: 40px 20px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h2 {
        font-size: 36px;
        margin-bottom: 6px;
        text-align: center;
      }

      p {
        width: 100%; 
        text-align: center;
      }
    }
  }
`;

export const HowWorks = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  header {
    text-align: center;

    h2 {
      margin-bottom: 20px;
      margin-top: 70px;
      font-size: 32px;
      font-family: 'Victor Serif',serif;
      font-style: normal;
      font-weight: bold;
      color: #13335f;
    }

    span {
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      line-height: 140%;
      color: #7b7b7b;
    }
  }

  @media (max-width: 1000px) {
    header {
      text-align: center;
      padding: 0 30px;

      h2 {
        font-size: 28px;
      }

      span {
        font-size: 15px;
      }
    }
  }
`;

export const Functional = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 100px auto;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  .menu {
    img {
      margin-bottom: 30px;
    }

    li {
      list-style: none;
      margin-bottom: 40px;
      cursor: pointer;
    }

    div {
      display: flex;
      align-items: flex-start;

      h4, span {
      font-size: 22px;
      font-family: 'Victor Serif',serif;
      font-style: normal;
      font-weight: bold;
      color: #13335f;
      line-height: 110%;
      }

      h4 {
        margin-left: 30px;
      }

      span {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        color: #13335f;
        background: #ffff;
        border: 1px solid #13335f;
        
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          color: #fff;
          background: #13335f;
        }
      }
    }

    p {
      width: 310px;
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      margin-left: 68px;
      line-height: 140%;
      color: #7b7b7b;
    }

    button {
      position: relative;
      left: -40px;

      display: flex;
      align-items: center;
      justify-content: center;

      margin-left: 64px;
      width: 80%;
      width: 308px;
      padding: 20px 0px;
      margin-top: 60px;
      color: #fff;
      background-color: #27add9;
      border: 1px solid #27add9;
      border-radius: 8px;
      text-align: center;
      font-size: 14px;
      cursor: pointer;
      z-index: 0;

      svg {
        margin-left: 5px;
      }
    }
  }

  @media (max-width: 1000px) {
    max-width: 100%;
    margin: 70px auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;

      li {
        padding: 10px;
      }

      h4 {
        margin-left: 0px;
      }
    }

    p {
      width: 100%;
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      margin-left: 0px;
      line-height: 140%;
      color: #7b7b7b;
    }
  }
`;
