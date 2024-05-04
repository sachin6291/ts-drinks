import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from "./pages/IndexPage"
import Layout from "./layout/Layout"


const Favorite = lazy(()=> import('./pages/Favorite'))

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<IndexPage/>} index/>
            <Route path="/favorite" element={
              <Suspense fallback="Loading...">
                <Favorite/>
              </Suspense> }/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}
