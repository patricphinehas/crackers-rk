import { render, screen } from '@testing-library/react';
import App from './App';

test('renders RK Krackers link', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/RK Krackers/i);
  expect(linkElement.length).toBeGreaterThan(0);
});
