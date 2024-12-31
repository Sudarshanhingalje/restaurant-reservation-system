import "./App.css"
import "./style/success.css"
import "./style/contact.css"
import "./style/notfound.css"
import "./style/reservation.css"
import "./style/navbar.css"

import "./style/team.css"
import "./style/whoweare.css"
import "./style/menu.css"
import "./style/qualities.css"
import "./style/about.css"



import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast"
import Home from "../src/Pages/Home"
import Success from "../src/Pages/Success"
import NotFound from "../src/Pages/NotFound.jsx";
import ContactUs from "./Pages/contact.jsx"



const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/success" element={<Success/>}></Route>
      <Route path="*" element={<NotFound/>}></Route>
      <Route path="/contact" element={<ContactUs/>}></Route>
    
    </Routes>
    <Toaster/>
  </Router>
}

export default App