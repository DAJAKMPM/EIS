import React from 'react';
import {
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Link,
  Grid,
  Box,
} from '@material-ui/core';
import EmpPic from '../../../../../media/images/anonymous.jpg';
import {DisplayData} from '../common/display-data';
import {useStyles} from '../../styles';

const Passport = () => {
  const classes = useStyles();

  const [openPass, setOpenPass] = React.useState(false);

  const handleClickOpen = () => {
    setOpenPass(true);
  };

  const handleClose = () => {
    setOpenPass(false);
  };

  const imageHolder = () => {
    return (
      <>
        <Link component="button" variant="overline" onClick={handleClickOpen}>
          View Image
        </Link>
        <Dialog
          maxWidth={'lg'}
          open={openPass}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <img className={classes.cardImage} alt="complex" src={EmpPic} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };

  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Box marginTop={1}>
          <Typography variant="h5" color="textSecondary">
            PASSPORT
          </Typography>
          <DisplayData label={'PASSPORT NUMBER'} value={'12312312312312'} />
          <DisplayData label={'ISSUED ON'} value={'2020/12/30'} />
          <DisplayData label={'EXPIRED ON'} value={'2020/12/30'} />
          <DisplayData label={'PASSPORT IMAGE'} value={imageHolder()} />
          <DisplayData
            label={'PLACE OF ISSUE'}
            value={
              'Waling-Waling St. Perpetual Valley Subd. Katipunan St. Labangon Cebu City, Cebu'
            }
          />
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default Passport;
