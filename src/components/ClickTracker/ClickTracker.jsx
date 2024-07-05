

const ClickTracker = ({children, value, onTrack}) => {



return (
  <button onClick={onTrack}>{children}{value}</button>
)
}



export default ClickTracker