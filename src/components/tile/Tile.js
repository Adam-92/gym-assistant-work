import './Tile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoePrints} from '@fortawesome/free-solid-svg-icons'
const Tile = () => {
    return(
        <article className="container-tile">
            <div className='content-tile'>
                <div className='icon-tile'>
                    <FontAwesomeIcon icon={faShoePrints} />
                </div>
                <span>
                    Steps
                </span>
            </div>
        </article>
    )
}

export default Tile