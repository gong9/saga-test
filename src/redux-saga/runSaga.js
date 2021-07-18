import {
  immediately
} from './scheduler'
import proc from './proc'

/**
 * run saga
 * @param {*} param0 
 * @param {*} saga 
 */

const runSaga = (env, saga) => {

  let it = typeof saga === 'function' ? saga() : saga

  return immediately(() => {
    const task = proc(env, it)
    return task
  })

}

export default runSaga