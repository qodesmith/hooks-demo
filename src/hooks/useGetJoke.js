import React, { useState, useEffect } from 'react'


const wackIds = [57, 47, 53, 19, 17, 8, 9]

function useGetJoke(dependencies = []) {
  const [state, setState] = useState({ joke: null, error: false })
  const [reload, setReload] = useState(0)
  const { joke, error } = state

  useEffect(() => {
    let cancelled = false
    setState(s => ({ ...s, joke: null, error: false }))

    fetch('https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw,religious,political')
      .then(res => res.json())
      // .then(res => new Promise(resolve => setTimeout(() => resolve(res), 3000)))
      .then(({ id, type, joke, setup, delivery }) => {
        if (cancelled) return

        const content = type === 'twopart' ? `${setup}\n${delivery}` : joke

        if (wackIds.includes(id)) return setReload(s => s + 1)

        wackIds.includes(id)
          ? setReload(s => s + 1)
          : setState(s => ({ ...s, joke: jokeToJsx(content), error: false }))
      })
      .catch(() => !cancelled && setState(s => ({ ...s, error: true })))

    return () => { cancelled = true }
  }, [...dependencies, reload])

  return [error, joke]
}

/*
  Helper function that massages the response from the Joke API
  into nice formatting that we can pleasantly read on the screen.
*/
function jokeToJsx(text) {
  return text
    .split('\n')
    .map((thing, i) => thing.trim() ? <div className="mb2" key={i}>{thing}</div> : <br key={i} />)
}

export default useGetJoke
