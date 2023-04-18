import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSearchField } from '../../../app/slices/searchSlice'

export default function SearchInput() {
  const { search } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  const handleChange = (evt) => {
    dispatch(changeSearchField(evt.target.value))
  }

  return (
    <>
      <input
        className='p-4 mx-auto block rounded-md w-96 border-2 border-gray-200 bg-cyan-50'
        type='text'
        value={search}
        onChange={handleChange}
      />
      {search.trim() === '' && (
        <h2 className='mt-10 text-2xl text-center font-bold'>
          Type something to search...
        </h2>
      )}
    </>
  )
}
