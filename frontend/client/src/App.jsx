import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Departments from './components/Departments';
import Admissions from './components/Admissions';
import Placements from './components/Placements';
import Faculty from './components/Faculty';
import Research from './components/Research';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="grow">
        <Hero />
        <About />
        <Departments />
        <Faculty />
        <Research />
        <Placements />
        <Admissions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
