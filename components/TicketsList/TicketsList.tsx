import { FC } from 'react';
import { Box, createStyles, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import { ListHeader } from './ListHeader';
import { ListBody } from './ListBody';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up('sm')]: {
        height: 'calc(100% - 66px)',
        padding: theme.spacing(3),
      },
      [theme.breakpoints.down('sm')]: {
        height: 'calc(100% - 66px)',
      },
    },
    list: {
      [theme.breakpoints.up('sm')]: {
        height: '100%',
        background: '#FFFFFF',
        borderRadius: 15,
        padding: theme.spacing(2, 3, 4),
      },
      [theme.breakpoints.down('sm')]: {
        height: '100%',
        background: '#FFFFFF',
      },
    },
  })
);

const TicketsList: FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box component="main" className={classes.root}>
      <Box className={classes.list}>
        {matches ? <ListHeader /> : null}
        <ListBody />
      </Box>
    </Box>
  );
};

export { TicketsList };
