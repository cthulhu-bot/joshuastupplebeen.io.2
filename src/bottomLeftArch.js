export function BottomLeftArch() {
  let bottomLeftArch = {
    a: ["M 110 650 C 110 620, 110 620, 250 620","M 100 620 C 100 630, 100 630, 250 630"
    ],
    b: ["M 250 620 C 270 620, 270 620, 270 640","M 100 620 C 100 630, 100 630, 250 630"
    ],
    c: ["M 270 640 A 200 200 0 0 0 440 800", "M 100 620 C 100 630, 100 630, 250 630"
    ],
    d: ["M 440 800 C 460 800, 460 800, 460 860","M 100 620 C 100 630, 100 630, 250 630"
    ],
    e: ["M 460 860 C 460 960, 460 960, 440 960","M 100 620 C 100 630, 100 630, 250 630"
    ],
    f: ["M 440 960 A 400 400 0 0 0 400 955","M 100 620 C 100 630, 100 630, 250 630"
    ],
    g: ["M 400 955 C 398 950, 398 950 390 820","M 100 620 C 100 630, 100 630, 250 630"
    ],
    h: ["M 390 820 A 250 250 0 0 1 240 685","M 100 620 C 100 630, 100 630, 250 630"
    ],
    i: ["M 240 685 C 239 685 239 685 113 665","M 100 620 C 100 630, 100 630, 250 630"
    ],
    j: ["M 113 665 C 110 665 110 665 110 650","M 100 620 C 100 630, 100 630, 250 630"
    ],
  }

  return (
    <>
      <path d={bottomLeftArch.a[0]} stroke="white" fill="white" />
      <path d={bottomLeftArch.b[0]} stroke="white" fill="white" />
      <path d={bottomLeftArch.c[0]} stroke="white" fill="black" />
      <path d={bottomLeftArch.d[0]} stroke="white" fill="white" />
      <path d={bottomLeftArch.e[0]} stroke="white" fill="white" />
      <path d={bottomLeftArch.f[0]} stroke="white" fill="white" />
      <path d={bottomLeftArch.g[0]} stroke="white" fill="white" />
      <path d={bottomLeftArch.h[0]} stroke="white" fill="white" />
      <path d={bottomLeftArch.i[0]} stroke="white" fill="white" />
      <path d={bottomLeftArch.j[0]} stroke="white" fill="white" />
    </>
  )
}
