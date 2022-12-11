import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import  configureStore  from './Store/store';
import '@testing-library/jest-dom';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
describe("Book Component Test", () => {
 test("test rendering book", () => {
 
 render(
  <Provider store={configureStore}>      <Router>
  <React.Fragment>
</React.Fragment>
<div>Home</div>
    <Routes>
    </Routes>
</Router>

</Provider>

  );
 const renderElement =  screen.getByText('Home')
 expect(renderElement).toBeInTheDocument();
 });
});

