import React from 'react'
import {Box, Card, CardContent} from '@mui/material'
export default function ContentDoc({contentArr}) {
  return (
    <>
    {contentArr.length !== 0 && <Box width='100%' className='boxClass transparent'>
      <Card className='boxClass' style={{"backgroundColor":"inherit"}}>
      <CardContent className='boxClass' style={{"padding":"50px"}}>
      {contentArr.map((item, index)=><><h2>{item['title']}</h2>{item['description'].map((t, idx)=><p>{t}</p>)}{'snippetInfo' in item && <pre>{typeof item['snippetInfo']==='object'?JSON.stringify(item['snippetInfo'], 'undefined', 4):item['snippetInfo']}</pre>}</>)}
      </CardContent>
      </Card>
      </Box>}
      </>
  )
}
