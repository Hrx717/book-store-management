import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/books/create' element={<CreateBook/>} />
        <Route path='/books/delete/:id' element={<DeleteBook/>} />
        <Route path='/books/edit/:id' element={<EditBook/>} />
        <Route path='/books/details/:id' element={<ShowBook/>} />
      </Routes>
    </Router>
  )
}

export default App
