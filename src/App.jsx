import { useState } from "react"

function App() {

const [clicks, setClicks] = useState(0);

const handleCliks = ()  =>{
  setClicks(clicks + 1)
}

  return (
    <>
      <button onClick={handleCliks}>Clicks: {clicks}</button>
    </>
  )
}

export default App
