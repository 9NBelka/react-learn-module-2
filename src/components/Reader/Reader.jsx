import articles from "../../articles.json"
import { useEffect, useState } from "react"
import Controls from "./Controls/Controls";
import Progress from "./Progress/Progress";
import ArticleView from "./ArticleView/ArticleView";

const getInitialCurrent = () =>{
  const savedIdx = window.localStorage.getItem("article-idx");
  if(savedIdx !== null){
    return JSON.parse(savedIdx);
  }
  return 0
}

const Reader = () => {
  const [selectedIdx, setSelectedIdx] = useState(getInitialCurrent);

  const handlePrev = () =>{
    setSelectedIdx(selectedIdx - 1)
  }

  const handleNext = () =>{
    setSelectedIdx(selectedIdx + 1)
  }

  useEffect(() => {
    localStorage.setItem("article-idx", selectedIdx);
  }, [selectedIdx])

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