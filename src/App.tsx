import { useMenu } from './hooks/useMenu'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import './App.css'

function App() {
  const { isOpen: menuOpen, toggle: toggleMenu } = useMenu()

  return (
    <div className={`app ${menuOpen ? 'menu-open' : ''}`}>
      <Header menuOpen={menuOpen} onToggleMenu={toggleMenu} />
      <main>
        <HeroSection />
      </main>
    </div>
  )
}

export default App
