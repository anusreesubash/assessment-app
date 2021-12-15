import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 1em;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
    letter-spacing: normal;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  #app, #app>div {
    height: 100%;
  }

  .btn-primary {
    color: var(--color-secondary);
    background-color: var(--color-primary);
    width: fit-content;
    padding-block: 10px;
    padding-inline: 20px;
    border: 1px solid;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .btn-secondary {
    background-color: var(--color-secondary);
    color: var(--color-primary);
    width: fit-content;
    padding-block: 10px;
    padding-inline: 20px;
    border: 1px solid;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-secondary);
    }
  }

  .card {
    height: fit-content;
    width: fit-content;
    max-width: 700px;
    margin: auto;
  }

  .card-body {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-inline: 1rem;
    border-radius: 20px;
    padding: 25px;
  }

  .spinner {
    margin-top: 20px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
 
export default GlobalStyle;