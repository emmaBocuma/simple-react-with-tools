import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';

test('hides and shows list when button clicked', async () => {
  render(<App />);
  const button = screen.getByTestId('button');
  const list = screen.queryByTestId('list');
  expect(button).toHaveTextContent('Show List');
  expect(list).not.toBeInTheDocument();

  userEvent.click(screen.getByTestId('button'));
  expect(await screen.queryByTestId('list')).toBeInTheDocument();
  expect(button).toHaveTextContent('Hide List');
});
