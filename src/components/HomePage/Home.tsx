import React, { useEffect, useState } from 'react';
import {Book} from '../Common/Book';
import BookInterface from '../Common/Book.interface';
import classes from './Home.module.css'
import * as BookApis from '../Common/BookApis'
export const Home: React.FC = () => {
  const [books, setResult] = useState<{ arrayRead:BookInterface[],arrayWantToRead:BookInterface[],arrayReading:BookInterface[],arrayNoStatus:BookInterface[]}>({arrayRead:[],arrayWantToRead:[],arrayReading:[],arrayNoStatus:[]});
        let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};
const ShlfStatus={
  Currentlyreading :'currentlyReading',
WantToRead:'wantToRead',
Read:'read',
None:''
}

        useEffect(() => {
     
            BookApis.getAll().then((books)=>{
          
            const arrayRead=[];
            const arrayWantToRead=[];
            const arrayReading=[];
            const arrayNoStatus=[];
            for (let index = 0; index < books.length; index++) {
                    if  (books[index].shelf===ShlfStatus.Read){
                      arrayRead.push(books[index])

                    }else if (books[index].shelf===ShlfStatus.Currentlyreading){
                      arrayReading.push(books[index])

                    }else if  (books[index].shelf===ShlfStatus.WantToRead){
                      arrayWantToRead.push(books[index])

                    }else{
                      arrayNoStatus.push(books[index])
                    }                                  
            }
            const booksArray={
              arrayRead:arrayRead,arrayWantToRead:arrayWantToRead,arrayReading:arrayReading,arrayNoStatus:arrayNoStatus
            }
            setResult(booksArray);
          });
        }, []);
      
      
  return (
  
    <React.Fragment>
         <div id="large-th">
    <div className={classes.container}>
      <div>
        <h1>Read</h1>
     {books.arrayRead.map((value) => {
          return (
      <Book  key={value.id} id={value.id} authors={value.authors[0]} imageLinks={value.imageLinks} shelf={value.shelf} title={value.title}/>
          );
        })}
        <hr/>
            <h1>Want to Read</h1>
     {books.arrayWantToRead.map((value) => {
          return (
      <Book  key={value.id} id={value.id} authors={value.authors[0]} imageLinks={value.imageLinks} shelf={value.shelf} title={value.title}/>
          );
        })}
                <hr/>

            <h1>Continue Reading</h1>
     {books.arrayReading.map((value) => {
          return (
      <Book  key={value.id}  id={value.id} authors={value.authors[0]} imageLinks={value.imageLinks} shelf={value.shelf} title={value.title}/>
          );
        })}
    </div>
    </div>
    </div>
  </React.Fragment>
  )
}

