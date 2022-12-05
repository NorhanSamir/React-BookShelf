import React, { useEffect, useState } from 'react';
import { Book } from '../Common/Book';
import * as BookApis from '../Common/BookApis'
import classes from './Search.module.css';
import { useParams, useSearchParams } from 'react-router-dom';
import BookInterface from '../Common/Book.interface'
export const BookDetails: React.FC = (props) => {
  const [bookDetails, setBookDetails] = useState({book:{title:''}})
  const params:any = useParams()

  useEffect(() => {

    BookApis.get(params.id).then((book) => {

        setBookDetails(book)
        console.log(book)
    });
  }, []);
 

    return (
      <React.Fragment>
{bookDetails && bookDetails.book.title}
      
</React.Fragment>

  );
}

