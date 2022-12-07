import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setBooks } from '../../reducers/bookReducer';
import BookInterface from './Book.interface';
import classes from './Book.module.css'
import * as BookApis from './BookApis'
export const Book: React.FC<any> = (props: any) => {
  const ShlfStatus = {
    Currentlyreading: 'currentlyReading',
    WantToRead: 'wantToRead',
    Read: 'read',
    None: ''
  }

  const [updateBook, setupdateBook] = useState();
  const dispatch = useDispatch();


  const updateBookStatus = (book:any, newStatus: string) => {
    BookApis.update(book.id, newStatus).then((res: any) => {
      setupdateBook(res);
      dispatch(setBooks(book));

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
            <button onClick={() => updateBookStatus(props.book, ShlfStatus.Currentlyreading)} className={classes.btn + ' ' + `${props.book.shelf === ShlfStatus.Currentlyreading ? classes.btn__outline : ""}`}>Currently Reading</button>
            <button onClick={() => updateBookStatus(props.book, ShlfStatus.WantToRead)} className={classes.btn + ' ' + `${props.book.shelf === ShlfStatus.WantToRead ? classes.btn__outline : ""}`}>Want to Read</button>
            <button onClick={() => updateBookStatus(props.book, ShlfStatus.Read)} className={classes.btn + ' ' + `${props.book.shelf === ShlfStatus.Read ? classes.btn__outline : ""}`}>Read</button>
            {!props.book.shelf && <button onClick={() => updateBookStatus(props.book, ShlfStatus.None)} className={classes.btn + ' ' + `${!props.book.shelf ? classes.btn__outline : ""}`}>none</button>}
           

          </div>
          <div className={classes.details_wrapper}>
          <NavLink className={classes.link} to={`/details/${props.book.id}`} >Details</NavLink>

          </div>

        </div>
      </div>
    </React.Fragment>


  );
}


const mapStateToProps = (state: any) => {
  console.log(state)
  return {
    books: state.books,
  };
};
const mapDispatchToProps = (dispatch: any) => {

  return {
    setupdateBook: (book:any) =>  {console.log(book);dispatch({ type: 'UPDATE_MOVEMENT', data: book })},
  }
};
const bookC = connect(mapStateToProps, mapDispatchToProps)(Book);
export default bookC;

