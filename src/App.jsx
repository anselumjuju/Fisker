import { Home, About, Gallery, BentoGrid, Mission, Specs, TestDrive, Blog, Footer, NewsLetter } from './containers'

import './App.css'

function App() {

  return (
    <div>
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
  )
}

export default App
