import React from 'react'
import configDoc from '../docs/CreateSubsSync.json';
import ContentDoc from './ContentDoc';
export function Documentation() {
  const contentArr = configDoc.filter((item)=>item['type']==='content')
  const tableArr = configDoc.filter((item)=>item['type']==='table')
  const snippetArr = configDoc.filter((item)=>item['type']==='snippet')
  contentArr.map((item, index)=>{
    console.log(item['title'])
    // {item['description'].map((t, index)=>console.log(t))}
  })
  return (
    <div>
      <h1>{configDoc[0]['title']}</h1>
      {configDoc[0]['description'].map((item, index) => <p>{item}</p>)}
      <ContentDoc contentArr={contentArr}></ContentDoc>
      <ContentDoc contentArr={snippetArr}></ContentDoc>
      {/* {tableArr.map((item, index)=><table>
  <tr>
    {item['Cols'].map((c, x)=><th>{c}</th>)}
  </tr>
  <tr>
    {item['Rows'].map((r, x)=><td>{r}</td>)}
  </tr>
</table>)} */}
    </div>
  )
}
