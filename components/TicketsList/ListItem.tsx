import { FC } from 'react';
import { Chip, createStyles, Grid, makeStyles, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import { Ticket } from '../../shared/types';
import { format } from 'date-fns';

import { DeleteButton } from './DeleteButton';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      borderBottom: '1px solid #F1F1F1',
      padding: theme.spacing(2, 1.5),
    },
    text: {
      fontWeight: theme.typography.fontWeightLight,
    },
    status: {
      width: '101px',
      height: '19px',
      borderRadius: 4,
      fontSize: 11,
      lineHeight: '15px',
      fontWeight: theme.typography.fontWeightBold,
      color: '#FFFFFF',
      backgroundColor: '#5B994C',
    },
    // Classes used for small screen
    rootSmallScreen: {
      borderBottom: '1px solid #F1F1F1',
      padding: theme.spacing(3),
    },
    headerText: {
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: theme.typography.fontWeightMedium,
      paddingBottom: theme.spacing(0.5),
    },
  })
);

const formatToDate = (date: string) => {
  return format(new Date(date), 'dd/MM/yyyy');
};

const ListItem: FC<Ticket> = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return matches ? <ListItemDefault {...props} /> : <ListItemSmallScreen {...props} />;
};

const ListItemDefault: FC<Ticket> = ({ id, user, status, createdAt, dueDate }) => {
  const classes = useStyles();

  const createdAtFormatted = formatToDate(createdAt);
  const dueDateFormatted = formatToDate(dueDate);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={2}>
        <Typography className={classes.text}>{id}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.text}>{`${user.firstName} ${user.lastName}`}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.text}>{createdAtFormatted}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.text}>{dueDateFormatted}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Chip label={status} className={classes.status} />
      </Grid>
      <Grid item xs={2}>
        <DeleteButton id={id} />
      </Grid>
    </Grid>
  );
};

const ListItemSmallScreen: FC<Ticket> = ({ id, user, status, createdAt, dueDate }) => {
  const classes = useStyles();
  const theme = useTheme();

  const createdAtFormatted = formatToDate(createdAt);
  const dueDateFormatted = formatToDate(dueDate);

  return (
    <Grid container spacing={3} className={classes.rootSmallScreen}>
      <Grid item xs={6}>
        <Typography className={classes.headerText}>ID</Typography>
        <Typography className={classes.text}>{id}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.headerText}>Requested by</Typography>
        <Typography className={classes.text}>{`${user.firstName} ${user.lastName}`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.headerText}>Create date</Typography>
        <Typography className={classes.text}>{createdAtFormatted}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.headerText}>Due date</Typography>
        <Typography className={classes.text}>{dueDateFormatted}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.headerText}>Status</Typography>
        <Chip label={status} className={classes.status} />
      </Grid>
      <Grid item xs={6}>
        <DeleteButton id={id} />
      </Grid>
    </Grid>
  );
};

export { ListItem };
