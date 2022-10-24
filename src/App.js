import { Routes, Route } from "react-router-dom"
import { Navbar } from "./component/Navbar"
import { Account } from "./page/Account"
import { Home } from "./page/Home"
import { Login } from "./page/Login"
import { Register } from "./page/Register"

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/account" element={ <Account /> } />
      </Routes>
      
      
    </div>
  )
}
