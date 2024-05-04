import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"

const IndexPage =lazy(()=> import("./pages/IndexPage"))

const Favorite = lazy(()=> import('./pages/Favorite'))

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>

            <Route path="/" element={
              <Suspense fallback="Loading...">
                <IndexPage/>
              </Suspense>} 
            index/>

            <Route path="/favorite" element={
              <Suspense fallback="Loading...">
                <Favorite/>
              </Suspense>}
            />

          </Route>

        </Routes>
    </BrowserRouter>
  )
}
