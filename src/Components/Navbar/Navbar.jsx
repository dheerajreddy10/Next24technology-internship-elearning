import React, { useEffect, useState } from 'react'
import { navLinks } from '../../Data'
import { HiMenuAlt1, HiX } from "react-icons/hi"
import NavLink from './NavLink'
import MobileNavLinks from './MobileNavLinks'

export default function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  const [active,setActive]= useState(null);
  useEffect(() =>{
    const scrollActive=()=>{setActive(window.scrollY>20);}
    window.addEventListener("scroll",scrollActive);
return ()=> window.addEventListener('scroll',scrollActive)},[active])
  return (
    <div className={`${active ? "shadow-lg bg-Solitude":""} fixed w-full top-0 left-0 z-20`}>
      <div>
        <div className='container py-4 mx-auto flex items-center justify-between px-2'>
          <div className='flex items-center gap-4'>
            <HiMenuAlt1 className='text-3xl sm:hidden cursor-pointer' onClick={() => setToggle(true)} />
            <div className='text-xl text-Teal uppercase tracking-wide font-bold'>SkillSync</div>
          </div>
          <div className='sm:flex items-center hidden'>
            {navLinks.map(navLink => {
              return <NavLink key={navLink.id}{...navLink} />;
            })}
          </div>
          
          <button className='py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray'><a href='/signup'>Sign Up</a></button>
          
          {toggle && (<div className='fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8 '>
            {navLinks.map(navLink => {
              return <MobileNavLinks key={navLink.id}{...navLink} setToggle={setToggle}/>
              
            })}
            <HiX className='absolute right-12 top-12 text-3xl cursor-pointer' onClick={(prev)=>setToggle(!prev)}/>
          </div>)}
        </div>
      </div>
    </div>
  )
}
