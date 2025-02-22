import React, { useState } from 'react'

export default function Navbar() {
  const placeHolders=[
    'Search Watermelon',
    'Search Maggie',
    'Search Shoe',
    'Search Mango',
    'Search kurthi',
    'Search Bangles',
    'Search Oils',
    'Search Beauty Products'
  ]
  const [placeHolderIndex,setPlaceHolderIndex]=useState(0);
  setTimeout(()=>{
    setPlaceHolderIndex(placeHolderIndex=>((placeHolderIndex+1)%placeHolders.length))
  },4000)
  return (
    <>
    <div>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
    
      <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
          <ul className="p-2">
          <details>
          <summary>Electronic Appliances</summary>
          <ul className="p-2">
          <li><a>Home Appliances</a></li>
          <li><a>Devices</a></li>
          </ul>
        </details>
          </ul>
        </li>
        <li>
          <a>Camera</a>
        </li>
        <li>
          <a>Audio</a>
        </li>
          <ul className="p-2">
          <details>
          <summary>Women wear</summary>
          <ul className="p-2">
          <li><a>Ethnic wear</a></li>
            <li><a>Party Wear</a></li>
            <li><a>Western Wear</a></li>
            <li><a>Daily Wear</a></li>
            <li><a>Gym Wear</a></li>
            <li><a>Swim Suit</a></li>
            <li><a>Rain Coats</a></li>
            <li><a>Sweater</a></li>
            <li><a>Apron</a></li>
            <li><a>Gloves</a></li>
          </ul>
        </details>
          </ul>
          <ul className="p-2">
          <details>
          <summary>Men wear</summary>
          <ul className="p-2">
          <li><a>Ethnic wear</a></li>
            <li><a>Party Wear</a></li>
            <li><a>Western Wear</a></li>
            <li><a>Daily Wear</a></li>
            <li><a>Gym Wear</a></li>
            <li><a>Swim Suit</a></li>
            <li><a>Apron</a></li>
            <li><a>Gloves</a></li>
            <li><a>Rain Coats</a></li>
            <li><a>Sweater</a></li>
          </ul>
        </details>
          </ul>
          <ul className="p-2">
          <details>
          <summary>Kids wear</summary>
          <ul className="p-2">
          <li><a>Ethnic wear</a></li>
            <li><a>Party Wear</a></li>
            <li><a>Western Wear</a></li>
            <li><a>Daily Wear</a></li>
            <li><a>Swim Suits</a></li>
            <li><a>Rain Coats</a></li>
            <li><a>Sweater</a></li>
          </ul>
        </details>
          </ul>  
          <a> Women - Footwear</a>
          <ul className="p-2">
          </ul>
          <a> Men - Footwear</a>
          <ul className="p-2">
          </ul>
          <a>Kids - FootWear</a>
          <ul className="p-2">
          </ul>
          <a>Bags</a>
          <ul className="p-2">
          </ul>
          <details>
          <summary>Beauty Products</summary>
          <ul className="p-2">
          <li><a>Men</a></li>
            <li><a>Women</a></li>
          </ul>
        </details>
          <a>Kitchen Essentials</a>
          <ul className="p-2">
          </ul>
          <a>Home Essentials</a>
          <ul className="p-2">
          </ul>
          <a>Cleaning and Toiletry</a>
          <ul className="p-2">
          </ul>
          <a>Toys</a>
          <ul className="p-2">
          </ul>
          <a>Jewelry</a>
          <ul className="p-2">
          </ul>
          <a>Candies</a>
          <ul className="p-2">
          </ul>
          <a>Perfumes</a>
          <ul className="p-2">
          </ul>
          <details>
          <summary>Grocery</summary>
          <ul className="p-2">
          <li><a>Instant Noodles</a></li>
            <li><a>Drinks</a></li>
            <li><a>Flour</a></li>
            <li><a>Pulses</a></li>
            <li><a>Rice</a></li>
            <li><a>Veggies</a></li>
            <li><a>Fruits</a></li>
            <li><a>Spices</a></li>
            <li><a>Instant Pasta</a></li>
            <li><a>Ketchup</a></li>
            <li><a>Sanitary Napkins</a></li>
            <li><a>Diapers</a></li>
            <li><a>Dairy</a></li>
          </ul>
        </details>
      </ul>
    </div>
    <div className="navbar-center hiddem lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
        <a>Main Menu</a>
      </li>
    </ul>
  </div>
    <a className="text-2xl font-bold cursor-pointer">SHOPIFY</a>
    <div className="w-4 h-4 opacity-70">      </div>
    <hr />
    <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow w-96" placeholder={placeHolders[placeHolderIndex]} id="search-input" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
  </div>
  <div className="navbar-center hiddem lg:flex">
  </div>
  <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" />
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ml-4">
      <li><a>Home</a></li>
      <li>
      <a>About</a></li>
      <li><a>Bag \_/</a></li>
      <li><a className=" bg-black text-white p-2 rounded-md hover:bg-slate-800 duration-300">Login</a>
      </li>
    </ul>
  </div>
  
</div>
    </div>
    </>
  )
}
