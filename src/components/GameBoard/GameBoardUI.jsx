import './GameBoard.css'
import Bird from '../Bird/Bird';
import Obstacle from '../Obstacle/Obstacle';

function GameBoardUI({
  height,
  width,
  birdSize,
  birdPosition,
  onJump,
  topObstacleHeight,
  bottomObstacleHeight,
  obstacleWidth,
  obstaclePosition,
  gap,
  score
}) {

  return <div
    onKeyDown={onJump}
    onClick={onJump}
    className='gameBoard'
    style={{
      marginTop: `20px`,
      height: `${height}px`,
      width: `${width}px`,
      // display: 'flex',
      // justifyContent: 'center'
    }}>

    <Obstacle
      top={0}
      height={topObstacleHeight}
      width={obstacleWidth}
      left={obstaclePosition}
    />

    <Bird
      size={birdSize}
      top={birdPosition}
    />

    <Obstacle
      top={gap}
      height={bottomObstacleHeight}
      width={obstacleWidth}
      left={obstaclePosition}
    />

    <div className='score'>
        {score}
    </div>


  </div>
}

export default GameBoardUI;