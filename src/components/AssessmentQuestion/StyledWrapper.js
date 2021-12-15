import styled from 'styled-components';

const StyledWrapper = styled.div`
  .question {
    margin-top: 30px;

    h1 {
      text-align: center;
      margin: 0px;
      padding-inline: 10px;
    }
  }

  .div-options {
    display: flex;
    flex-direction: column;
  }

  .btn-options {
    padding: 10px;
    font-size: 16px;
    background-color: var(--color-secondary);
    padding-block: 10px;
    border: 1px solid var(--color-primary);
    margin: 10px 10px 10px 0px;
    border-radius: 10px;
    cursor: pointer;
    text-align: left;
    line-height: 1.5;

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-secondary);
    }
  }

  button.btn-hidden {
    display: none;
  }

  .btn-selected {
    background-color: var(--color-primary);
    color: var(--color-secondary);
  }

  .div-navigate {
    display: flex; 
    justify-content: flex-end; 
    padding-inline: 10px;
  }
`;

export default StyledWrapper;
