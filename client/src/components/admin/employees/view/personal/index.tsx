import React from 'react';
import TabPanel from '@material-ui/lab/TabPanel';
import {Grid, Typography, Box} from '@material-ui/core';
import EmpPic from '../../../../../media/images/anonymous.jpg';
import {useStyles} from '../../styles';
import {DisplayData} from '../common/display-data';

const Personal = () => {
  const classes = useStyles();

  return (
    <TabPanel value="1">
      <Grid container spacing={1}>
        <Grid item xs={4} container>
          <img className={classes.img} alt="complex" src={EmpPic} />
          <Box marginTop={3}>
            <Typography variant="h4" color="textSecondary">
              Details
            </Typography>
            <DisplayData label={'NAME'} value={'Dann Anthony Astillero'} />
            <DisplayData label={'GENDER'} value={'Male'} />
            <DisplayData label={'MARITAL'} value={'Single'} />
            <DisplayData label={'NATIONALITY'} value={'FILIPINO'} />
            <DisplayData label={'RELIGION'} value={'CATHOLIC'} />
            <DisplayData label={'BIRTHDATE'} value={'2020/12/30'} />
            <DisplayData
              label={'BIRTHPLACE'}
              value={
                'Waling-Waling St. Perpetual Valley Subd. Katipunan St. Labangon Cebu City, Cebu'
              }
            />
          </Box>

          <Box marginTop={3}>
            <Typography variant="h4" color="textSecondary">
              Work Status
            </Typography>
            <DisplayData label={'HIRED'} value={'2020/12/30'} />
            <DisplayData label={'REGULAR'} value={'2020/12/30'} />
            <DisplayData label={'STATUS'} value={'ACTIVE'} />
            <DisplayData label={'POSITION'} value={'MANAGER'} />
            <DisplayData label={'COMPANY'} value={'FUJITSU'} />
            <DisplayData label={'SPONSOR COMPANY'} value={'FUJITSU'} />
            <DisplayData label={'DATE OF ARRIVAL'} value={'2020/12/30'} />
            <DisplayData label={'GATE PASS NUMBER'} value={'123112'} />
            <DisplayData label={'DATE OF EXPIRE'} value={'2020/12/30'} />
            <DisplayData
              label={'PLACE HIRED'}
              value={
                'Waling-Waling St. Perpetual Valley Subd. Katipunan St. Labangon Cebu City, Cebu'
              }
            />
          </Box>
        </Grid>
        <Grid item xs={8} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs></Grid>
          </Grid>
        </Grid>
      </Grid>
    </TabPanel>
  );
};

export default Personal;
