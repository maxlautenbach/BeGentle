import * as React from 'react'

function SvgComponent(props) {
  const stars = props.children
  var star1 = '#c8b7b7'
  var star2 = '#c8b7b7'
  var star3 = '#c8b7b7'
  var star4 = '#c8b7b7'
  var star5 = '#c8b7b7'
  if (stars == 1) {
    star1 = '#ce9999'
  } else if (stars == 2) {
    star1 = '#ce9999'
    star2 = '#ce9999'
  } else if (stars == 3) {
    star1 = '#ce9999'
    star2 = '#ce9999'
    star3 = '#ce9999'
  } else if (stars == 4) {
    star1 = '#ce9999'
    star2 = '#ce9999'
    star3 = '#ce9999'
    star4 = '#ce9999'
  } else if (stars == 5) {
    star1 = '#ce9999'
    star2 = '#ce9999'
    star3 = '#ce9999'
    star4 = '#ce9999'
    star5 = '#ce9999'
  }
  return (
    <svg
      viewBox="0 0 150.18929 150.18308"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M77.156.023l-.22 25.007c21.35.759 39.156 14.66 45.634 33.928l23.79-7.5C136.614 22.253 109.342.9 77.156.024zM114.68 16.51l2.138 6.364 6.951.371-5.392 4 1.795 6.726-5.47-3.893-5.842 3.786 2.011-6.405-5.406-4.386 6.714-.067z"
        color="#000"
        fill={star1}
        fillOpacity={1}
        stroke="none"
        strokeOpacity={1}
      />
      <path
        d="M147.138 53.94l-23.805 7.503a50.682 50.682 0 011.856 13.644c0 16.42-7.765 30.909-19.848 40.026l14.436 20.243c18.427-13.714 30.412-35.65 30.412-60.269a74.58 74.58 0 00-3.051-21.147zm-12.699 32.248l2.138 6.364 6.952.371-5.393 4 1.796 6.726-5.47-3.892-5.842 3.786 2.01-6.406-5.405-4.386 6.714-.067z"
        color="#000"
        fill={star2}
        fillOpacity={1}
        stroke="none"
        strokeOpacity={1}
      />
      <path
        d="M46.588 116.367l-14.796 19.992c12.255 8.699 27.206 13.824 43.304 13.824 15.779 0 30.452-4.927 42.569-13.314l-14.437-20.244c-8.002 5.408-17.676 8.558-28.132 8.558-10.62 0-20.433-3.252-28.508-8.816zm29.01 12.257l2.137 6.365 6.952.37-5.393 4 1.796 6.727-5.47-3.893-5.843 3.786 2.012-6.406-5.406-4.385 6.713-.067z"
        color="#000"
        fill={star3}
        fillOpacity={1}
        stroke="none"
        strokeOpacity={1}
      />
      <path
        d="M3.421 52.71A74.557 74.557 0 000 75.087c0 24.3 11.678 45.982 29.7 59.728l14.787-19.98C32.61 105.704 25 91.343 25 75.088c0-5.033.733-9.883 2.092-14.454zm12.46 31.398l2.138 6.364 6.951.371-5.392 4 1.795 6.726-5.47-3.892-5.842 3.786 2.011-6.406-5.406-4.386 6.714-.067z"
        color="#000"
        fill={star4}
        fillOpacity={1}
        stroke="none"
        strokeOpacity={1}
      />
      <path
        d="M74.556 0C42.16.231 14.496 21.207 4.248 50.246l23.65 7.915c6.811-19.174 24.907-32.843 46.438-33.158zM39.801 13.909l2.138 6.364 6.951.37-5.392 4.001 1.795 6.726-5.47-3.893-5.842 3.786 2.011-6.405-5.406-4.386 6.714-.067z"
        color="#000"
        fill={star5}
        fillOpacity={1}
        stroke="none"
        strokeOpacity={1}
      />
      <path
        d="M39.939 188.461L5.512 162.24l35.577 24.64 14.3-40.846-12.44 41.45 43.265.978-43.265.978 12.44 41.45-14.3-40.845-35.577 24.64z"
        transform="translate(-30.461 -13.76)"
        opacity={1}
        fill="#ce9999"
        fillOpacity={0}
        stroke="none"
        strokeWidth={2.5}
        strokeDasharray="none"
        strokeOpacity={1}
      />
    </svg>
  )
}

export default SvgComponent
