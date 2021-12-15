import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 150px;

  form {
    min-width: 250px;
    max-width: 320px;
    height: 300px;
    padding: 20px;
    margin: auto;
    border: 1px solid #fff;
    border-radius: 5px;
    background-color: #fff;
    text-align: center;
  }

  .header-login {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 20px;
  }

  *:focus {
    outline: none;
  }

  .input-div {
    width: 250px;
    box-sizing: border-box;
    border: 1px solid;
    margin-block: 15px;
    margin-inline: auto;
    padding-inline: 5px;
    padding-block: 10px;
    border-radius: 3px;
    display: flex;

    input {
      border: none;
      margin-left: 5px;
      font-size: 16px;
      &::-webkit-input-placeholder {
        font-size: 14px;
      }
    }
  }

  .btn-login {
    box-sizing: border-box;
    background-color: var(--color-primary);
    color: var(--color-secondary);
    width: 250px;
    height: 40px;
    border: 1px solid var(--color-primary);
    margin-block: 15px;
    border-radius: 5px;
    cursor: pointer;
  }

  .error-msg {
    color: var(--color-text-error);
    font-size: 14px;
    margin-top: 15px;
    margin-left: 15px;
  }
`;

export default StyledWrapper;
