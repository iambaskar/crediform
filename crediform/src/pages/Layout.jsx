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
import Overview from '../components/Overview'
import Testimonials from '../components/Testimonials'
import Profile from '../components/Profile'
import CreateForm from './CreateForm'

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
          <Route path='/dashboard' element={<UserDashboard />}>
            <Route index element={<Overview />} />
            <Route path='overview' element={<Overview />} />
            <Route path='testimonials' element={<Testimonials />} />
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='/feedback-form/:id' element={<FeedbackForm />} />
          <Route path='/create-form' element={<CreateForm />} />
        </Routes>
      </Router>
    </>
  )
}
