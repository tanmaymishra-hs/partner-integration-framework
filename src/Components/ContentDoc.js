import React from 'react'
export default function ContentDoc({item}) {
  return (
    <div>
      <h4 className="docHeading">{item['title']}</h4>{item['description'].map((t, idx)=><p className='docPara'>{t}</p>)}{'snippetInfo' in item && <pre className='docPre'>{typeof item['snippetInfo']==='object'?JSON.stringify(item['snippetInfo'], 'undefined', 4):item['snippetInfo']}</pre>}
      </div>
  )
}
