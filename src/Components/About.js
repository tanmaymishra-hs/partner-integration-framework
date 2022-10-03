import React from 'react'
import { Link } from 'react-router-dom'

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
        <Link to="/">Back to Home</Link>
    </div>
  )
}
