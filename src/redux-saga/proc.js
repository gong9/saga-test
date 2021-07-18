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
          dispatch(effect.actionType);
          next()
          break;
        default:
          if(typeof effect.then==='function'){
            effect.then(res=>{
              if(res){
                next(res)
              }else{
                next()
              }
            })
          }
          break;
      }
    }else{
      return
    }
  }

  next()
}

export default proc