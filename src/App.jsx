import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { Footer, Blog, Features, What, Header, Possibility } from './containers';
import { Cat, Brand, Navbar } from './components';




const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
       <div className="gradient__bg">
         <Navbar />
         <Header />
       </div>

       <Brand />
       <What /> 
       <Features />
       <Possibility />
       <Cat />
       <Blog />
       <Footer />
    </div>
  )
}

export default App
