import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddingPage from './pages/AddingPage';
import MainPage from './pages/MainPage';
import { USERS_MOCK } from './utils/users_mock';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage user={USERS_MOCK[0]} />} />
        <Route path="/add" element={<AddingPage />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
