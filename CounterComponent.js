import React from 'react'
import useDummyCounter from './useDummyCounter'

const CounterComponent = () => {
  const { count, increment, decrement, reset } = useDummyCounter()

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterComponent