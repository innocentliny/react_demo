import { render, screen } from '@testing-library/react';
import App from './App';

test('renders web page title', () => {
  render(<App />);
  const webTitle = screen.getByText(/戰情儀表板/i);
  expect(webTitle).toBeInTheDocument();
});
