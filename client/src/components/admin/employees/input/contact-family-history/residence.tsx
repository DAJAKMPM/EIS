import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';

const Residence: React.FC = () => {
  const [relation, setRelation] = React.useState('');

  const handleChangeRelation = (event: React.ChangeEvent<{value: unknown}>) => {
    setRelation(event.target.value as string);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Residence
      </Typography>
      <Grid container spacing={5}>
        <Grid item sm={4}>
          <TextField
            required
            id="contactPers"
            name="contactPers"
            label="Contact Person"
            fullWidth
            autoComplete="contactPers"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="telMobNo"
            name="telMobNo"
            label="Telephone/Mobile"
            fullWidth
            autoComplete="telMobNo"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="resSite"
            name="resSite"
            label="Website"
            fullWidth
            autoComplete="resSite"
          />
        </Grid>
        <Grid item sm={4}>
          <FormControl required fullWidth>
            <InputLabel id="demo-simple-select-required-label">
              Relation
            </InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={relation}
              onChange={handleChangeRelation}
            >
              <MenuItem value={'mother'}>Mother</MenuItem>
              <MenuItem value={'father'}>Father</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="resFaxNo"
            name="resFaxNo"
            label="Fax No."
            fullWidth
            autoComplete="resFaxNo"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            required
            id="contactAddrs"
            name="contactAddrs"
            label="Contact Address"
            fullWidth
            autoComplete="contactAddrs"
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            required
            id="employeeAddrs"
            name="employeeAddrs"
            label="Employee Address"
            fullWidth
            autoComplete="employeeAddrs"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Residence;
