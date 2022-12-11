import React, { useEffect, useState } from 'react';
import * as BookApis from '../Common/BookApis'
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
    return (
      <React.Fragment>
        {bookDetails && <>          <img src={bookDetails.imageLinks.thumbnail} alt="thumb"/>
          <br/>
          {bookDetails.authors }
       <h2> {bookDetails.title}</h2>
        {bookDetails.description}
        
</>
      }
</React.Fragment>
  );
}

