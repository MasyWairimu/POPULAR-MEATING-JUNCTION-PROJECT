import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './ComponentsSource/Navbar/Navbar'
import Home from './ComponentsSource/HomeComponent/Home'
import BookingPage from './ComponentsSource/BookingPage/Booking'
import Recipe from './ComponentsSource/RecipeBook/Recipe'
import Footer from './ComponentsSource/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='buy-nyama' element= {<BookingPage/>} />
        <Route path='quick-recipes' element = {<Recipe/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
