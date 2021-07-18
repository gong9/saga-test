import {
  take,
  put
} from '../redux-saga/effect'

function* demo() {
  while (true) {
    yield take('*')
    yield put({type:'add'})
  }
}

export default demo