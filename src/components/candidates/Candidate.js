import React from 'react';
import {
  Box, Typography, Button, Grid
} from '@material-ui/core';
import PropTypes from 'prop-types';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { makeStyles } from '@material-ui/core/styles';

function iconStyles() {
  return {
    light: {
      color: '#6b778c'
    }
  };
}

function Candidate({
  name, position, phone, email
}) {
  const classes = makeStyles(iconStyles)();
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        m: 2,
        p: 3,
        boxShadow:
          '0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)'
      }}
    >
      <Box
        sx={{
          p: 2,
        }}
      >
        <Typography
          color="text.primary"
          align="center"
          gutterBottom
          variant="h4"
        >
          {position}
        </Typography>
      </Box>

      <Typography
        color="text.secondary"
        align="left"
        gutterBottom
        variant="subtitle1"
      >
        {name}
      </Typography>
      <Grid container spacing={0} flexDirection="column">
        <Grid spacing={2} container alignItems="center">
          <Grid item>
            <PhoneIcon className={classes.light} />
          </Grid>
          <Grid item>
            <Typography color="text.secondary" align="center" variant="body2">
              {phone}
            </Typography>
          </Grid>
        </Grid>
        <Grid spacing={2} container alignItems="center">
          <Grid item>
            <EmailIcon className={classes.light} />
          </Grid>
          <Grid item>
            <Typography color="text.secondary" align="center" variant="body2">
              {email}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pt: 2
        }}
      >
        <Button
          color="primary"
          component="a"
          href="https://react-material-kit.devias.io"
          variant="contained"
        >
          See Resume
        </Button>
      </Box>
    </Box>
  );
}

Candidate.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string
};

export default Candidate;
