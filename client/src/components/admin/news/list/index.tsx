import React from 'react';
import clsx from 'clsx';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import {useStyles, StyledTableCell} from '../styles';
import ListTItle from '../../common/title';

const NewsList: React.FC = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const tablePaperHeight = clsx(classes.paper, classes.tableHeight);

  function createData(
    id: number,
    title: string,
    author: string,
    publishedDate: string,
    content: string,
    category: string
  ) {
    return {id, title, author, publishedDate, content, category};
  }

  const rows = [
    createData(
      0,
      'Naruto',
      'Naruto Uzumaki',
      'March 12, 2019',
      'Naruto is a Japanese ',
      'Entertainment'
    ),
    createData(
      1,
      'My Hero Academy',
      'Izuku Midoriya',
      'April 13, 2020',
      'My Hero Academia ',
      'Sports'
    ),
    createData(
      2,
      'Haikyuu!',
      'Shōyō Hinata',
      'December 23, 2023',
      'Haikyu!! is a Japeyball play.',
      'Business'
    ),
    createData(
      3,
      'Sword Art Online',
      'Kirigaya Kazuto',
      'May 03, 2017',
      'Sword Art Onlis.',
      'Sports'
    ),
    createData(
      4,
      'Hunter x Hunter',
      'Gon Freecss',
      'September 07, 2012',
      'Hunter × Hunter iha.',
      'Anime'
    ),
  ];

  return (
    <React.Fragment>
      <Paper className={tablePaperHeight}>
        <ListTItle>List of Articles</ListTItle>
        <Table size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Author</StyledTableCell>
              <StyledTableCell>Published Date</StyledTableCell>
              <StyledTableCell>Content</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <StyledTableCell>{row.title}</StyledTableCell>
                <StyledTableCell>{row.author}</StyledTableCell>
                <StyledTableCell>{row.publishedDate}</StyledTableCell>
                <StyledTableCell>{row.content}</StyledTableCell>
                <StyledTableCell>{row.category}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.paginationPos}>
          <TablePagination
            className={classes.paginationColor}
            component="div"
            count={100}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default React.memo(NewsList);
