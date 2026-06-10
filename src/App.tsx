import { useState } from 'react'
import { Header } from './components/Header'
import { PageLayout } from './components/PageLayout'
import './App.css'

function App() {
  const [view, setView] = useState('home')

  return (
    <div className="app">
      <Header view={view} onNavigate={setView} />
      <main>
        <PageLayout view={view} />
      </main>
    </div>
  )
}

export default App
