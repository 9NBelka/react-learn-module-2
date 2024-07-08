import { useEffect } from "react"
import { useState } from "react"

const ClickTracker = () => {
  const [clicks, setClicks] = useState(() =>{
    const savedClicks = window.localStorage.getItem("my-clicks"); //присваиваем новой переменной значение из хранилища
    
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return 0; //первое значение клика
  });
  const [newDate, setNewDate] = useState(Date.now());

  // useEffect(() =>{
  //   console.log("clicks + 1",clicks)
  // }, [clicks])

  useEffect(()=>{
    localStorage.setItem('my-clicks', clicks);
    console.log("new item")
  },[clicks])

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