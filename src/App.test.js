import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App.jsx';

test('renders header title', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]),
    })
  );

  render(<App />);
  expect(screen.getByText(/news/i)).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
});
