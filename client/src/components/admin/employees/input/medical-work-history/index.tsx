import React from "react";
import {Box} from "@material-ui/core";
import MedicalHistory from "./medical";

const MedicalWorkHistory: React.FC = () => {
  return (
    <React.Fragment>
      <Box marginTop={3}>
        <MedicalHistory />
      </Box>
    </React.Fragment>
  );
};

export default MedicalWorkHistory;
