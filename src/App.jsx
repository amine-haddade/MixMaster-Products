import Navabare from './Components/Navabare'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About from './Components/About/About'
import LoginForm from './Components/login.jsx/LoginForm'
import Home from './Components/HomePages/Home'
import DetailProduct from './Components/HomePages/DetailProduct'
function App() {
 
  return (
    <div >
      <BrowserRouter>
        <Navabare/>
            <div className='main-content'>
          <Routes  >
              <Route path='/' element={<Home/>}></Route>
              <Route path='/About' element={<About/>}></Route>
              <Route path='productId/:id' element={<DetailProduct />} />
              <Route path='/Login' element={<LoginForm/>}></Route>
          </Routes>
            </div>
      </BrowserRouter>
      </div>
  )
}

export default App
