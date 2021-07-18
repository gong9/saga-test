const proc = (env, it) => {

  const {
    getState,
    dispatch,
    channel
  } = env

  const next = (value, isError) => {
    let result
    result = it.next(value)
    let {
      value: effect,
      done
    } = result

    if (!done) {
      switch (effect.type) {
        case 'take':
          channel.take(next)
          break;
        case 'put':
          console.log(effect);
          dispatch(effect.actionType);
          next()
          break;
        default:
          break;
      }
    }else{
      return
    }
  }

  next()
}

export default proc