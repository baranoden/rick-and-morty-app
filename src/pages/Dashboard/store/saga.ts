import { all, takeEvery } from 'redux-saga/effects'
import { dashboardTypes } from './type'

function* getDataHandler({ payload }: any) {
  try {
  } catch (error) {
  } finally {
  }
}

export function* dashboardSaga() {
  yield all([takeEvery(dashboardTypes.GET_DATA, getDataHandler)])
}
