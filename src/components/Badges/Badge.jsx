import React from 'react'
import classnames from 'classnames'

export default function Badge({ children, color, shape }) {
  let colorClass = color && `button-${color}`
  let shapeClass = color && `button-${shape}`
  //let variantClass = variant && `button-${variant}`
  const allClasses = classnames(colorClass, shapeClass)

  return <button className={allClasses}>{children}</button>
}
