import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-lg shadow-sky-900/20 bg-gray-200 text-gray-700 ">
      <h3 className="font-bold">Github Search</h3>
      <span>
        <Link to="/" className="mr-6">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </span>
    </nav>
  )
}

