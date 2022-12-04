import type { FC } from 'react'
import theme from '../../styles/theme'

interface LupeProps {
  size?: number | string
  fill?: string
  stroke?: string
}

const Lupe: FC<LupeProps> = ({ size = '30px', fill = theme.white, stroke = 'none' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6_174)">
        <path d="M30.1219 27.8512L21.5144 19.2376C23.2113 17.2026 24.2319 14.6019 24.2319 11.7615C24.2319 5.28128 18.9138 0.0122986 12.3721 0.0122986C5.83046 0.0122986 0.5 5.28743 0.5 11.7676C0.5 18.2478 5.81817 23.5168 12.3598 23.5168C15.1388 23.5168 17.6964 22.5638 19.7253 20.9714L28.3635 29.6096C28.8677 30.1137 29.6177 30.1137 30.1219 29.6096C30.626 29.1054 30.626 28.3554 30.1219 27.8512ZM3.02075 11.7676C3.02075 6.67692 7.2138 2.5392 12.3598 2.5392C17.5058 2.5392 21.6989 6.67692 21.6989 11.7676C21.6989 16.8583 17.5058 20.996 12.3598 20.996C7.2138 20.996 3.02075 16.8521 3.02075 11.7676Z" fill={fill} stroke={stroke}/>
      </g>
      <defs>
        <clipPath id="clip0_6_174">
          <rect width="30" height="30" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Lupe
