import React, { useState } from 'react';
import { Book } from '../Common/Book';
import * as BookApis from '../Common/BookApis'
import classes from './Search.module.css';
import BookInterface from '../Common/Book.interface'
export const Search: React.FC = () => {
  const [message, setMessage] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

 
  const handleChange = (e: { target: { value: string; }; }) => {
    setMessage(e.target.value);
   BookApis.search(e.target.value,10).then((filterdBooks)=>{
    setFilteredBooks(filterdBooks)
    console.log(filterdBooks)
  })

  };
 
 
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

{filteredBooks.map((value:BookInterface) => {
          return (
      <Book   key={value.id} id={value.id} authors={value.authors[0]} imageLinks={value.imageLinks} shelf={value.shelf} title={value.title}/>
          );
        })} 
        </div>
        </div>
</React.Fragment>

  );
}

