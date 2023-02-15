export function BottomArch() {
  let bottomArch = {
    a: ["M 475 805 C 475 800, 475 800, 480 800"],
    b: ["M 480 800 A 200 200 0 0 0 480 400"],
    c: ["M 480 955 A 205 205 0 0 0 480 250"],
    z: ["M 480 1000 A 400 400 0 0 0 475 200"],
  }

  return (
    <>
      <path d={bottomArch.c[0]} stroke="black" fill="white" />
      <path d={bottomArch.b[0]} stroke="black" fill="black" />
      <circle cx="750" cy="600" r="120" stroke="white" fill="white" />
      <circle cx="750" cy="600" r="110" stroke="white" fill="black" />
      <circle cx="750" cy="600" r="90" stroke="white" fill="black" />
    </>
  )
}
