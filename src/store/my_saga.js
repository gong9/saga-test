import {
  take,
  put
} from '../redux-saga/effect'

const fetchData = () => fetch('http://localhost:5001/demo').then(res => res.json())

function* demo() {
  while (true) {
    yield take('async_add')
    const data = yield fetchData()
    yield put({
      type: 'updata',
      payload:data.data
    })
  }
}

export default demo