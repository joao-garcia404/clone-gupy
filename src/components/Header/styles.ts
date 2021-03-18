import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  border-bottom: 1px solid rgba(204, 204, 204, 0.3);
  font-family: 'Inter', sans-serif;
  background: #fff;
  z-index: 10;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 46px;
  }

  nav {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;

    margin-left: 150px;

    a {
      font-size: 14px;
      color: #888888;

      display: flex;
      align-items: center;

      svg {
        width: 20px;
        height: 20px;
        margin-left: 5px;
      }

      &.login {
        color: #85EAFF;
      }
    }

    button {
      width: 200px;
      height: 66px;
      border: 0;
      color: #fff;
      background: #13335F;
      border-radius: 10px;
      font-size: 15px;
      
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 10vw;
    /* margin: 0; */
    max-width: 100vw;
    padding: 20px 0;

    nav {
      display: none;
    }
  }
`;