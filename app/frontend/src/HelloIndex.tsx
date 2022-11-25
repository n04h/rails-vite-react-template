import { useState } from 'react'

export function HelloIndex () {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Count up</button>
    </>
  )
}
