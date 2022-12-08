

  import { createSlice } from '@reduxjs/toolkit';
  import type { PayloadAction } from '@reduxjs/toolkit'
import BookInterface from '../components/Common/Book.interface';

export const BookSlice = createSlice({
  name: 'bookRed',
  initialState: [],
  reducers: {
   
    updateBook: (state:any, {payload:{id,newStatus}}) => {

      const updatedBook: BookInterface = state.Books.find((book:any) => book.id === id);

      updatedBook.shelf= newStatus

      state.Books = [...state.Books]

    },
      setBooks: (state, action) =>{
        return {
          ...state,
          Books: action.payload,
        }},
      
        clearBooks: (state,action) =>{
          return selectBooks(action.payload)},
    },
 
});

// this is for dispatch
export const { updateBook, setBooks,clearBooks} = BookSlice.actions;
export const selectBooks = (state:any) => state

// this is for configureStore
export default BookSlice.reducer;