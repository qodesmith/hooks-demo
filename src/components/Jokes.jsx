import React, { useState } from 'react'
import useGetJoke from 'hooks/useGetJoke'
import { colorify } from 'helpers'


const Jokes = () => {
  const [reloadCount, setReloadCount] = useState(0)
  const [error, joke] = useGetJoke([reloadCount])

  return (
    <div className="tc pa3">
      <h1 className="react-hooks">{colorify('React Hooks!')}</h1>
      <button
        className="mt2 mb5 bomb"
        disabled={!error && !joke}
        onClick={() => setReloadCount(s => s + 1)}
      >
        New Joke
      </button>
      {
        error
          ? <div>Oops!</div>
          : <div>{joke || 'LOADING...'}</div>
      }
    </div>
  )
}

export default Jokes
