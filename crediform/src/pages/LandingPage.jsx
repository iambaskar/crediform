import React from 'react'
import Home from './Home'
import Clients from './Clients'
import Features2 from './Features2'
import Features from './Features'
import Navbar from '../components/Navbar'
import ProductShowCase from './ProductShowCase'

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Home />
            <Clients />
            <Features2 />
            <ProductShowCase />
            <Features />
        </>
    )
}
