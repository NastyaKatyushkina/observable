import React from 'react'
import { useSelector } from 'react-redux'

export default function SearchItems() {
  const { searchItems } = useSelector((state) => state.users)

  if (!searchItems.length) return null
  return (
    <ul>
      {searchItems.map((i) => (
        <li
          className='p-4 my-2 border-2 border-gray-50 shadow-md text-xl text-center'
          key={i.id}
        >
          {i.name}
        </li>
      ))}
    </ul>
  )
}
