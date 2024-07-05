import articles from "../../articles.json"
import { useState } from "react"
import Controls from "./Controls/Controls";
import Progress from "./Progress/Progress";
import ArticleView from "./ArticleView/ArticleView";


const Reader = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePrev = () =>{
    setSelectedIdx(selectedIdx - 1)
  }

  const handleNext = () =>{
    setSelectedIdx(selectedIdx + 1)
  }

  //ОБЧИСЛЯЕМЫЕ ДАННЫЕ
  const isFirstElem = selectedIdx === 0;
  const isLastElem = selectedIdx === articles.length - 1;
  const visibleArticle = articles[selectedIdx];
  const current = selectedIdx + 1;
  const total = articles.length;

  return(
    <>
      <Controls first={isFirstElem} last={isLastElem} onPrev={handlePrev} onNext={handleNext}/>
      <Progress current={current} total={total}/>
      <ArticleView article={visibleArticle}/>
    </>
  )
}



export default Reader