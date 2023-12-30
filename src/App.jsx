
import {Route,Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { Index } from './pages';
import Create from './pages/Create';
import { View } from './pages/View';
import { Store } from './store/store';

const App = () =>  {
  return (
      <Store>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='create' element={<Create />} />
            <Route path='view/:bookId' element={<View />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </Store>
  )
}

export default App;
