const Tile = ( {icon, name, target, current, style, type})  => {
    
    const {
        backgroundIcon, 
        backgroundHeader, 
        backgroundContainer, 
        borderColor,
        opacity} = style
    
         /* 
            Jako funkcja sprawdzajaca typ a nastepnie wrzuc styl jak poniżej... 
             {`${type === 'weight' styles.}`}
         import * as styles from '../Tiles.css'
         */

    return(
        <article className="container-tile" style={{backgroundColor: backgroundContainer}}>
            <div className="header-tile flex-justify-center " style={{backgroundColor: backgroundHeader, borderColor: borderColor}}>
                <div className="icon-tile flex-justify-center" style={{backgroundColor: backgroundIcon, borderColor: borderColor}}>
                  { icon }
                </div>
                <div className='name-tile flex-justify-start'>
                    <span>{ name }</span>
                </div>
            </div>
            <div className="statistics-tile" >
                <h4 className='total-tile' style={{opacity: opacity}} >Target: </h4>
                <h4 className="target-tile">{ target }</h4>
                <h4 className="total-tile" style={{opacity: opacity}}>Total Today: </h4>
                <h5 className="positive-tile">+ { current }</h5>
        
            </div>
        </article>
    )
}

export default Tile