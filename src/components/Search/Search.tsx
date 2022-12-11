import React, { useEffect, useState } from 'react';
import { Book } from '../Common/Book';
import * as BookApis from '../Common/BookApis'
import classes from './Search.module.css';
import BookInterface from '../Common/Book.interface'
import { useDispatch } from 'react-redux';
import { clearBooks, selectBooks, setBooks } from '../../reducers/bookReducer';
import { useSelector } from 'react-redux';
export const Search: React.FC = () => {
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearBooks([]));
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const booksSelector =  useSelector(selectBooks);

  const handleChange = (e: { target: { value: string; }; }) => {
    setMessage(e.target.value);
   BookApis.search(e.target.value,10).then((filterdBooks)=>{
    dispatch(setBooks(filterdBooks));
  }).catch((e)=> {
    console.log('Error happened');
  }
  )
  };
  const booksFromSelectors=booksSelector.bookRed.Books;

 
 
    return (
      <React.Fragment>

      <div className={classes.wrap}>
   <div className={classes.search}>
   <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        className={classes.searchTerm} placeholder="What are you looking for?"
      />
   </div>
</div>
<div id="large-th">
    <div className={classes.container}>

{booksFromSelectors && booksFromSelectors.length > 0  && booksFromSelectors.map((value:BookInterface) => {
          return (
      <Book   key={value.id} book={value}/>
          );
        })} 
        {(!booksFromSelectors || !booksFromSelectors.length)  && <h1>No Books Found</h1>}
        </div>
        </div>
</React.Fragment>

  );
}

