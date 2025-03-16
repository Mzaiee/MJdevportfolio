import HeroSection from './components/HeroSection'
import Navbar from './components/navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-400 antialiased'>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills/>
      <Achievements/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
