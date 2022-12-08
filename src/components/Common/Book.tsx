import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateBook } from '../../reducers/bookReducer';
import BookInterface from './Book.interface';
import classes from './Book.module.css'
import * as BookApis from './BookApis'
import { Shelf } from './Shelf';
export const Book: React.FC<any> = (props: any) => {
  const ShlfStatus = {
    Currentlyreading: 'currentlyReading',
    WantToRead: 'wantToRead',
    Read: 'read',
    None: ''
  }

  const dispatch = useDispatch();

  const updateBookStatus = (book:BookInterface, newStatus: string) => {

   

    BookApis.update(book.id, newStatus).then((res: any) => {

     dispatch(updateBook({id: book.id,newStatus}));

    })
  }
  return (
    <React.Fragment>

      <div className={classes.book}>
        <div className={classes.cover}>
          <img src={props.book.imageLinks && props.book.imageLinks.thumbnail} alt="image thumb"/>
        </div>
        <div className={classes.description}>
          <p className={classes.title}>{props.book.title}<br />
            <span className={classes.author}>{props.book.authors}</span></p>
          <div className={classes.btn_wrapper}>
          {props.book.shelf != ShlfStatus.Currentlyreading &&  <button onClick={() => updateBookStatus(props.book, ShlfStatus.Currentlyreading)} className={classes.btn}>Currently Reading</button>}
            {props.book.shelf != ShlfStatus.WantToRead &&  <button onClick={() => updateBookStatus(props.book, ShlfStatus.WantToRead)} className={classes.btn}>Want to Read</button>}
           {props.book.shelf  != ShlfStatus.Read && <button onClick={() => updateBookStatus(props.book, ShlfStatus.Read)} className={classes.btn}>Read</button>}
           

          </div>
          <div className={classes.details_wrapper}>
          <NavLink className={classes.link} to={`/details/${props.book.id}`} >Details</NavLink>

          </div>

        </div>
      </div>
    </React.Fragment>


  );
}


