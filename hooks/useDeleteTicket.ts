import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query';
import axios from 'axios';
import { Ticket } from '../shared/types';

export type DeleteTicketResponse = Ticket;

export const TICKETS_ENDPOINT = `/api/tickets`;

const deleteTicket = async ({ id }: Pick<Ticket, 'id'>): Promise<DeleteTicketResponse> => {
  try {
    const { data } = await axios.delete<{ data: Ticket }>(`${TICKETS_ENDPOINT}/${id}`, {
      method: 'DELETE',
    });

    return data.data;
  } catch (e) {
    const errorMessage = e.response?.data?.error?.message || e.message;

    throw new Error(errorMessage);
  }
};

export const useDeleteTicket = (
  options?: UseMutationOptions<Ticket, unknown, Pick<Ticket, 'id'>>
): UseMutationResult<DeleteTicketResponse, unknown, Pick<Ticket, 'id'>> => {
  return useMutation(deleteTicket, options);
};
