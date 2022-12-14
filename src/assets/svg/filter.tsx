import type { FC } from 'react'
import theme from '../../styles/theme'
interface FilterProps {
  stroke?: string
  fill?: string
}
const Filter: FC<FilterProps> = ({ fill = theme.white, stroke = theme.darkBlue }) => {
  return (
    <svg width="31" height="30" viewBox="0 0 31 30" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6_124)">
        <path fillRule="evenodd" clipRule="evenodd" d="M29.3083 0H1.6917C1.14116 0 0.69471 0.446452 0.69471 0.996989V5.93518C0.69471 6.48571 1.14116 6.93216 1.6917 6.93216H2.92517L12.0355 17.6395V29.003C12.0355 29.3707 12.2378 29.7085 12.562 29.882C12.7094 29.9609 12.8711 30 13.0323 30C13.2258 30 13.4187 29.9438 13.5855 29.8325L18.5206 26.5424C18.7979 26.3576 18.9645 26.0462 18.9645 25.7129V17.6395L28.0748 6.93216H29.3083C29.8588 6.93216 30.3053 6.48571 30.3053 5.93518V0.996989C30.3053 0.446452 29.8589 0 29.3083 0ZM16.9706 17.2728C16.9706 17.0361 17.0548 16.8071 17.2082 16.6268L25.4567 6.93216H15.5H5.5L13.7918 16.6268C13.9452 16.807 14.0294 17.0361 14.0294 17.2728V27.1401L16.9706 25.1795V17.2728ZM2.68869 4.93819H28.3113V1.99398H2.68869V4.93819Z" fill={fill} />
        <path d="M28.3113 4.93819H2.68869V1.99398H28.3113V4.93819Z" fill={stroke}/>
        <path d="M17.2082 16.6268C17.0548 16.8071 16.9706 17.0361 16.9706 17.2728V25.1795L14.0294 27.1401V17.2728C14.0294 17.0361 13.9452 16.807 13.7918 16.6268L5.5 6.93216H15.5H25.4567L17.2082 16.6268Z" fill={stroke} />
      </g>
      <defs>
        <clipPath id="clip0_6_124">
          <rect width="30" height="30" fill={fill} transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Filter
