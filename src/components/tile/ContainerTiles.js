import './tile.css'
import Tile from '../../components/tile/Tile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoePrints, faBurger, faWeightHanging, faDumbbell} from '@fortawesome/free-solid-svg-icons'

const ContainerTiles = () => {


    const tiles = [
        {   
            name: 'Today Steps',
            icon: <FontAwesomeIcon icon={faShoePrints} className='fa-rotate-270'/>,
            style: {},
            target: 12000,
            current: 4500
        },
        {   
            name: 'Calories',
            icon: <FontAwesomeIcon icon={faBurger} />,
            style: {},
            target: 2400,
            current: 1900
        },
        {   
            name: 'Total Training Time',
            icon: <FontAwesomeIcon icon={faDumbbell} />,
            style: {},
            target: 1980,
            current: '1h: 45min'
        },
        {   
            name: 'Weight',
            icon: <FontAwesomeIcon icon={faWeightHanging} />,
            style: {
                backgroundIcon: 'rgb(254,174,199)',
                backgroundHeader: 'rgb(253,145, 179)',
                backgroundContainer: 'rgb(233, 95, 139)',
                borderColor: 'rgb(239, 231, 234)',
                opacity: 0.8
              },
            target: 82,
            current: 89
        },
    ]

    return(
        <div className='tiles'>
            {tiles.map( (tile,index)=>{
              return(
                <Tile 
                    key={index} 
                    icon={tile.icon} 
                    name={tile.name} 
                    target={tile.target}
                    current={tile.current}
                    style={tile.style} 
                    type={tile.type}         
                />
             )
          })}
        </div>
    )
}
export default ContainerTiles