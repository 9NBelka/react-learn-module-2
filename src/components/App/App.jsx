
import ClickTracker from "../ClickTracker/ClickTracker";
// import Reader from "../Reader/Reader";

// import { useState } from "react"
// import Timer from "../Timer/Timer"

function App() {
  // const [isVisible, setIsVisible] = useState(false);


  return(
    // <div>
    //   <Reader />
    // </div>
    <>
      <ClickTracker />
      {/* <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'hide' : "show"}</button>
      {isVisible && <Timer /> } */}
    </>
  )
}

export default App


// import ClickTracker from "../ClickTracker/ClickTracker"
// import { useState } from "react"

// function App() {

// const [clicks, setClicks] = useState({
//   a: 0,
//   b:0
// });

// const handleCliks = (value) =>{
//   setClicks({
//     ...clicks,
//     [value]: clicks[value] + 1
//   });
// };

// const handleCliks = ()  =>{
//   setClicks(clicks + 1)
// }

// return (
//     <>
//     <ClickTracker value={clicks.a} onTrack={ () => handleCliks("a")}>Clicks 1: </ClickTracker>
//     <ClickTracker value={clicks.b} onTrack={ () => handleCliks("b")}>Clicks 2: </ClickTracker>
//     <p>{clicks.a + clicks.b}</p>
//     </>
//   )
// }

// export default App