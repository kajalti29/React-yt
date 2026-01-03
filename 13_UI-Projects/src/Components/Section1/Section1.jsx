import React from 'react'
import Navbar from './Navbar'
import Page1Context from './Page1Content'

const Section1 = (props) => {
 console.log();
  return (
    <div>
      <Navbar />
      <Page1Context users={props.users} />
    </div>
  )
}

export default Section1
