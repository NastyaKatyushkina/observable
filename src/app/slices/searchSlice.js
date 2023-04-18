import { createSlice } from '@reduxjs/toolkit'
import { users } from '../../data/users'

const initialState = {
  items: users,
  searchItems: [],
  search: '',
}

export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    changeSearchField(state, action) {
      state.search = action.payload
      if (state.search === '') state.searchItems = []
    },
    searchResult(state, action) {
      console.log(action.payload)
      state.searchItems = state.items.filter((i) =>
        i.name.toLowerCase().includes(action.payload)
      )
    },
  },
})

export default searchSlice.reducer
export const { changeSearchField, searchResult } = searchSlice.actions
