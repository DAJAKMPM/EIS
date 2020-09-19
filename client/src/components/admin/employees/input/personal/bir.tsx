import React from "react";
import {
  Typography,
  Grid,
  TextField,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const Bir: React.FC = () => {
  const [checkbox, setCheckbox] = React.useState({
    isComputeTax: false,
    isNetTax: false,
  });
  const [taxStatus, setTaxStatus] = React.useState("");
  const [taxTable, setTaxTable] = React.useState("");

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox({...checkbox, [event.target.name]: event.target.checked});
  };

  const handleChangeTaxStatus = (
    event: React.ChangeEvent<{value: unknown}>
  ) => {
    setTaxStatus(event.target.value as string);
  };

  const handleChangeTaxTable = (event: React.ChangeEvent<{value: unknown}>) => {
    setTaxTable(event.target.value as string);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        BIR
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <TextField
            required
            id="tin"
            name="tin"
            label="TIN"
            fullWidth
            autoComplete="tin"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="addExemp"
            name="addExemp"
            label="Additional Excemption"
            fullWidth
            autoComplete="addExemp"
          />
        </Grid>
        <Grid item sm={4}>
          <Box marginTop={2}>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.isComputeTax}
                    onChange={handleChangeCheckbox}
                    name="isComputeTax"
                    color="primary"
                  />
                }
                label="Compute Tax"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.isNetTax}
                    onChange={handleChangeCheckbox}
                    name="isNetTax"
                    color="primary"
                  />
                }
                label="Net Tax"
              />
            </FormGroup>
          </Box>
        </Grid>
        <Grid item sm={4}>
          <FormControl required fullWidth>
            <InputLabel id="demo-simple-select-required-label">
              Tax Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={taxStatus}
              onChange={handleChangeTaxStatus}
            >
              <MenuItem value={"1"}>Tax Status 1</MenuItem>
              <MenuItem value={"2"}>Tax Status 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={4}>
          <FormControl required fullWidth>
            <InputLabel id="demo-simple-select-required-label">
              Tax Table
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={taxTable}
              onChange={handleChangeTaxTable}
            >
              <MenuItem value={"1"}>Tax Table 1</MenuItem>
              <MenuItem value={"2"}>Tax Table 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="noOfDep"
            name="noOfDep"
            label="No. of Dependent"
            fullWidth
            autoComplete="noOfDep"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Bir;
