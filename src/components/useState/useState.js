import React from 'react'

const useState = () => {
    const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(c => c + 1)}>Count = {count}</button>
  )
}

export default useState