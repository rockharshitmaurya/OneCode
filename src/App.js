import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Editor from './components/Editor';
import './App.css';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/editor/:roomid" element={<Editor/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App