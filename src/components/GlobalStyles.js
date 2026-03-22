import { createGlobalStyle } from 'styled-components';

/**
 * Theme: "Diwali Sun" – vivid, festive palette for Indian firecrackers brand.
 * Primary: bright orange/saffron. Accent: magenta. Backgrounds: warm golden cream.
 */
const GlobalStyles = createGlobalStyle`
  :root {
    /* Brand & primary actions */
    --primary-color: #ff6d00;
    --primary-color-2: #ffb300;
    --primary-color-3: #bf360c;
    --primary-color-dark: #e64a19;
    --primary-color-light: #fff8e1;
    --highlight-color: #ff3d00;
    --highlight-color-2: #ffd600;

    /* Links & secondary accent */
    --accent-color: #c62828;
    --accent-color-2: #f9a825;

    /* Surfaces & background */
    --background-color: #fffde7;
    --background-color-2: #fff8e1;
    --surface-subtle: #fff3cd;
    --border-color: #ffecb3;

    /* Text */
    --text-primary: #1a0a00;
    --text-secondary: #5d3a1a;
    --text-muted: #8d6038;

    /* Semantic (for alerts, status) */
    --color-success: #2e7d32;
    --color-error: #b71c1c;
    --color-warning: #f57f17;

    /* Footer */
    --footer-bg: #1a0800;
    --footer-accent: #ffd600;

    /* Layout */
    --max-width: 1200px;
    --section-spacing: 32px;
    --radius: 8px;
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Plus Jakarta Sans', 'Segoe UI', system-ui, sans-serif;
    background-color: var(--background-color-2);
    color: var(--text-primary);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    text-transform: capitalize;
    color: var(--primary-color-3);
    letter-spacing: -0.02em;
  }

  a {
    text-decoration: none;
    color: var(--accent-color);
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--primary-color);
  }

  button {
    border-radius: var(--radius);
    padding: 10px 20px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
    border: none;
    background-color: var(--primary-color);
    color: white;
  }

  button:hover {
    background-color: var(--highlight-color);
    box-shadow: var(--shadow-md);
  }

  button:active {
    transform: translateY(1px);
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