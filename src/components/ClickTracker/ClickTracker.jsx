import { useEffect } from "react"
import { useState } from "react"

const ClickTracker = () => {
  const [clicks, setClicks] = useState(0);
  const [newDate, setNewDate] = useState(Date.now());

  useEffect(() =>{
    console.log("clicks + 1",clicks)
  }, [clicks])

  // " " монтирование, обновление размонтирование, выполняется при каждом событии если нет массива. Размонтирование это удаление компонена, например PopUp
  // [] монтирование, выполняется один раз, при первом появлении компонента
  // [clicks] монтирование и обновление, так как кликс обновляется через сеттер setClicks

return (
  <>
    <button onClick={() => setClicks(clicks + 1)}>clicks: {clicks}</button>
    <button onClick={() => setNewDate(Date.now())}>date: {newDate}</button>
  </>
)
}



export default ClickTracker