import './App.css';
import { TopLeftArch } from './topLeftArch'
import { BottomLeftArch } from './bottomLeftArch'
import { BottomArch } from './bottomArch'
import { BackgroundStuff } from './backgroundstuff'
import { SmallForegroundStuff } from './smallForegroundStuff'
import { RectangleGrid } from './rectangleGrid'
import { CenterCircle } from './centerCircle'

function App() {
  return (
    <div className="App" >
      <svg viewBox="0 0 1200 1200" width="900" height="800" xmlns="http://www.w3.org/2000/svg">
        <BackgroundStuff />
        <TopLeftArch />
        <BottomLeftArch />
        <BottomArch />
        <SmallForegroundStuff />
        <polygon points="750,540 800,630 700,630" fill="white">
          <animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 750 595"
                          to="360 750 595"
                          dur="10s"
                          repeatCount="indefinite"/>
        </polygon>
        <CenterCircle />
      </svg>
    </div>
  );
}

export default App;
