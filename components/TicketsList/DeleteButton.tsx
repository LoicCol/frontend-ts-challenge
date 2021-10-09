import { FC, SVGProps, MouseEvent } from 'react';
import { createStyles, IconButton, makeStyles } from '@material-ui/core';
import { useQueryClient } from 'react-query';

import { useDeleteTicket } from '../../hooks/useDeleteTicket';
import { TICKETS_ENDPOINT } from '../../hooks/useTickets';

import type { Ticket } from '../../shared/types';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: 30,
      height: 30,
      padding: 0,
      borderRadius: 2,
      border: '1px solid  #CFCFCF',
      boxSizing: 'border-box',
    },
  })
);

const DeleteButton: FC<Pick<Ticket, 'id'>> = ({ id }) => {
  const queryClient = useQueryClient();
  const classes = useStyles();

  const mutation = useDeleteTicket({
    onSettled: () => {
      queryClient.invalidateQueries(TICKETS_ENDPOINT);
    },
  });

  const onDeleteTicket = (e: MouseEvent) => {
    e.preventDefault();
    mutation.mutate({ id });
  };

  return (
    <IconButton aria-label="delete" className={classes.root} onClick={onDeleteTicket}>
      <DeleteIcon />
    </IconButton>
  );
};

const DeleteIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7.00003H6V19ZM8 9.00003H16V19H8V9.00003ZM15.5 4.00003L14.5 3.00003H9.5L8.5 4.00003H5V6.00003H19V4.00003H15.5Z"
        fill="black"
        fill-opacity="0.54"
      />
    </svg>
  );
};

export { DeleteButton };
