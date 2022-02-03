// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // function handleChange(event) {
  //   this.setState({value: event.target.elements[0].value});
  // }

  function handleSubmit(event) {
    event.preventDefault();
    //const value = event.target.elements.usernameInput.value;
    const value = textInput.current.value;
    onSubmitUsername(value);
  }

  const textInput = React.createRef();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={textInput} id="usernameInput" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);

  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
