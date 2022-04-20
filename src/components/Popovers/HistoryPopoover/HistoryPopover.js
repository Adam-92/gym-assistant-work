import { useRef, useEffect } from 'react'
import { calculatePopoverCoordinates } from '../../../utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import ContentPopover from './ContentPopover'
import './HistoryPopover.css'

const HistoryPopover = ({ lastTraining, coordinatesDOM}) => {
    const containerRef = useRef(null)
    
    useEffect(() => {
        const coordinatesPopover = containerRef.current.getBoundingClientRect()      
        const { top, left } = calculatePopoverCoordinates(coordinatesDOM, coordinatesPopover)

        containerRef.current.style.top = `${top}px`
        containerRef.current.style.left = `${left}px`
    }, [lastTraining])

    return (
      <article className="container-history-popover" ref={containerRef} >
        {lastTraining.training ? (
          <ContentPopover lastTraining={lastTraining} />
        )
        : <span>Make Your First Training!</span>}
      <FontAwesomeIcon
        icon={faCaretLeft}
        size="2x"
        className="position-arrow"
      />
      </article>
    )
}

export default HistoryPopover