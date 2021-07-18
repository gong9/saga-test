import {
  createStore,
  applyMiddleware
} from 'redux'
import createSagaMiddleware from '../redux-saga'

// import { rootSaga } from './sagas'
import demo from './my_saga'

const reducer = (state = {
  number: 1,
  data: ''
}, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        number: state.number + 1
      }
      case 'updata':
        return {
          ...state,
          data: action.payload
        }
        default:
          return state
  }
}


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)


sagaMiddleware.run(demo)

export default store