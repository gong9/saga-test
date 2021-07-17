
import { call, put, takeEvery, all  } from 'redux-saga/effects'

const delay=()=>{
  return new Promise((res,rej)=>{
    setTimeout(()=>res(),1000)
  })
}

// Our worker Saga: 将执行异步的 increment 任务
export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'add' })
}


// Our watcher Saga: 在每个 INCREMENT_ASYNC action spawn 一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export  function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ])
}
