import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import App from './App';

test('await schedule', async () => {
  render(<App />);
  const submitBtn = await screen.findByTestId('submit');
  const topTitleFrom = await waitFor(() => screen.findByTestId('topTitleFrom'))
  expect(submitBtn).toBeInTheDocument();
  userEvent.click(submitBtn);
  expect(topTitleFrom).toBeInTheDocument()
});
