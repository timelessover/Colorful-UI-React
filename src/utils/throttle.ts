/* 函数节流 */
const throttle = (fn: any, wait: number) => {
    let inThrottle, lastFn, lastTime
    return function() {
      const context = this,
        args = arguments
      if (!inThrottle) {
        fn.apply(context, args)
        lastTime = Date.now()
        inThrottle = true
      } else {
        clearTimeout(lastFn)
        lastFn = setTimeout(function() {
          if (wait - (Date.now() - lastTime) <= 0) {
            fn.apply(context, args)
            lastTime = Date.now()
          }
        }, Math.max(wait - (Date.now() - lastTime), 0))
      }
    }
  }

export default throttle