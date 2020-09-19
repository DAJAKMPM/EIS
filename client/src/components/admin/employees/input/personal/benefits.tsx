import React from "react";
import {
  Typography,
  Grid,
  TextField,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

const Benefits: React.FC = () => {
  const [checkbox, setCheckbox] = React.useState({
    isComputeSSS: false,
    isComputeHDMF: false,
    isComputePHIC: false,
  });

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox({...checkbox, [event.target.name]: event.target.checked});
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        SSS, PAGIBIG, PHILHEALTH
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <TextField
            required
            id="sssNo"
            name="sssNo"
            label="SSS No."
            fullWidth
            autoComplete="sssNo"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="philhealthNo"
            name="philhealthNo"
            label="Philhealth No."
            fullWidth
            autoComplete="philhealthNo"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="pagibigNo"
            name="pagibigNo"
            label="Pagibig No."
            fullWidth
            autoComplete="pagibigNo"
          />
        </Grid>

        <Grid item sm={8}>
          <Box marginTop={2}>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.isComputeSSS}
                    onChange={handleChangeCheckbox}
                    name="isComputeSSS"
                    color="primary"
                  />
                }
                label="Compute SSS"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.isComputeHDMF}
                    onChange={handleChangeCheckbox}
                    name="isComputeHDMF"
                    color="primary"
                  />
                }
                label="Compute HDMF"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkbox.isComputePHIC}
                    onChange={handleChangeCheckbox}
                    name="isComputePHIC"
                    color="primary"
                  />
                }
                label="Compute PHIC"
              />
            </FormGroup>
          </Box>
        </Grid>
        <Grid item sm={4} />
        <Grid item sm={4}>
          <TextField
            required
            id="sssAmort"
            name="sssAmort"
            label="SSS Amort"
            fullWidth
            autoComplete="sssAmort"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="phicAmort"
            name="phicAmort"
            label="PHIC Amort"
            fullWidth
            autoComplete="phicAmort"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="hdmfAmort"
            name="hdmfAmort"
            label="HDMF Amort"
            fullWidth
            autoComplete="hdmfAmort"
          />
        </Grid>
        <Grid item sm={4}>
          <TextField
            required
            id="pagibigAddDeduc"
            name="pagibigAddDeduc"
            label="Pagibig Additional Deduction"
            fullWidth
            autoComplete="pagibigAddDeduc"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Benefits;
