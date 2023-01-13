import './Obstacle.css'
function Obstacle({top, height, width, left}) {
    return <div
        className='obstacle'
        style={{
            top: `${top}px`,
            height: `${height}px`,
            width: `${width}px`,
            left: `${left}px`
        }}
    >

    </div>
}

export default Obstacle;