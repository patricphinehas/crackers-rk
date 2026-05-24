import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header logo text', () => {
  render(<App />);
  const logoElements = screen.getAllByText(/RK Krackers/i);
  expect(logoElements.length).toBeGreaterThan(0);
});
