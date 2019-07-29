import { useState } from 'react'

const useMergeState = (initialState = {}) => {
  const [state, setState] = useState(initialState)
  const mergeState = thing => {
    if (typeof thing === 'function') {
      setState(s => ({ ...s, ...thing(s) }))
    } else {
      setState(s => ({ ...s, ...thing }))
    }
  }

  return [state, mergeState]
}

export default useMergeState
