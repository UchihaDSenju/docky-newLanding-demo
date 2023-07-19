import Navbar from './components/navbar'
import Hero from './components/hero'
import Features from './components/features'
import Description from './components/description'
import Footer from './components/footer'

import './App.css'

function App() {
  return (
    <>
      <div className='root'>
        <Navbar />
        <Hero />
        <Features />
        <Description />
      </div>
      <Footer />
    </>
  )
}

export default App
