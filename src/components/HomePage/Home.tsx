import React, { useEffect, useState } from 'react';
import BookInterface from '../Common/Book.interface';
import classes from './Home.module.css'
import * as BookApis from '../Common/BookApis'
import { Shelf } from '../Common/Shelf';
export const Home: React.FC = () => {
  const [books, setResult] = useState<{ arrayRead: BookInterface[], arrayWantToRead: BookInterface[], arrayReading: BookInterface[], arrayNoStatus: BookInterface[] }>({ arrayRead: [], arrayWantToRead: [], arrayReading: [], arrayNoStatus: [] });

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
        arrayRead: arrayRead, arrayWantToRead: arrayWantToRead, arrayReading: arrayReading, arrayNoStatus: arrayNoStatus
      }
      setResult(booksArray);
    });
  }, []);


  return (

    <React.Fragment>
      <div id="large-th">
        <div className={classes.container}>
          <div>
            <Shelf books={books.arrayRead} title={ShlfStatus.Read}></Shelf>

            <hr />
            <Shelf books={books.arrayReading} title={ShlfStatus.Currentlyreading}></Shelf>
            <hr />
            <Shelf books={books.arrayWantToRead} title={ShlfStatus.WantToRead}></Shelf>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

