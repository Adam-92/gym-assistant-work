export  const changeToPercent = (steps, target) => {

  const calculate = Math.round(steps * 100 / target)
  return  calculate > 100 ? 100 : calculate
}    

export const addToRefContainer = (el, containerRef) => {

  if(el && !containerRef.current.includes(el)){
      containerRef.current.push(el)
  }
}
export const minToHours = (min) => {
  const hours = (min / 60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
    return `${rhours}h : ${rminutes}m`
}  

export const addDataToConfig = (apiData, config) => {
  const { data } = config
  const newDataset = data.datasets.map( (item,index) => {
    item.data = ([...apiData[index]])
      return item
  })
   
  const newData = {
    labels: data.labels,
    datasets: newDataset,
  }
    return {...config, data: newData}
}
export const handleDescription = (container, methodName, className) =>{

  if(methodName === 'add'){
   return container.children[2].classList.add(className)
  }
  if(methodName === 'remove'){
   return container.children[2].classList.remove(className)
  }
}

export const carouselMovement = (ref1, ref2, ref3, containerRef, currentIndex) => {

  if(currentIndex === 0){
    
    ref1.classList.remove('move-down-right-carousel')
    ref1.classList.add('move-right-long-carousel')
    ref3.classList.remove('move-left-long-carousel')
    ref3.classList.add('move-down-left-carousel')
    ref2.classList.remove('move-down-carousel','move-right-carousel')
    ref2.classList.add('move-left-carousel')
    handleDescription( ref2, 'add', 'description-hide-carousel' )
    handleDescription( ref1, 'remove', 'description-show-carousel' )
    handleDescription( ref3, 'add', 'description-show-carousel' )

  }else if(currentIndex === 1 && containerRef.current.length > 0){

    ref1.classList.remove('move-down-right-carousel', 'move-right-long-carousel')
    ref3.classList.remove('move-left-long-carousel', 'move-down-left-carousel')
    ref2.classList.remove('move-right-carousel', 'move-left-carousel')
    ref2.classList.add('move-down-carousel')
    handleDescription( ref1, 'remove', 'description-show-carousel' )
    handleDescription( ref3, 'remove', 'description-show-carousel' )
    handleDescription( ref2, 'remove', 'description-hide-carousel' )

  }else if(currentIndex === 2){

    ref1.classList.remove('move-right-long-carousel')
    ref1.classList.add('move-down-right-carousel')
    ref3.classList.remove('move-down-left-carousel')
    ref3.classList.add('move-left-long-carousel')
    ref2.classList.remove('move-left-carousel', 'move-down-carousel')
    ref2.classList.add('move-right-carousel')
    handleDescription( ref1, 'add', 'description-show-carousel' )
    handleDescription( ref3, 'remove', 'description-show-carousel' )
    handleDescription( ref2, 'add', 'description-hide-carousel' )
  }
}

export const containerClass = (name) => {

  if(name === 'Bodybuilder') return  "middle-item-carousel"
  if(name === 'Runner') return  "left-item-carousel" 
  if(name === "Athlete") return  "right-item-carousel"
}

export const goLeft = (setState,index) => {
  return index === 0 ? setState(2) : setState(prev=>prev -1) 
}

export const goRight = (setState,index) => {
  return index === 2 ? setState(0) : setState(prev=>prev + 1) 
}

export const viewHistory = (e, data, setLastTraining) => {
  const item = e.target 
  const exerciseName = item.children[1].children[0].innerText;
  const partName = item.parentElement.previousSibling.innerText;

  const selectedBodyPart = data.find(bodyPart => bodyPart.part === partName)
  const selectedExercise = selectedBodyPart.exercises.find(exercise => exercise.name === exerciseName)
  const training = selectedExercise.lastTraining

  setLastTraining({
    exerciseName: exerciseName,
    training: training,
  })
}

export const getItemCoordinates = (e, setItemCoordinates) => { 
  const item = e.target
  const coordinates = item.getBoundingClientRect()
  setItemCoordinates(coordinates)
}

export const calculatePopoverCoordinates = (itemCoordinates, popoverCoordinates) => {
  const newTopCoordinatesPopover = Math.abs(itemCoordinates.top - 68 - (popoverCoordinates.height / 2) + (itemCoordinates.height /2 )) 
  const newLeftCoordinatesPopover = Math.abs(itemCoordinates.left + (itemCoordinates.width / 3))
  
  return{
    top: newTopCoordinatesPopover,
    left: newLeftCoordinatesPopover
  }
}
export const exampleDays = () => {
  return [
      {
          day: "Mon",
          steps: 1000
      },
      {
          day: "Tue",
          steps: 1000
      },
      {
          day: "Wed",
          steps: 1000
      },
      {
          day: "Thu",
          steps: 1000
      },
      {
          day: "Fri",
          steps: 1000
      },
      {
          day: "Sat",
          steps: 1000
      },
      {
          day: "Sun",
          steps: 1000
      }
  ]
}

export const exampleMonths = () =>{
  return [
      {
          day: "Mon",
          steps: 1000
      },
      {
          day: "Tue",
          steps: 1000
      },
      {
          day: "Wed",
          steps: 1000
      },
      {
          day: "Thu",
          steps: 1000
      },
      {
          day: "Fri",
          steps: 1000
      },
      {
          day: "Sat",
          steps: 1000
      },
      {
          day: "Sun",
          steps: 1000
      }
  ]
}
export const monthsDate = 
[
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const daysDate = 
[
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
]
