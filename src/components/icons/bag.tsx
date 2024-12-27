type IconProps = {
  className?: string
  fill?: string
  strokeWidth?: string
  stroke?: string
}

const Bag = ({ className, fill, strokeWidth, stroke }: IconProps) => {
  return (
    <svg
      className={className}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16.5 8V5.5C16.5 4.67157 15.8284 4 15 4H9C8.17157 4 7.5 4.67157 7.5 5.5V8'
        strokeWidth={strokeWidth}
        stroke={stroke}
      />
      <path
        d='M4.12595 9.7003C4.05795 8.78229 4.78443 8 5.70496 8H18.3365C19.2417 8 19.9626 8.75741 19.918 9.66143L19.4817 18.4948C19.4401 19.3378 18.7444 20 17.9003 20H6.35928C5.5302 20 4.84151 19.3604 4.78027 18.5336L4.12595 9.7003Z'
        fill={fill}
        strokeWidth={strokeWidth}
        stroke={stroke}
      />
    </svg>
  )
}

export default Bag
