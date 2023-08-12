'use client'
import Slider from './components/slider';

export default function Home() {
  
  return (
    <main>
      <div>
        <Slider thresholds={[100,200,300]} currentValue={299} />
      </div>
    </main>
  )
}
