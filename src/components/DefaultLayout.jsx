import React from 'react'
import Header from './Header'
const DefaultLayout = (props) => {
  return (
    <div>
        <Header/>
        <div className="content flex-grow mt-6 p-5 md:mx-[4vh] lg:mx-[7vh] xl:mx-[45vh] 2xl:mx-[45vh] border-2 h-[90vh] rounded-lg">
            {props.children}
        </div>
    </div>
  )
}

export default DefaultLayout