import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import SearchInput from './components/search/SearchInput'
import SearchItems from './components/search/SearchItems'
import ServicesItems from './components/services/ServicesItems'
import ServiceDetail from './components/services/ServiceDetail'

import { getServicesRequest } from './app/slices/servicesSlice'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getServicesRequest())
  }, [dispatch])
  return (
    <div className='container max-w-[991px] mx-auto px-4 py-10'>
      <h2 className='py-5 text-3xl text-center font-bold'>Поиск</h2>
      <hr />
      <div className='py-4'>
        <SearchInput></SearchInput>
        <SearchItems></SearchItems>
      </div>

      <h2 className='py-5 text-3xl text-center font-bold'>Список и детали</h2>
      <hr />
      <div className='py-4 flex item-center'>
        <Routes>
          <Route
            path='/'
            element={
              <div className='flex gap-40 w-full'>
                <ServicesItems />
                <Outlet />
              </div>
            }
          >
            <Route path='/:id/details' element={<ServiceDetail />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
