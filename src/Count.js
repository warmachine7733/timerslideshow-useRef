import React from 'react'

function Count({value, text}) {
    console.log(`${text} is rendering`)
  return (
    <div>{value}</div>
  )
}

export default React.memo(Count)