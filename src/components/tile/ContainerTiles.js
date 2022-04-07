import './tile.css'
<<<<<<< HEAD
import { useEffect, useState } from 'react'
import { getTilesData } from '../../services/Activity'
=======
import Tile from './Tile'
>>>>>>> 48d55838c6f59275a8e28f4f78ecc99a1ced2281
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoePrints, faBurger, faWeightHanging, faDumbbell} from '@fortawesome/free-solid-svg-icons'

const ContainerTiles = () => {

    const [tiles, setTiles] = useState([])
 
    const icons = [
           <FontAwesomeIcon icon={faShoePrints} className='fa-rotate-270'/>,
           <FontAwesomeIcon icon={faBurger} />,
           <FontAwesomeIcon icon={faDumbbell} />,
           <FontAwesomeIcon icon={faWeightHanging} />
    ]

    useEffect( () => {
        getTilesData()
        .then(data => setTiles(data))
    },[])


    return(
        <div className='tiles'>
            {tiles.map( (tile,index)=>{
              return(
                <Tile 
                    key={index}
                    icon={icons[index]} 
                    name={tile.name} 
                    target={tile.target}
                    current={tile.current}
                    style={tile.style}        
                />
             )
          })}
        </div>
    )
}
export default ContainerTiles