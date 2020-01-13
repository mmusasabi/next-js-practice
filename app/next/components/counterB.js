import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const useCounter = () => {
  const count = useSelector(state => state.counterB.count)
  const dispatch = useDispatch()
  const increment = () =>
    dispatch({
      type: 'INCREMENT_B',
    })
  const decrement = () =>
    dispatch({
      type: 'DECREMENT_B',
    })
  const reset = () =>
    dispatch({
      type: 'RESET_B',
    })
  return { count, increment, decrement, reset }
}

export default () => {
  const { count, increment, decrement, reset } = useCounter()
  return (
    <div>
      <h1>
        CountB: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
