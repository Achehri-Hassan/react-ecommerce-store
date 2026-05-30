


import Home from './pages/Home'
import Auth from './pages/auth'
import Checkout from './pages/Checkout'
import './App.css'


function App() {
    
     return(
       <div className='app'>
          
           {/* <Routes>

              <Route path="/" />
              <Route path="/auth" />
              <Route path="/checkout" />
           </Routes> */}

          <Home/>
          <Auth/>
          <Checkout/>
           
       </div>
     )
}

export default App
