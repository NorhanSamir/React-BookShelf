import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import {Home} from './components/HomePage/Home';
import {Search} from './components/Search/Search';
import { Header } from './components/Common/Header';
import { Provider } from 'react-redux';
import { store } from './components/Store/store';
import { BookDetails } from './components/Common/BookDetails';


export default function App() {
  return (
    <Provider store={store}>


        <Router>
          <React.Fragment>
<Header/>
</React.Fragment>
            <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/details/:id" element={<BookDetails></BookDetails>}/>

            </Routes>
        </Router>
    
</Provider>
  );
}

