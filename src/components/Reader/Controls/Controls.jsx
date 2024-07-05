const Controls = ({onPrev, onNext,first,last}) => {
  

  


  return (
    <>
    <button disabled={first} onClick={onPrev}>Prev</button>
    <button disabled={last} onClick={onNext}>Next</button>
    </>
  )
}

export default Controls