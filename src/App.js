import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrawlerDetails } from './components/brawler-details';
import { BrawlerForm } from './components/brawler-form';
import { BrawlerListing } from './components/brawler-listing';
import { NavBar } from './components/nav-bar';
import { Home } from './components/home';


function App() {
  return (
    <div>
      <main>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/brawlers" element={<BrawlerListing />}></Route>
            <Route path="/brawlers/details/:id" element={<BrawlerDetails />}></Route>
            <Route path="/brawlers/create" element={<BrawlerForm />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
