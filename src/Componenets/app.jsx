import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Sign from './branch/sign'
import Create from './branch/create'

function App() {
 
  return (
    <div>
      <Routes>
        <Route path='/' element={<Sign/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
          
    </div>
  )
}

export default App