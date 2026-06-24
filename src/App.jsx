import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contacts'

const pageTitles = {
  '/': 'Fredson Maikon | Desenvolvedor Full Stack',
  '/about': 'Sobre | Fredson Maikon',
  '/projects': 'Projetos | Fredson Maikon',
  '/contact': 'Contato | Fredson Maikon',
}

function PageEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = pageTitles[pathname] || pageTitles['/']
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <PageEffects />
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
