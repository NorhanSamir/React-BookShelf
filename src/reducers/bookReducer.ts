

  import { createSlice } from '@reduxjs/toolkit';
  import type { PayloadAction } from '@reduxjs/toolkit'
import BookInterface from '../components/Common/Book.interface';

export const BookSlice = createSlice({
  name: 'bookRed',
  initialState: [],
  reducers: {
   
    updateBook: (state, action: PayloadAction<any>) => {
      const found = state.find((element:any) => element.id == action.payload.id);
      return{
        ...state,...action.payload
      }
    },
      setBooks: (state, action) =>{
        return {
          ...state,
          Books: action.payload,
        }},
      
  
    },
 
});

// this is for dispatch
export const { updateBook, setBooks} = BookSlice.actions;
export const selectCount = (state:any) => state

// this is for configureStore
export default BookSlice.reducer;