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


  const dispatch = useDispatch();

  useEffect(() => {
    const getBoooks = async () => {
      const books = await  BookApis.getAll();
      //setBoooks(booksArray)
      dispatch(setBooks(books))};
      getBoooks();
  }, []);
  const booksSe =  useSelector(selectCount);

const booksFromSelectors=booksSe.bookRed.Books;
  const arrayRead = [];
  const arrayWantToRead = [];
  const arrayReading = [];
  const arrayNoStatus = [];
  for (let index = 0; index < booksFromSelectors.length; index++) {
    if (booksFromSelectors[index].shelf === ShlfStatus.Read) {
      arrayRead.push(booksFromSelectors[index])

    } else if (booksFromSelectors[index].shelf === ShlfStatus.Currentlyreading) {
      arrayReading.push(booksFromSelectors[index])

    } else if (booksFromSelectors[index].shelf === ShlfStatus.WantToRead) {
      arrayWantToRead.push(booksFromSelectors[index])

    } else {
      arrayNoStatus.push(booksFromSelectors[index])
    }
  }
  const booksArray = {
    read: arrayRead, wantToRead: arrayWantToRead, currentlyReading: arrayReading, arrayNoStatus: arrayNoStatus
  }

  return (

    <React.Fragment>
   <div id="large-th">
        <div className={classes.container}>
          <div>
          {<><Shelf books={booksArray.read} title={ShlfStatus.Read}></Shelf>

<hr />
<Shelf books={booksArray.currentlyReading} title={ShlfStatus.Currentlyreading}></Shelf>
<hr />
<Shelf books={booksArray.wantToRead} title={ShlfStatus.WantToRead}></Shelf></>
}
          </div>
        </div>
      </div>    </React.Fragment>
  )
}


