// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// const smallBox = <div className='box box--small light--blue--background italic--font'>small lightblue box</div>;
// const mediumBox = <div className='box box--medium pink--background italic--font'>medium pink box</div>;
// const largeBox = <div className='box box--large orange--background italic--font'>large orange box</div>;

/* <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
  small lightblue box
</Box> */

function Box({className, style, size}) {
  var displayText = "";
  var sizeCss = size ? `box--${size}` : '';
  switch (size)
  {
    default:
    case "small":
      displayText = "small lightblue box";
      break;
    case "medium":
      displayText = "medium pink box";
      break;
    case "large":
      displayText = "large orange box";
      break;
  }

  return (
    <div
    className={`box ${sizeCss} ${className}`}
    style={{fontStyle: 'italic', ...style}}>
      {displayText}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box className="light--blue--background" style={{color: 'red'}} size="small"></Box>
      <Box className="pink--background" size="medium"></Box>
      <Box className="orange--background" size="large"></Box>
    </div>
  )
};

export default App
