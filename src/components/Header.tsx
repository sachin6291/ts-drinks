import { useEffect, useMemo, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import SearchDrink from "./SearchDrink"
import { useAppStore } from "../stores/useAppStore"

const Header = () => {
    const [searchFilter, setSearchFilter] = useState()

    const {pathname}= useLocation()

    const isHome = useMemo(() => pathname === '/',[pathname])

    const{fetchCategories}=useAppStore()
    
    useEffect(()=> {fetchCategories()},[])

  return (
    <header className={isHome?"bg-header bg-center bg-cover": 'bg-slate-800'} >
        <div className=" mx-auto container px-5 py-16">
            <div className=" flex justify-between items-center">
                <div>
                    <img className=" w-32" src="/logo.svg" alt="logo" />
                </div>
                <nav className=" flex gap-4">
                    <NavLink
                     to="/" 
                     className={({isActive})=>
                        isActive?"text-orange-400 uppercase font-semibold"
                        :" text-white uppercase font-semibold"}
                    >Home</NavLink>
                    
                    
                    <NavLink 
                    to="/favorite"
                    className={({isActive})=>
                        isActive?"text-orange-400 uppercase font-semibold"
                        :" text-white uppercase font-semibold"}
                    >Favorite</NavLink>
                    
                </nav>
            </div>
            {isHome && (
                <SearchDrink/>
            )}
        </div>
    </header>
  )
}

export default Header