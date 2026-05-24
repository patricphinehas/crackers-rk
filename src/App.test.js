import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
  const headerElements = screen.getAllByText(/RK Krackers/i);
  expect(headerElements.length).toBeGreaterThan(0);
});
