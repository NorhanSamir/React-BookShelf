import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import  configureStore  from './Store/store';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Header } from "./components/Common/Header";
import { Home } from "./components/HomePage/Home";
describe("Book Component Test", () => {
 test("test rendering book", () => {
 const bookData = {
  id: "nggnmAEACAAJ",
  authors: ["William E. Shotts, Jr."],
  shelf: "currentlyReading",
  title: "test title",
  imageLinks: { smallThumbnail: "test path" },
  };
 
 render(
  <Provider store={configureStore}>      <Router>
  <React.Fragment>
</React.Fragment>
    <Routes>
    </Routes>
</Router>

</Provider>

  );
 const renderElement = screen.getByText('Read')
 expect(renderElement).toBeInTheDocument();
 });
});

