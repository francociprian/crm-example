import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewUserForm from './pages/NewUserForm';
import EditUserForm from './pages/EditUserForm';
import Products from './pages/Products';

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />}/>
            <Route path='/user/new' element={<NewUserForm />}/>
            <Route path='/user/:id/edit' element={<EditUserForm />} />
            <Route path='/products' element={<Products /> } />
            <Route path='*' element='404 - Not Found' />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
