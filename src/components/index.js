import React from 'react'
import MainLeft from './mainLeft'
import MainRight from './mainRight'

function Index() {
  return (
     <div className="App">
       <div className="App__main">
         <MainLeft/>
         <MainRight/>
       </div>
     </div>
  )
}

export default Index