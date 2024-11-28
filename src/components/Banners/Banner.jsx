import classnames from 'classnames'
import {
  FaCircleCheck,
  FaTriangleExclamation,
  FaCircleXmark,
  FaCircleInfo,
} from 'react-icons/fa6'

export default function Banner({
  title,
  text,
  line,
  className,
  status,
}) {
  let bannerClass = `banner-${status}`
  let icon = ''
  if (status === 'success') {
    icon = <FaCircleCheck />
  } else if (status === 'warning') {
    icon = <FaTriangleExclamation />
  } else if (status === 'error') {
    icon = <FaCircleXmark />
  } else {
    icon = <FaCircleInfo />
  }
  //let variantClass = variant && `button-${variant}`
  const allClasses = classnames(className, bannerClass)
  console.log(allClasses)
  return (
    <div className={allClasses}>
      {icon}
      <div className='content'>
        <h1>{title}</h1>
        {line === 'multi' ? <p>{text}</p> : null}
      </div>
    </div>
  )
}
