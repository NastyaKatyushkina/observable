import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './slices/searchSlice'
import servicesReduser from './slices/servicesSlice'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { changeSearchEpic } from './epics/changeSearchEpic'
import { getServicesEpic } from './epics/getServicesEpic'
import { getDetailsEpic } from './epics/getDetailsEpic'

const epic = combineEpics(changeSearchEpic, getServicesEpic, getDetailsEpic)
const epicMiddleware = createEpicMiddleware()

export const store = configureStore({
  reducer: { users: searchReducer, services: servicesReduser },
  middleware: [epicMiddleware],
})

epicMiddleware.run(epic)
