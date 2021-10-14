const fn = (obj) => {
  return {
    ...obj,
    fnName: 'fn'
  }
}

const init = (options) => {
  fn({
    root: process.pwd(),
    ...options,
  })
}

export default init