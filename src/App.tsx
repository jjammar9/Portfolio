import { useMenu } from './hooks/useMenu'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { IntroSection } from './components/IntroSection'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  const { isOpen: menuOpen, toggle: toggleMenu } = useMenu()

  return (
    <div className={`app ${menuOpen ? 'menu-open' : ''}`}>
      <Header menuOpen={menuOpen} onToggleMenu={toggleMenu} />
      <main>
        <HeroSection />
        <IntroSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
