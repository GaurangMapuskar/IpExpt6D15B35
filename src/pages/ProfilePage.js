import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactMe from './ContactMe';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Result from './Result';
const ProfilePage = () => {
  return (

    <div>
      <Navbar />
      <Router>
      <Routes>
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
      <Footer />
    </div>

  );
};

export default ProfilePage;
