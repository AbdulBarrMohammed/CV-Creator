import { useState } from 'react'
import './App.css'
import './index.css';

import { Landing } from './pages/Landing'
import { Layout } from './components/Layout'
import Home from './components/Home'
import {HashRouter as Router, Routes, Route, useLocation} from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Landing/>}/>
          <Route path="/home" element={<Home/>}/>
        </Route>
      </Routes>

    </>
  )
}
export default App
