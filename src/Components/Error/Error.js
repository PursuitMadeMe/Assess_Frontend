import React from 'react'
import './Error.css'

function Error({error}) {
  console.log(`<Error/> Rendered! error=${error}`)
  return (
    <div className='Error'>
    There was an error: uh oh
    </div>
  )
}

export default Error