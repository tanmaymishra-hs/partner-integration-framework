import React from 'react'

export default function SnippetDoc() {
  return (
    <div>
      <h4 className="docHeading snippetHeading">{item['title']}</h4>{item['description'].map((t, idx)=><p className='docPara snippetDesc'>{t}</p>)}{'snippetInfo' in item && <pre className='docPre'>{typeof item['snippetInfo']==='object'?JSON.stringify(item['snippetInfo'], 'undefined', 4):item['snippetInfo']}</pre>}
    </div>
  )
}
