import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import bookData from './bookData';
import './myStyle.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding:"10px",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "1000px",
    height: "500px",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */




export default function TitlebarGridList() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <GridList cellHeight={250} spacing={10}  className={classes.gridList}>
        <GridListTile  cols={4} rows={3} style={ {height:'auto'}}>
          <ListSubheader component="div"><h1>Maddy's Bookworld</h1></ListSubheader>
        </GridListTile>
        {bookData.map((book) => (
          <GridListTile key={book.bookId}>
            <img src={book.imageUrl} alt={book.title} />
            <GridListTileBar
              title={book.bookName}
              subtitle={<span>Price: {book.bookPrice}</span>}

              actionIcon={
                <IconButton aria-label={`info about ${book.bookName}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>

    </div>
  );
}
