import './App.css'
import EmployeeComponent from './components/EmployeeComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import HeaderComponent from './components/HeaderComponent.jsx'
import ListEmployeeComponent from './components/ListEmployeeComponent.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>      
     <BrowserRouter>
      <HeaderComponent />
      <Routes>
        //http://localhost:3000
        <Route path='/' element= {<ListEmployeeComponent />}></Route>
        //http://localhost:3000/employees
        <Route path='/employees' element={<ListEmployeeComponent />}></Route>
        //http://localhost:3000/add-employee
        <Route path='/add-employee' element={<EmployeeComponent />}></Route>
        //http://localhost:3000/edit-employee
        <Route path='/edit-employee/:id' element={<EmployeeComponent />}></Route>
        //http://localhost:3000/delete-employee
        <Route path='/delete-employee/:id' element={<EmployeeComponent />}></Route>
      </Routes>
      
      <FooterComponent />
     </BrowserRouter>    
    </>
  )
}

export default App
