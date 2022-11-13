import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/about';
import { useAppSelector } from './redux/hooks';
import SingleStore from './pages/singleStore';

function App() {
  const isDarkMode = useAppSelector((state) => state.appTheme.darkTheme)
  console.log({ isDarkMode });
  return (
    <div className={isDarkMode? "dark":""}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/store/:id' element={<SingleStore />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
