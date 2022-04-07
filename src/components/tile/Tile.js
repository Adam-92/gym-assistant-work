import Statistics from "./Statistics"
const Tile = ( {icon, name, target, current, style})  => {
    
    const {
        backgroundIcon, 
        backgroundHeader, 
        backgroundContainer, 
        borderColor
    } = style

    return(
        <article className="container-tile" style={{backgroundColor: backgroundContainer}}>
            <div className="header-tile flex-justify-center " style={{backgroundColor: backgroundHeader, borderColor: borderColor}}>
                <div className="icon-tile flex-justify-center" style={{backgroundColor: backgroundIcon, borderColor: borderColor}}>
                     {icon}
                </div>
                <div className='name-tile flex-justify-start'>
                    <span>{ name }</span>
                </div>
            </div>
            <Statistics target={target} current={current} name={name}/>
        </article>
    )
}

export default Tile