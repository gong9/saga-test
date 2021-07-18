import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '../redux-saga'

// import { rootSaga } from './sagas'
import demo from './my_saga'

const reducer = (state = {
  number: 1
}, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        number: state.number + 1
      }
      default:
        return state
  }
}


const sagaMiddleware= createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)


sagaMiddleware.run(demo)

export default store