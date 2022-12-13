import React from 'react'

export default function Table({entry}) {
    if(entry['type'] === 'title') return (<></>)
  else return (
    <>
    <h2 className='docHeading'>{entry['heading']}</h2>
    <table>
        <tr>{entry['Cols'].map((item, index)=><th>{item}</th>)}</tr>
        {entry['Rows'].map((item, index)=><tr>{Object.keys(item).map((t, idx)=><td>{item[t]}</td>)}</tr>)}
    </table>
    </>
  )
}
