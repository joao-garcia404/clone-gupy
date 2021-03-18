import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
`;

export const Functional = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 0 60px 0;

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