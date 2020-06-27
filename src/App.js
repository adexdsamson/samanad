import React from 'react';
import Banner from './containers/Banner';
import About from './containers/About';
import WhyUs from './containers/WhyUs';
import Service from './containers/Service';
import Fab from './containers/WhatsappButton';
import Gallery from './containers/Gallery';
import Solar from './containers/WhaySolar';
import Process from './containers/Process';
import Contact from './containers/Contact';
import Footer from './containers/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <WhyUs />
      <Service />
      <Solar />
      <Gallery />
      <Process />
      <Contact />
      <Footer />
      <Fab />
    </div>
  );
}

export default App;
