import userEvent from '@testing-library/user-event';

import { render, screen } from '../../../test-utils';
import { DeleteButton } from '../DeleteButton';
import { createFakeTicket } from '../../../mocks/tickets.mock';

const mockedMutation = jest.fn();

jest.mock('react-query');
jest.mock('../../../hooks/useDeleteTicket', () => ({
  useDeleteTicket: () => ({ mutate: mockedMutation }),
}));

const mockedTicket = createFakeTicket();

test('if it call the mutation on click', () => {
  render(<DeleteButton id={mockedTicket.id} />);

  const button = screen.getByRole('button', { name: 'delete' });

  userEvent.click(button);

  expect(mockedMutation).toHaveBeenCalledWith({ id: mockedTicket.id });
});
