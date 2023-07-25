import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';
import HomePage from './pages/HomePage';
import Navbar from './components/navbar';

const App = () => {
  return (
  <BrowserRouter>
  <Navbar></Navbar>
    <Routes>
      <Route part="/home" element={<HomePage></HomePage>} />
      <Route path="/income" element={<IncomePage></IncomePage>} />
      <Route path="/expenses" element={<ExpensePage></ExpensePage>} />
    </Routes>
  </BrowserRouter>
    
  )
}

export default App;