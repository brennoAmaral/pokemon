;import type { FC } from 'react';

const Star: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.9207 10.4867L21.3802 9.15001L17.1574 0.667339C16.6329 -0.322306 15.1903 -0.116665 14.8428 0.667339L10.62 9.15001L1.0729 10.4867C-0.00245774 10.5509 -0.343426 11.8298 0.390967 12.6202L7.2759 19.2328L5.63663 28.5188C5.44648 29.6626 6.73167 30.3053 7.47917 29.8554L15.9968 25.447L24.5145 29.7912C25.4062 30.241 26.4685 29.6112 26.357 28.5252L24.7177 19.2328L31.6027 12.6202C32.4354 11.7526 31.8387 10.5959 30.9207 10.4867ZM22.4687 17.8319C22.1933 18.1661 22.0621 18.5645 22.1277 18.9693L23.4194 26.4495L16.6066 22.9086C16.1673 22.7287 15.7542 22.7287 15.3805 22.9086L8.56765 26.4495L9.8594 18.9693C9.92497 18.5002 9.79382 18.1018 9.51843 17.8319L4.00392 12.5559L11.6364 11.4892C12.0429 11.4249 12.3839 11.2193 12.5937 10.8208L16.0034 4.07326L19.4131 10.8208C19.6163 11.155 19.9573 11.4249 20.3704 11.4892L27.9897 12.5559L22.4687 17.8319Z" fill="white" />
    </svg>
  );
};

export default Star;