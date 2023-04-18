import { ofType } from 'redux-observable'
import { map, filter, debounceTime } from 'rxjs'

import { changeSearchField } from '../slices/searchSlice'
import { searchResult } from '../slices/searchSlice'

export const changeSearchEpic = (action$) =>
  action$.pipe(
    ofType(changeSearchField),
    map((o) => o.payload.trim().toLowerCase()),
    filter((o) => o !== ''),
    debounceTime(100),
    map((o) => searchResult(o))
  )
