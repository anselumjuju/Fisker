import { Home, About, Gallery, BentoGrid, Mission, Specs, TestDrive, Blog, Footer, NewsLetter } from './containers';

import './App.css';
import gsap, { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
      speed: 1.25,
      normalizeScroll: false,
      ignoreMobileResize: true,
      onRefreshInit: () => {
        gsap.set('#smooth-content', { visibility: 'visible' });
      },
    });
  });
  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>
        <Home />
        <div className='w-full pt-24 pb-12 flex flex-col gap-24'>
          <About />
          <Gallery />
          <BentoGrid />
          <Mission />
          <Specs />
        </div>
        <div className='w-full pt-24 pb-12 bg-black flex flex-col gap-24'>
          <TestDrive />
          <Blog />
          <NewsLetter />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
