import React from 'react';
import {Chip, Typography} from '@material-ui/core';

type Props = {
  label: string;
  value: string;
};

export const DisplayData: React.FC<Props> = (props) => {
  return (
    <div style={{marginTop: 8}}>
      <div style={{display: 'inline'}}>
        <Chip label={props.label} color="primary" />
      </div>
      <div style={{display: 'inline', marginLeft: 7}}>
        <Typography variant="overline">{props.value}</Typography>
      </div>
    </div>
  );
};
