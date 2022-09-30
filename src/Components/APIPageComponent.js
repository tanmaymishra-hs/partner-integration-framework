import React from 'react'

export default function APIPageComponent(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <iframe src={props.iframelink}></iframe>
    </div>
  )
}
