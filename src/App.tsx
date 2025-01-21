import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { CreadorPaletas } from './pages/CreadorPaletas';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/creator' element={< CreadorPaletas/>} />
      </Routes>
    
      <div><Toaster /></div>
    </BrowserRouter>
  )
}

export default App
