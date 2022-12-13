import React from 'react'
import configDoc from '../docs/CreateSubsSync.json';
import ContentDoc from './ContentDoc';
import Table from './Table';
export function Documentation() {
  return (
    <div>
      <h2>{configDoc[0]['title']}</h2>
      {configDoc[0]['description'].map((item, index) => <p>{item}</p>)}

      {/* {configDoc.map((t, idx)=>(t['type']==='content' || t['type']==='snippet')?<ContentDoc item={t}></ContentDoc>:<Table entry={t}></Table>)} */}
      {configDoc.map((t, idx)=>(t['type']==='content')?<ContentDoc item={t}></ContentDoc>:(t['type']==='snippet')?<ContentDoc item={t}></ContentDoc>:<Table entry={t}></Table>)}

    </div>
  )
}
