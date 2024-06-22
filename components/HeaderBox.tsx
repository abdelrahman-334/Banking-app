import React from 'react'
interface HeaderProps {
  type?: "title" | "greeting",
  title:string,
  subtext:string,
  user?:string
}
const HeaderBox = ({ type = "title",title,subtext,user }:HeaderProps) => {
  return (
    <div className='header-box'>
      <h1 className='header-box-title'>
        {title}
        {type === 'greeting' && (
          <span className='text-bankGradient'>
            &nbsp;{user}
          </span>
      )}
      </h1>    
      <p className='text 14 lg:text-16font-normal text-gray-600'>{subtext}</p>  
    </div>
  )
}

export default HeaderBox
