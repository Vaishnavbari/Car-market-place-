// components/home.jsx
import {React }from 'react';
import Navbar from './home/navbar';
import Herosection from './home/Herosection';
import { Category } from './Category/Category';

export function Home() {
  return(
  <div className='w-full h-screen '>
      <Navbar/>
      <Herosection/>
      <Category/>
  </div>
  )
}
