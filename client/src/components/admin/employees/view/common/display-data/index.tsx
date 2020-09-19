import React from 'react';
import {Chip, Typography} from '@material-ui/core';
import {useStyles} from '../../../styles';

type Props = {
  label: string;
  value: any;
};

export const DisplayData: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div style={{marginTop: 8}}>
      <div style={{display: 'inline'}}>
        <Chip label={props.label} className={classes.labelChip} />
      </div>
      <div style={{display: 'inline', marginLeft: 7}}>
        <Typography variant="overline">{props.value}</Typography>
      </div>
    </div>
  );
};
