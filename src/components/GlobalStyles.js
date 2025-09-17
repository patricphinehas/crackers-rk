import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #ff9900;
    --primary-color-2: #ffc107;
    --primary-color-3: #ff5722;
    --accent-color: #0288d1;
    --accent-color-2: #388e3c;
    --background-color: #ffffff;
    --background-color-2: #fafafa;
    --highlight-color: #e65100;
    --highlight-color-2: #fbc02d;
    --max-width: 1200px;
    --section-spacing: 32px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', 'Arial', sans-serif;
    background-color: var(--background-color);
    color: #333;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    text-transform: capitalize;
    color: var(--primary-color-3);
  }

  a {
    text-decoration: none;
    color: var(--accent-color);
  }

  button {
    border-radius: 8px;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    background-color: var(--primary-color);
    color: white;
    &:hover {
      background-color: var(--highlight-color);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }

  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 20px;
  }

  section {
    margin: var(--section-spacing) 0;
  }
`;

export default GlobalStyles;