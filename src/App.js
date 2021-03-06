import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import ScrollButton from './components/ScrollButton/ScrollButton'
import Services from './components/Services/Services'

function App() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <Nav />
      <ScrollButton />
    </>
  )
}

export default App
