import { Toaster } from 'react-hot-toast';
import { LandingPage } from './pages/LandingPage';

function App() {


  return (
    <div className='h-screen'>
      <LandingPage />

      <div><Toaster /></div>
    </div>
  )
}

export default App
