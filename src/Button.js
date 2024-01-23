import React from 'react'

function Button({handleClick, children, className}) {

    // console.log(`${children} button is rendering`)
  return (
    <>
    <button className={className} onClick={handleClick}>{children}</button>
    </>
  )
}

export default React.memo(Button)