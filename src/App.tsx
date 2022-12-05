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


export default function App() {
  return (
    
        <Router>
          <React.Fragment>
<Header/>
</React.Fragment>
            <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/search" element={<Search/>} />
            </Routes>
        </Router>
    

  );
}

