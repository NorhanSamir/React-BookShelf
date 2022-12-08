import React, { useEffect, useState } from 'react';
import { Book } from '../Common/Book';
import * as BookApis from '../Common/BookApis'
import classes from './Search.module.css';
import { useParams } from 'react-router-dom';
import BookInterface from '../Common/Book.interface'
export const BookDetails: React.FC = () => {
  const [bookDetails, setBookDetails] = useState<BookInterface>({title: 'Jon',imageLinks:{thumbnail:''},authors:'',id:'',shelf:'',description:''});
  const params:any = useParams()

  useEffect(() => {
    const getBook = async () => {
      const book = await  BookApis.get(params.id);
      setBookDetails(book);
    };
  
    getBook();

  
  }, []);
  
    return (
      <React.Fragment>
          <img src={bookDetails.imageLinks.thumbnail} alt="image thumb"/>
          <br/>
          {bookDetails.authors }
       <h2> {bookDetails.title}</h2>
        {bookDetails.description}
t</React.Fragment>
  );
}

