import React from 'react';
import {CustomToolBarProps} from './types';

const CustomToolBar: React.FC<CustomToolBarProps> = ({selectedRows}) => {
  console.log(selectedRows);
  return (
    <div>
      <span>gg</span>
    </div>
  );
};

export default CustomToolBar;
