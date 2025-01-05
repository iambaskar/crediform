import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import FeedbackForm from './FeedbackForm'
import Navbar from '../components/Navbar'
import UserDashboard from './UserDashboard'
import Clients from './Clients'
import Features from './Features'
import Features2 from './Features2'
import LandingPage from './LandingPage'

export default function Layout() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Home />
    <Clients />
    <Features2 />
    <Features /> */}
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/user-dashboard' element={<UserDashboard />} />
          <Route path='/feedback-form/:id' element={<FeedbackForm />} />
        </Routes>
      </Router>
    </>
  )
}
