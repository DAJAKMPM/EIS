import React from 'react';
import {CustomToolBarProps} from './types';
import {useStyles} from '../styles';
import {IconButton} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Toolbar: React.FC<CustomToolBarProps> = ({selectedRows}) => {
  const classes = useStyles();

  console.log(selectedRows);
  return (
    <div className={classes.iconContainer}>
      <IconButton href="/admin/employees/view-employee">
        <VisibilityIcon />
      </IconButton>
      <IconButton onClick={() => console.log('edit')}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => console.log('delete')}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default React.memo(Toolbar);
