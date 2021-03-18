import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  background: #061c39;
  color: #FFF;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 600px;
  margin: 0 auto;
  padding: 100px 0;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;


  .footer-one {
    width: 200px;

    p {
      margin-bottom: 20px;
      color: #27add9;
      font-size: 15px;
      & + p {
        color: #fff;
        margin-bottom: 5px;
        font-size: 14px;
      }

      &:nth-child(3) {
        padding-bottom: 20px;
        border-bottom: 2px solid rgba(39, 173, 217, 0.2);
      }

      &:nth-child(4) {
        margin-top: 30px;
      }
    }
  }

  .footer-two {
    width: 220px;
    margin-top: 80px;

    p {
      margin-bottom: 20px;
      color: #27add9;
      font-size: 15px;

      & + p {
        color: #fff;
        margin-bottom: 5px;
        font-size: 14px;
      }
    }
  }

  .collumn-two {
    margin-left: 100px;

    .footer-two {
      margin-top: 0;

      & + div{
        margin-top: 80px;
      }
    }
  }

  .collumn-three {
    margin-left: 100px;

    .footer-two {
      margin-top: 0;

      & + div{
        margin-top: 80px;
      }
    }
  }

  .collumn-four {
    margin-left: 100px;
    span {
      color: #27add9;
    }

    p {
      margin-top: 20px;
    }

    input {
      border: none;
      font-family: 'Inter', sans-serif;
      font-size: 15px;
      padding: 14px 24px;
      border-radius: 10px;
      margin-top: 15px;

      & + input {
        margin-top: 8px;
      }

      &:focus {
        outline: none;
      }
    }

    .signup {
      background: #27add9;
      color: #fff;
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      padding: 12px 44px;
      border: 0;
      border-radius: 10px;
      margin: 20px 0;
    }

    .talk {
      color: #27add9;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
    }

    .last-p {
      color: #fff;
      font-size: 14px;
      font-family: 'Inter', sans-serif;
      width: 300px;
    }

    .last-button {
      background: #27add9;
      color: #fff;
      font-family: 'Inter', sans-serif;
      font-size: 12px;
      padding: 20px 15px;
      border: 0;
      border-radius: 10px;
      margin: 20px 0;
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 100px 0;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    background: #061c39;
  }
`;

export const RealFooter = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 70px 0;
  border-top: 2px solid rgba(39, 173, 217, 0.2);

  .text {
    display: flex;
    p {
      margin-left: 100px;
      & + p {
        margin-left: 100px;
      }
    }
  }

  .logos {
    margin-left: auto;
    margin-right: 30px;
    img {
      & + img {
        margin-left: 40px;
      }
    }
  }

  @media (max-width: 1000px) {
    background: #061c39;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .text {
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }

    .logos {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;
