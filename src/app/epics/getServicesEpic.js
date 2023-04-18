import { ofType } from 'redux-observable'
import { switchMap, map, catchError, of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import {
  getServicesRequest,
  getServicesFailure,
  getServicesSuccess,
} from '../slices/servicesSlice'

export const getServicesEpic = (action$) =>
  action$.pipe(
    ofType(getServicesRequest),
    switchMap(() =>
      ajax.getJSON(process.env.REACT_APP_SERVICES_URL).pipe(
        map((o) => getServicesSuccess(o)),
        catchError((e) => of(getServicesFailure(e)))
      )
    )
  )
