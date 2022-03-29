import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BrawlerDetails } from './components/brawler-details'
import { BrawlerForm } from './components/brawler-form'
import { BrawlerListing } from './components/brawler-listing'
import { NavBar } from './components/nav-bar'
import { Home } from './components/home'
import './App.scss'

function App() {
  const headerLinks = [
    { href: '/', label: 'Home' },
    { href: '/brawlers', label: 'Brawlers' }
  ]
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar links={headerLinks}></NavBar>
        </header>
        <main>
          <Routes>
            <Route path="/brawlers" element={<BrawlerListing />}></Route>
            <Route path="/brawlers/details/:id" element={<BrawlerDetails />}></Route>
            <Route path="/brawlers/create" element={<BrawlerForm />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
