export function CenterCircle() {
  return (
    <>
      <circle cx='475' cy='600' r='100' stroke='white' fill='white' />
      <circle cx='475' cy='600' r='85' stroke='white' fill='black' />
      <circle cx='390' cy='600' r='30' stroke='white' fill='white'>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 390 600"
          to="360 390 600"
          transformOrigin="115px 30px"
          dur="10s"
          repeatCount="infinite"
        />
      </circle>
      <circle cx='390' cy='600' r='25' stroke='white' fill='black' />
    </>
  )
}
