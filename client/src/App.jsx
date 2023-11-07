import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddingPage from './pages/AddingPage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add" element={<AddingPage />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
