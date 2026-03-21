import React from 'react'

const ProfilePicture = () => {

    const imageUrl = './src/assets/react.svg'

    const handleClick = (e)=> e.target.style.display = "none"
  return (
    <div>
      <img onClick={(e) => handleClick(e)} src={imageUrl} alt="" />
    </div>
  )
}

export default ProfilePicture
