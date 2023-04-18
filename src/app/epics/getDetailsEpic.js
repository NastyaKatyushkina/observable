import { ofType } from 'redux-observable'
import { switchMap, map, catchError, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import {
  getDetailsRequest,
  getDetailsFailure,
  getDetailsSuccess,
} from '../slices/servicesSlice'

export const getDetailsEpic = (action$) =>
  action$.pipe(
    ofType(getDetailsRequest),
    map((o) => o.payload),
    switchMap((o) =>
      ajax.getJSON(`${process.env.REACT_APP_SERVICES_URL}/${o}`).pipe(
        map((o) => getDetailsSuccess(o)),
        catchError((e) => of(getDetailsFailure(e)))
      )
    )
  )
