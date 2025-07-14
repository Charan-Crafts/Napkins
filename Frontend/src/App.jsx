import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Hero from './components/First';
import HowItWorks from './components/Second';
import ScrollSection from './components/Third';
import Forth from './components/Forth';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';
import Seventh from './components/Seventh';
import Eigth from './components/Eigth';
import SignIn from './pages/signin';
import Signup from './pages/signup';
import Dashboard from './pages/Dashboard';
import PricingPage from './pages/PricingPage';
import AboutUsPage from './pages/AboutusPage';
import BlogPage from './pages/Blogpage'; 
import BlogDetailPage from './pages/blogDetailPage'; 
import TandC from './pages/TandC';
import PrivacyPage from './pages/privacy';

function LandingPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ScrollSection />
      <Forth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Eigth />
    </>
  );
}

function AppWrapper() {
  const location = useLocation();

  const hideNavbarRoutes = ['/signin', '/signup', '/dashboard'];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Blog/:slug" element={<BlogDetailPage />} />
        <Route path="/TandC" element={<TandC />} />
        <Route path="/privacy" element={<PrivacyPage/>}/>

      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;