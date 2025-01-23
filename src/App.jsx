
import './App.css'
import Contact from './components/contact'
import Header from './components/header'
import Hero from './components/hero'
import Services from './components/service'


function App() {
  

  return (
    <>
    <div className="min-h-screen bg-white">
    <Header />
    <main>
      
      <Hero />
      <Services />
      <Contact />
      
    </main>
    <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 Masangi's Business Center. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
      
     
    </>
  )
}

export default App

