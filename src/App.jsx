
import { Route, Routes } from "react-router-dom"
import IndexPage from "./pages/IndexPage"
import LoginPage from "./pages/LoginPage"
import Layout from "./components/Layout"
import RegisterPage from "./pages/RegisterPage"
import axios from 'axios'
import { UserContextProvider } from "./UserContext"
import Accountpage from "./pages/AccountPage"

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials =true
function App() {

  return (
    <UserContextProvider>
    <Routes >
      <Route path="/" element={<Layout />} >

        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account/:subpage?" element={<Accountpage />} />
        <Route path="/account/:subpage/:action" element={<Accountpage />} />

        {/* <Route path="/account/bookings" element={<Accountpage />} />
        <Route path="/account/places" element={<Accountpage />} /> */}

      </Route>

    </Routes>
</UserContextProvider>

  )
}

export default App
