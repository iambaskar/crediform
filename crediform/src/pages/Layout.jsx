import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import FeedbackForm from './FeedbackForm'
import Navbar from '../components/Navbar'
import UserDashboard from './UserDashboard'
import Clients from './Clients'
import Features from './Features'

export default function Layout() {
  return (
    <>
    <Navbar />
    <Home />
    <Clients />
    <Features />
    {/* <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/user-dashboard' element={<UserDashboard />} />
          <Route path='/feedback-form/:id'  element={<FeedbackForm />} />
        </Routes>
    </Router> */}
    </>
  )
}
