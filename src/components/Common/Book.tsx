import React, { useState } from 'react';
import BookInterface from './Book.interface';
import classes from './Book.module.css'
import * as BookApis from './BookApis'
export const Book: React.FC<BookInterface> = (props: BookInterface) => {
  const ShlfStatus={
      Currentlyreading :'currentlyReading',
    WantToRead:'wantToRead',
    Read:'read',
    None:''
  }
  
  const [updateBook, setupdateBook] = useState('');
  const updateBookStatus= (bookId:string,newStatus:string)=>{
    BookApis.update(bookId,newStatus).then((res:any)=>{
console.log(res)  })}
  return (
    <React.Fragment>

        <div  className={classes.book}>
          <div className={classes.cover}>
            <img src={props.imageLinks.thumbnail}/>
          </div>
          <div className={classes.description}>
            <p className={classes.title}>{props.title}<br/>
              <span className={classes.author}>{props.authors}</span></p>
              <div className={classes.btn_wrapper}>
              <button onClick={()=>updateBookStatus(props.id,ShlfStatus.Currentlyreading)} className={classes.btn  +' '+ `${props.shelf == ShlfStatus.Currentlyreading ? classes.btn__outline : ""}`}>Currently Reading</button>
              <button onClick={()=>updateBookStatus(props.id,ShlfStatus.WantToRead)} className={classes.btn +' '+  `${props.shelf == ShlfStatus.WantToRead ? classes.btn__outline : ""}`}>Want to Read</button>
              <button onClick={()=>updateBookStatus(props.id,ShlfStatus.Read)}  className={classes.btn +' '+ `${props.shelf == ShlfStatus.Read ? classes.btn__outline : ""}`}>Read</button>
              <button onClick={()=>updateBookStatus(props.id,ShlfStatus.None)} className={classes.btn +' '+  `${!props.shelf  ? classes.btn__outline : ""}`}>none</button>
              </div>
          </div>
        </div>
        </React.Fragment>

       
  );
}


