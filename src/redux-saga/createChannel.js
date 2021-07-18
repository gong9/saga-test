/**
 * 其实就是一个发布订阅
 * @returns {take,put}
 */
const channel = () => {
  let takers = []

  /**控制co的执行 */
  const take = (taker) => {
    taker.cancel = () => {
      takers = takers.filter(item => item !== taker);
    }
    takers.push(taker)

  }

  /**当页面有action过来 */
  const put = (action) => {
    takers.forEach(taker => {
      taker.cancel();
      taker(action)
    })
  }

  return {
    take,
    put
  }
}

export default channel