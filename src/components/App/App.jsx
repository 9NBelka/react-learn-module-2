import ClickTracker from "../ClickTracker/ClickTracker"
import { useState } from "react"

function App() {

const [clicks, setClicks] = useState(0);

const handleCliks = ()  =>{
  setClicks(clicks + 1)
}


  return (
    <>
    <ClickTracker value={clicks} onTrack={handleCliks}>Clicks 1: </ClickTracker>
    <ClickTracker value={clicks} onTrack={handleCliks}>Clicks 2: </ClickTracker>
    </>
  )
}

export default App
