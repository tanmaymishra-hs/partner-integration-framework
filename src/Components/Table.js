import React from 'react'

export default function Table({entry}) {
  return (
    <table>
        <tr>{entry['Cols'].map((item, index)=><th>{item}</th>)}</tr>
        {entry['Rows'].map((item, index)=><tr>{Object.keys(item).map((t, idx)=><td>{item[t]}</td>)}</tr>)}
    </table>
  )
}
