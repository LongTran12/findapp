import React from 'react';
import './App.css';
import SectionBrand from './components/SectionBrand'
import Filter from './components/Filter'


function App() {
  return (
    <>
      <SectionBrand nameCate="social" />
      <Filter />
    </>
  );
}

export default App;
