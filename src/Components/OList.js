import React from 'react'

function OList(props) {
  return (
    <ol>
        {props.listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </ol>
  )
}

export default OList;