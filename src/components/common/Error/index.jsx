import React from 'react'

export default function Error({ action }) {
  const handleClick = () => {
    action()
  }
  return (
    <div className='h-20 flex items-center gap-4 py-4 px-8 bg-red-400 border-2 border-red-600 rounded-md'>
      <p className='text-lg text-red-800'>Произошла ошибка!</p>
      <button
        className='p-4 text-lg bg-gray-600 hover:bg-gray-800 transition-colors text-white rounded-md'
        onClick={handleClick}
      >
        Повторить запрос
      </button>
    </div>
  )
}
