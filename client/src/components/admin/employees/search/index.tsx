import React from 'react';
import MUIDataTable from 'mui-datatables';
import {MUIDataTableOptions} from 'mui-datatables';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {CssBaseline, IconButton} from '@material-ui/core';
import {useStyles} from '../styles';
import {columns} from './columns';
import {data} from './data';
import Toolbar from './tool-bar';
import {SelectedRow} from './types';

const Search: React.FC = () => {
  const classes = useStyles();

  const addButton = (): React.ReactNode => (
    <IconButton href="/admin/employees/add-employee">
      <AddBoxIcon className={classes.addIcon} />
    </IconButton>
  );

  const options: MUIDataTableOptions = {
    filterType: 'checkbox',
    customToolbar: addButton,
    customToolbarSelect: (selectedRows: SelectedRow) => (
      <Toolbar selectedRows={selectedRows} />
    ),
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <MUIDataTable
        options={options}
        title={'Employee List'}
        data={data}
        columns={columns}
      />
    </React.Fragment>
  );
};

export default Search;
