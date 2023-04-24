import React from 'react'

interface ImageProps {
  src: string
  alt: string
}

const Image: React.FC<ImageProps> = (props) => {
  return (
    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden mr-2">
      <img src={props.src} alt={props.alt} />
    </div>
  )
}

export default Image
