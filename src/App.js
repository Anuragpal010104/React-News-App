// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import { Routes, Route, Router } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


 const App = ()=> {
    const pageSize=6;
    // const apiKey = '81132ac5fa4e489ab1f6a635f85447c6';
    const [progress, setProgress] = useState(0)

    return (
    <div>
      <Router>
      <Navbar/>
      <LoadingBar
      height={3}
      color='#f11946'
      progress={progress}
      />       
      <Routes>
          <Route exact path="/" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/>} />
          <Route  path="/general" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/>} />
          <Route path="/business" element={<News setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business"/>} />
          <Route path="/health" element={<News setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health"/>} />
          <Route path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology"/>} />
          <Route path="/science" element={<News setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science"/>} />
          <Route path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
          <Route path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/>} />
      </Routes>

 
      </Router>
      </div>
    )
  }


export default App;