// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useCallback, useEffect, useRef, useState } from "react";

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const usernameInputRef = useRef(null)
  const [inputError, setInputError] = useState(false);

  const onTextChange = () => {
    const value = usernameInputRef.current?.value
    console.log("current" + value)
    setInputError(value.toLowerCase() !== value);
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmitUsername(usernameInputRef.current?.value);
    }}
          className="username-form">
      <div>
        <label>Username:</label>
        <input type="text" onChange={onTextChange} ref={usernameInputRef} />
        {inputError && <text style={{ color: "red" }}>Value is not valid. Please type lowercase letters only</text>}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
