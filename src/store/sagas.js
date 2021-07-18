
import { call, take, select, put, takeEvery, all } from 'redux-saga/effects'

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


// Our watcher Saga: 在每个 async_add action spawn 一个新的 incrementAsync 任务
export function* watchIncrementAsync() {
  yield takeEvery('async_add', incrementAsync)
}

// watch saga log  
function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select((state)=>state.number)

    console.log('action', action)
    console.log('state after', state)
  })
}


// use task log
function* watchAndLog2() {
  console.log(11);
  while (true) {
    const action = yield take('*')
    const state = yield select((state)=>state.number)


    console.log('action', action)
    console.log('state after', state)
  }
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export  function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    // watchAndLog(),
    // watchAndLog2()
  ])
}
