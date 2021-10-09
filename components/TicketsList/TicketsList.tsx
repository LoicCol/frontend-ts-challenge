import { FC } from 'react';
import { Box, createStyles, makeStyles, useTheme, useMediaQuery } from '@material-ui/core';
import { ListHeader } from './ListHeader';
import { ListBody } from './ListBody';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100% - 66px)',
      padding: theme.spacing(3),
    },
    list: {
      height: '100%',
      background: '#FFFFFF',
      borderRadius: 15,
      padding: theme.spacing(2, 3, 4),
    },
    // Classes used for small screen
    rootSmallScreen: {
      height: 'calc(100% - 66px)',
    },
    listSmallScreen: {
      height: '100%',
      background: '#FFFFFF',
    },
  })
);

const TicketsList: FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return matches ? (
    <Box component="main" className={matches ? classes.root : classes.rootSmallScreen}>
      <Box className={classes.list}>
        <ListHeader />
        <ListBody />
      </Box>
    </Box>
  ) : (
    <Box component="main" className={classes.rootSmallScreen}>
      <Box className={classes.listSmallScreen}>
        <ListBody />
      </Box>
    </Box>
  );
};

export { TicketsList };
