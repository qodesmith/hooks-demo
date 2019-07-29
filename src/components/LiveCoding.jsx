import React from 'react'

/*
  1. useState to house our joke data.
  2. useEffect to make a fetch call for a joke:
    * https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw,religious,political
  3. Use jokeToJsx to massage the Joke styles.
  4. Highlight state changes:
    * Colorify the title.
    * Insert simluated delay in fetch call.
  5. Use button to re-fetch a joke.
    * [reloadCount, setReloadCount]
    * first show num change on button
    * add reload to useEffect dependencies
  6. Time for a custom hook!
    * const [reloadCount, setReloadCount] = useState(0)
    * const [error, joke] = useGetJoke([reloadCount])
  7. Reuse useGetJoke in `OtherPage` component.
*/


const LiveCoding = () => {
  return (
    <div className="tc pa3">
      <h1 className="react-hooks">React Hooks!</h1>
      <button className="mt2 mb5 bomb">New Joke</button>
    </div>
  )
}

export default LiveCoding
