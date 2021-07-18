import createChannel from './createChannel';
import runSaga from './runSaga';

const createSagaMiddleware=()=>{
  /**创建管道 */
  let channel = createChannel();
  let boundRunSaga;

  /**sagaMiddleware */
  const sagaMiddleware=({getState,dispatch})=>{
    /**目的是想在runSaga中拿到getState、dispatch */
    boundRunSaga = runSaga.bind(null,{getState,dispatch,channel})
    return (next)=>{
        return (action)=>{
          next(action)
          channel.put(action);
        }
    }
  }
  /**sagaMiddleware的run方法 */
  sagaMiddleware.run=(saga)=>boundRunSaga(saga)
  return sagaMiddleware
}

export default createSagaMiddleware