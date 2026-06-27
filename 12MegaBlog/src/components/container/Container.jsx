import React from 'react'

function Container({children}) {
  return (
    //yaha parenthesis ka use isliye kiya gaya hai taki hum multiple lines me code likh sakein aur readability improve ho sake.....
    // but kuki abhi single line me code likha gaya hai to parenthesis ka use karna optional hai.....
    <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>
  )
}

export default Container