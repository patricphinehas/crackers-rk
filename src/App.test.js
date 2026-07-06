import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/RK Krackers/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
