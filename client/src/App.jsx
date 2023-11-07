import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddingPage from './pages/AddingPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { USERS_MOCK } from './utils/users_mock';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage user={USERS_MOCK[0]} />} />
        <Route path="/add" element={<AddingPage />} />
        <Route path="/proposals/:id" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
