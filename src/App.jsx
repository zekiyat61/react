import React from 'react'
import Hello from './Hello'
import "./App.css"
import Great from './Great'
import Header from './compo/Header'
import Main from './compo/Main'
import Footer from './compo/Footer'

function App() {
  return (
   <div className='app'>
    <Header/>
    <Main/>
    <Footer/>
   </div>
  )
}

export default App