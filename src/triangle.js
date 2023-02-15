import { useState } from 'react'

export function Triangle() {
  const [ hover, setHover ] = useState(false)
  const points = {
    a: ["750,540 800,630 700,630","750,530 805,635 695,635"]
  }

  return (
      <polygon onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} points={hover ? points.a[1] : points.a[0]} stroke="black" fill="white">
        <animateTransform attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 750 585"
          to="360 750 585"
          dur="10s"
          repeatCount="infinite"
        />
      </polygon>
  )
}
