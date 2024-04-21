import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./pages/IndexPage"
import Favorite from "./pages/Favorite"
import Layout from "./layout/Layout"

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<IndexPage/>} index/>
            <Route path="/favorite" element={<Favorite/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
