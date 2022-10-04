import React from 'react'

export default function UList(props) {
  return (
    <ul>
        {props.listItems.map((t) => (
          <li key={t}>{t}</li>
        ))}
    </ul>
  )
}
