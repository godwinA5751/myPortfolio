import Navbar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
function App() {

  return (
    <div className="relative overflow-hidden z-10 font-sans min-h-screen bg-linear-to-r from-sky-100 via-cyan-50 to-cyan-100 dark:from-slate-900 dark:via-slate-800 dark:to-sky-950 transition-colors duration-300">

      <Navbar />
      <Hero />
      <AnimatedBackground />
      <About />
      <Project />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
