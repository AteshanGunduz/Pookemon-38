


export default function NavButtons({
  mouseHandler,
  wantsToMove,
  direction,
  escaped,
  handleClick
}) {
  function handleLeave(event) {
    if (wantsToMove) {
      mouseHandler(event)
    }
  }





  return (
    <div className='navigation-buttons-container'>
      <button
        onMouseDown={mouseHandler}
        onMouseUp={mouseHandler}
        onMouseLeave={handleLeave}
        onClick={()=>handleClick("left")}
        className={`navigation-button left ${
          wantsToMove && direction === 'left' ? 'active' : ''
        }`}
        data-direction='left'
      ></button>
      <button
        onMouseDown={mouseHandler}
        onMouseUp={mouseHandler}
        onMouseLeave={handleLeave}
        onClick={()=>handleClick("right")}
        className={`navigation-button right ${
          wantsToMove && direction === 'right' ? 'active' : ''
        }`}
        data-direction='right'
      ></button>
      <div className='center-container'></div>
      <button
        onMouseDown={mouseHandler}
        onMouseUp={mouseHandler}
        onMouseLeave={handleLeave}
        onClick={()=>handleClick("up")}
        className={`navigation-button up ${
          wantsToMove && !escaped && direction === 'up' ? 'active' : ''
        }`}
        data-direction='up'
      ></button>
      <button
        onMouseDown={mouseHandler}
        onMouseUp={mouseHandler}
        onMouseLeave={handleLeave}
        onClick={()=>handleClick("down")}
        className={`navigation-button down ${
          wantsToMove && direction === 'down' ? 'active' : ''
        }`}
        data-direction='down'
      ></button>
    </div>
  )
}
