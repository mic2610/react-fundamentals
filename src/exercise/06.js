// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  // const [error, setError] = React.useState(null);
  const [usernameInput, setUsernameInput] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    //const value = event.target.elements.usernameInput.value;
    //const value = textInput.current.value;
    onSubmitUsername(usernameInput);
  }

  function handleChange(event) {
    const value = event.target.value;
    const isValid = value === value.toLowerCase();
    // setError(isValid ? null : 'Username must be lower case');
    setUsernameInput(isValid ? value : value.toLowerCase());
  }

  const textInput = React.createRef();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={textInput} id="usernameInput" type="text" onChange={handleChange} value={usernameInput} />
      </div>
      {/* <div style={{ color: 'red' }}>{error}</div> */}
      {/* disabled={Boolean(error)} */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
