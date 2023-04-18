import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loader from '../../common/Loader'
import Error from '../../common/Error'

import { getDetailsRequest } from '../../../app/slices/servicesSlice'

export default function ServiceDetail() {
  const {
    currentItem: detail,
    currentLoading: loading,
    error,
  } = useSelector((state) => state.services)
  const dispatch = useDispatch()
  const { id } = useParams()

  const getDetails = () => {
    dispatch(getDetailsRequest(id))
  }
  useEffect(() => {
    getDetails()
  }, [id])

  return (
    <>
      {error ? (
        <Error action={getDetails}></Error>
      ) : loading || !detail ? (
        <Loader />
      ) : (
        <div className='p-4 border-2 border-gray-100 rounded-md shadow-md flex-1'>
          <h2 className='text-xl font-bold mb-4'>{detail.name}</h2>
          <p className='mb-2'>{detail.content}</p>
          <p className='font-black text-2xl'>{detail.price}</p>
        </div>
      )}
    </>
  )
}
