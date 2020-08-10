import React from 'react';
import {Link, Table, TableBody, TableHead, TableRow} from '@material-ui/core';
import {useStyles, StyledTableCell} from '../styles';
import {contentFormatter} from '../logics';
import DashboardTitle from '../title';

const DashboardTable: React.FC = () => {
  const classes = useStyles();

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
      'Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. ',
      'Entertainment'
    ),
    createData(
      1,
      'My Hero Academy',
      'Izuku Midoriya',
      'April 13, 2020',
      'My Hero Academia is a Japanese superhero manga series written and illustrated by Kōhei Horikoshi. It has been serialized in Weekly Shōnen Jump since July 2014, with its chapters additionally collected into 27 tankōbon volumes as of July 2020.',
      'Sports'
    ),
    createData(
      2,
      'Haikyuu!',
      'Shōyō Hinata',
      'December 23, 2023',
      'Haikyu!! is a Japanese manga series written and illustrated by Haruichi Furudate. The story follows Shōyō Hinata, a boy determined to become a great volleyball player despite his small stature. Its individual chapters were serialized in Weekly Shōnen Jump from February 2012 through July 2020.',
      'Business'
    ),
    createData(
      3,
      'Sword Art Online',
      'Kirigaya Kazuto',
      'May 03, 2017',
      'Sword Art Online is a Japanese light novel series written by Reki Kawahara and illustrated by abec. The series takes place in the near future and focuses on protagonist Kazuto "Kirito" Kirigaya and Asuna Yuuki as they play through various virtual reality MMORPG worlds.',
      'Sports'
    ),
    createData(
      4,
      'Hunter x Hunter',
      'Gon Freecss',
      'September 07, 2012',
      'Hunter × Hunter is a Japanese manga series written and illustrated by Yoshihiro Togashi. It has been serialized in Weekly Shōnen Jump magazine since March 1998, although the manga has frequently gone on extended hiatuses since 2006. As of October 2018, 380 chapters have been collected into 36 volumes by Shueisha.',
      'Anime'
    ),
  ];

  return (
    <React.Fragment>
      <DashboardTitle>Recent Articles</DashboardTitle>
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
              <StyledTableCell>{contentFormatter(row.content)}</StyledTableCell>
              <StyledTableCell>{row.category}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="textSecondary" href="#">
          See more articles
        </Link>
      </div>
    </React.Fragment>
  );
};

export default React.memo(DashboardTable);
