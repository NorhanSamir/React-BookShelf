import React, { useEffect, useState } from 'react';
import BookInterface from '../Common/Book.interface';
import classes from './Home.module.css'
import * as BookApis from '../Common/BookApis'
import { Shelf } from '../Common/Shelf';

import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectCount, setBooks } from '../../reducers/bookReducer';
import { useSelector } from 'react-redux';
export const Home: React.FC = () => {
//  const [books, setBoooks] = useState<{ read: BookInterface[], wantToRead: BookInterface[], currentlyReading: BookInterface[], arrayNoStatus: BookInterface[] }>({ read: [], wantToRead: [], currentlyReading: [], arrayNoStatus: [] });

  const ShlfStatus = {
    Currentlyreading: 'currentlyReading',
    WantToRead: 'wantToRead',
    Read: 'read',
    None: ''
  }
  const books =  useSelector(selectCount);


  const dispatch = useDispatch();

  useEffect(() => {
    const getBoooks = async () => {
      const books = await  BookApis.getAll();

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
      //setBoooks(booksArray)
      dispatch(setBooks(booksArray))};
      getBoooks();

      console.log(books)

  }, []);


  return (

    <React.Fragment>
   <div id="large-th">
        <div className={classes.container}>
          <div>
            {books.bookRed && books.bookRed.read && <><Shelf books={books.bookRed.read} title={ShlfStatus.Read}></Shelf>

            <hr />
            <Shelf books={books.bookRed.currentlyReading} title={ShlfStatus.Currentlyreading}></Shelf>
            <hr />
            <Shelf books={books.bookRed.wantToRead} title={ShlfStatus.WantToRead}></Shelf></>
  }
          </div>
        </div>
      </div>    </React.Fragment>
  )
}


