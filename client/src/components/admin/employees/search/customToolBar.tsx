import React from 'react';
import {CustomToolBarProps} from './types';
import {useStyles} from '../styles';
import {IconButton} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const CustomToolBar: React.FC<CustomToolBarProps> = ({selectedRows}) => {
  const classes = useStyles();

  console.log(selectedRows);
  return (
    <div className={classes.iconContainer}>
      <IconButton onClick={() => console.log('view')}>
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

export default CustomToolBar;
