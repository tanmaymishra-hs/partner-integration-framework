import React from 'react'

export default function About(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <ul>
            {props.listItems.map(t => (
                <li>{t}</li>
            ))}
        </ul>
    </div>
  )
}
