import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './component/Header';
import "./style/App.scss"
import './style/header.scss'
import "./style/Home.scss"
import "./style/Footer.scss"
import "./style/contact.scss"
import Service from './component/Service';
import Footer from './component/Footer';
import Contact from "./component/Contact"

import Home from './component/Home';
import "./style/media.scss"

function App ()  {
  return (
<>
<BrowserRouter>
<Header/>
<Routes>
 
 <Route path='/' element={<Home/>}/>
 <Route path='/contact' element={<Contact/>}/>
 <Route path='/service' element={<Service/>}/>
</Routes>
<Footer/>
</BrowserRouter>
</>


  )
}
export default App
