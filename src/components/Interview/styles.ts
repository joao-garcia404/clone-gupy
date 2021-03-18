import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 60px 0;

  h2 { 
    font-size: 32px;
    color: #13335f;
    font-weight: bold;
    text-align: center;
  }

  p {
    font-family: 'Inter', sans-serif;
    text-align: center;
    font-size: 16px;
    margin-top: 20px;
    color: #91a5bc;
  }

  .main {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    margin-top: 50px;

    .player {
      width: 550px;
      height: 300px;
    }

    .interview {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;

      h3 {
        width: 600px;
        padding-left: 16px;
        border-left: 1px solid #13335f;
        font-size: 24px;
        font-style: normal;
        color: #13335f;
        font-weight: 500;
        line-height: 29px;
        text-align: normal;
      }

      p {
        font-family: 'Inter', sans-serif;
        text-align: normal;
        font-size: 16px;
        color: #bbb;
      }

      span {
        font-family: 'Inter', sans-serif;
        text-align: normal;
        font-size: 16px;
        color: #bbb;
      }

      img {
        margin-top: 20px;
      }
    }
  }

  .companies {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 30px;
  }

  @media (max-width: 1000px) {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 60px 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 28px;
    }

    .main {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      margin-top: 50px;

      .player {
        width: 380px;
        height: 300px;
      }

      .interview {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        h3 {
          width: 100%;
          padding-left: 0px;
          border-left: none;
          margin-top: 30px;
        }

        p {
          font-family: 'Inter', sans-serif;
          text-align: normal;
          font-size: 16px;
          color: #bbb;
        }
      }
    }

    .companies {
      flex-direction: column;
    }
  }
`;
