import React, { useContext } from 'react'
import useCounter from './useCounter'

const Calc = () => {
    const {counter, increase} = useCounter()

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

export default Calc
