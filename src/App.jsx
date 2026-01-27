import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Credentials from './components/Credentials'
import AreasOfWork from './components/AreasOfWork'
import HowIWork from './components/HowIWork'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <Navigation />
            <Hero />
            <Projects />
            <Skills />
            <About />
            <Credentials />
            <AreasOfWork />
            <HowIWork />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
