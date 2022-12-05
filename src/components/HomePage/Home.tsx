import React, { useEffect, useState } from 'react';
import BookInterface from '../Common/Book.interface';
import classes from './Home.module.css'
import * as BookApis from '../Common/BookApis'
import { Shelf } from '../Common/Shelf';

import { connect } from 'react-redux';
export const Home: React.FC = () => {
  const [books, setResult] = useState<{ read: BookInterface[], wantToRead: BookInterface[], currentlyReading: BookInterface[], arrayNoStatus: BookInterface[] }>({ read: [], wantToRead: [], currentlyReading: [], arrayNoStatus: [] });

  const ShlfStatus = {
    Currentlyreading: 'currentlyReading',
    WantToRead: 'wantToRead',
    Read: 'read',
    None: ''
  }
  useEffect(() => {

    BookApis.getAll().then((books) => {

      const arrayRead = [];
      const arrayWantToRead = [];
      const arrayReading = [];
      const arrayNoStatus = [];
      for (let index = 0; index < books.length; index++) {
        if (books[index].shelf === ShlfStatus.Read) {
          arrayRead.push(books[index])

        } else if (books[index].shelf === ShlfStatus.Currentlyreading) {
          arrayReading.push(books[index])

        } else if (books[index].shelf === ShlfStatus.WantToRead) {
          arrayWantToRead.push(books[index])

        } else {
          arrayNoStatus.push(books[index])
        }
      }
      const booksArray = {
        read: arrayRead, wantToRead: arrayWantToRead, currentlyReading: arrayReading, arrayNoStatus: arrayNoStatus
      }
      setResult(booksArray)
    });
  }, []);


  return (

    <React.Fragment>
      <div id="large-th">
        <div className={classes.container}>
          <div>
           <Shelf books={books.read} title={ShlfStatus.Read}></Shelf>

            <hr />
            <Shelf books={books.currentlyReading} title={ShlfStatus.Currentlyreading}></Shelf>
            <hr />
            <Shelf books={books.wantToRead} title={ShlfStatus.WantToRead}></Shelf>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = (state: any) => {
  return {
    books: state.books,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    setResult: (books:any) => dispatch({ type: 'UPDATEBOOKS', data: books }),
  }
};
const HomeC = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeC;

