import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import  configureStore  from '../../Store/store';
import '@testing-library/jest-dom';
import { Book } from "./Book";
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

describe("BookComponent Test", () => {
  test("Render Book values", () => {
    const bookValue = {
        title: 'book1',
        imageLinks: {thumbnail:'img1'},
        shelf: 'currentlyReading',
        authors:"auth",
        id:'bookid',
        description:'desc'      };
    
    render(
     <Provider store={configureStore} >
            <Router>

        <Book book={bookValue}/>
        </Router></Provider>
    );
    const renderElement = screen.getByText('book1')
    expect(renderElement).toBeInTheDocument();
  });
});