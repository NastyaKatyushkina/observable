import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Loader from '../../common/Loader'
import Error from '../../common/Error'

import { getServicesRequest } from '../../../app/slices/servicesSlice'

export default function ServicesItems() {
  const {
    items,
    allLoading: loading,
    error,
  } = useSelector((state) => state.services)
  const dispatch = useDispatch()

  const getServices = () => {
    dispatch(getServicesRequest())
  }

  return (
    <>
      {loading && !items.length ? (
        <Loader />
      ) : (
        <nav className='flex flex-col gap-4 h'>
          {items.map((i) => (
            <NavLink
              className='text-lg font-medium p-4 border-2 bg-lime-200 hover:bg-lime-300 transition-colors rounded-md'
              to={`/${i.id}/details`}
              key={i.id}
            >
              {i.name}
            </NavLink>
          ))}
        </nav>
      )}
      {!items.length && error && <Error action={getServices} />}
    </>
  )
}
