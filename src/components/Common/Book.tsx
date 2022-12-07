import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setBooks } from '../../reducers/bookReducer';
import BookInterface from './Book.interface';
import classes from './Book.module.css'
import * as BookApis from './BookApis'
export const Book: React.FC<BookInterface> = (props: BookInterface) => {
  const ShlfStatus = {
    Currentlyreading: 'currentlyReading',
    WantToRead: 'wantToRead',
    Read: 'read',
    None: ''
  }

  const [updateBook, setupdateBook] = useState();
  const dispatch = useDispatch();


  const updateBookStatus = (bookId: string, newStatus: string) => {
    BookApis.update(bookId, newStatus).then((res: any) => {
      setupdateBook(res);
      dispatch(setBooks(newStatus));

    })
  }
  return (
    <React.Fragment>

      <div className={classes.book}>
        <div className={classes.cover}>
          <img src={props.imageLinks.thumbnail} alt="image thumb"/>
        </div>
        <div className={classes.description}>
          <p className={classes.title}>{props.title}<br />
            <span className={classes.author}>{props.authors}</span></p>
          <div className={classes.btn_wrapper}>
            <button onClick={() => updateBookStatus(props.id, ShlfStatus.Currentlyreading)} className={classes.btn + ' ' + `${props.shelf === ShlfStatus.Currentlyreading ? classes.btn__outline : ""}`}>Currently Reading</button>
            <button onClick={() => updateBookStatus(props.id, ShlfStatus.WantToRead)} className={classes.btn + ' ' + `${props.shelf === ShlfStatus.WantToRead ? classes.btn__outline : ""}`}>Want to Read</button>
            <button onClick={() => updateBookStatus(props.id, ShlfStatus.Read)} className={classes.btn + ' ' + `${props.shelf === ShlfStatus.Read ? classes.btn__outline : ""}`}>Read</button>
            {!props.shelf && <button onClick={() => updateBookStatus(props.id, ShlfStatus.None)} className={classes.btn + ' ' + `${!props.shelf ? classes.btn__outline : ""}`}>none</button>}
           

          </div>
          <div className={classes.details_wrapper}>
          <NavLink className={classes.link} to={`/details/${props.id}`} >Details</NavLink>

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

