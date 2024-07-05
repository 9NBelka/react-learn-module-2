import { useState } from "react"

const ClickTracker = ({children}) => {

const [clicks, setClicks] = useState(0);

const handleCliks = ()  =>{
  setClicks(clicks + 1)
}

return (
  <button onClick={handleCliks}>{children}{clicks}</button>
)
}



export default ClickTracker