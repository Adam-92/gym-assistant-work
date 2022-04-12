const Bar = ( {addToRefContainer, day, ratio, containerRef} ) => {

    return (
        <div className='bar-container-step-chart'
            ref={el =>addToRefContainer(el, containerRef)}
        >
            <div className="bar-step-chart ">
                <div className={`${ratio >= 80 && 'position-static'} progress-step-chart`}>
                    <span className={`${ratio >= 80 && 'position-flat'} percent-step-chart`}>
                        {ratio}%
                    </span>
                </div>
            </div>
            <div className='day-month-step-chart'>
                <span>{day}</span>
            </div>
        </div>
    )
}
export default Bar