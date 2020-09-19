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

const HealthCard = () => {
  const classes = useStyles();

  const [openHC, setOpenHC] = React.useState(false);

  const handleClickOpen = () => {
    setOpenHC(true);
  };

  const handleClose = () => {
    setOpenHC(false);
  };

  const imageHolder = () => {
    return (
      <>
        <Link component="button" variant="overline" onClick={handleClickOpen}>
          View Image
        </Link>
        <Dialog
          maxWidth={'lg'}
          open={openHC}
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
            HEALTH CARD
          </Typography>
          <DisplayData label={'CARD NUMBER'} value={'12312312312312'} />
          <DisplayData label={'CARD NAME'} value={'uWWKWKWKK'} />
          <DisplayData label={'ISSUED ON'} value={'2020/12/30'} />
          <DisplayData label={'EXPIRED ON'} value={'2020/12/30'} />
          <DisplayData label={'HEALTH CARD IMAGE'} value={imageHolder()} />
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default HealthCard;
