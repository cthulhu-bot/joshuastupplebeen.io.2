import { useState } from 'react'

export function TopLeftArch() {
  const [ hover, setHover ] = useState(false)
  let topLeftArch = {
    a: ["M 110 600 C 110 610, 110 610, 250 610","M 100 620 C 100 630, 100 630, 250 630"
    ],
    b: ["M 250 610 C 270 610, 270 610, 270 600","M 250 630 C 290 630, 290 630, 290 600"
    ],
    c: ["M 270 600 A 200 200 0 0 1 440 400","M 290 600 A 180 180 0 0 1 440 420"
    ],
    d: ["M 440 400 C 450 400, 450 400, 450 300","M 440 420 C 470 420, 470 420, 470 300"
    ],
    e: ["M 450 300 C 450 250, 450 250, 440 250","M 470 300 C 470 230, 470 230, 440 230"
    ],
    f: ["M 440 250 A 400 400 0 0 0 110 600","M 440 230 A 400 400 0 0 0 100 620"
    ]
  }

  return (
    <>
      <path onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} d={hover ? topLeftArch.a[1] : topLeftArch.a[0]} stroke="white" fill="white"/>
      <path onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} d={hover ? topLeftArch.b[1] : topLeftArch.b[0]} stroke="white" fill="white"/>
      <path d={hover ? topLeftArch.c[1] : topLeftArch.c[0]} stroke="white" fill="black"/>
      <path onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} d={hover ? topLeftArch.d[1] : topLeftArch.d[0]} stroke="white" fill="white" />
      <path onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} d={hover ? topLeftArch.e[1] : topLeftArch.e[0]} stroke="white" fill="white" />
      <path onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} d={hover ? topLeftArch.f[1] : topLeftArch.f[0]} stroke="white" fill="white" />
    </>
  )
}
