import React from 'react'

interface StarProps {
  fillColor: string
}
const Star = ({ fillColor }: StarProps) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: '10px' }}
    >
      <path
        d="M10.7038 0L13.107 7.39617L20.8838 7.39617L14.5922 11.9673L16.9954 19.3634L10.7038 14.7923L4.41228 19.3634L6.81544 11.9673L0.523883 7.39617L8.30068 7.39617L10.7038 0Z"
        fill={fillColor ? fillColor : '#FF6200'}
      />
    </svg>
  )
}

export default Star
