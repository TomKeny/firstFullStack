import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Nav from './components/Nav';
import ViewTodo from './pages/ViewTodo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>My App</h1>
      <Nav />
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />
          <Route 
            path='/about'
            element={<About />}
          />
          <Route
            path='/:id'
            element={<ViewTodo />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
