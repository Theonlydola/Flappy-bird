import './Bird.css'
import gif from '../../flappy-bird-flying.gif'
function BirdUI({ size, top }) {

    return <img className='bird'
        style={{
            height: `${size}px`,
            width: `${size + 0.2 * size}px`,
            top: `${top}px`
        }}
        src={gif}
        alt='flappy'
    />


}

export default BirdUI;