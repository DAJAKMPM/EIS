export type RowData = {
  index: number;
  dataIndex: number;
};

export type LookUp = {
  [key: number]: boolean;
};

export type SelectedRow = {
  data: RowData[];
  lookup: LookUp;
};

export type CustomToolBarProps = {
  selectedRows: SelectedRow;
};
