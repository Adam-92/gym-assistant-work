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

export const positionCharacters = (character1, character2, character3, index) =>{
  
    if(index === 0) {
      character1.style.transform = `translate(194%, -59%) scale(0.8)`
      character1.style.pointerEvents = `none`
      character1.children[2].style.color = `transparent`
      character2.style.transform = `translate(-100%, -65%) scale(0.8)`
      character2.style.pointerEvents = `none`
      character2.children[2].style.color = `transparent` 
      character3.style.transform = `translate(-100%, -4%) scale(1.25)`
      character3.children[2].style.color = `rgb(0,0,0)`
      character3.style.pointerEvents = `auto`
    }else if(index === 1){
      character1.style.transform = ` translate(4%, -59%) scale(0.8)`
      character1.style.pointerEvents = `none`
      character1.children[2].style.color = `transparent`
      character2.style.transform = `translate(0%, -5%) scale(1.25)`  
      character2.children[2].style.color = `rgb(0,0,0)`
      character2.style.pointerEvents = `auto`
      character3.style.transform = `translate(-4%, -65%) scale(0.8)`
      character3.style.pointerEvents = `none`
      character3.children[2].style.color = `transparent`
      console.log(character2);
    }else if(index === 2){
      character1.style.transform = `translate(100%, -4%) scale(1.25)`
      character1.style.pointerEvents = `auto`
      character1.children[2].style.color = `rgb(0,0,0)`
      character2.style.transform = `translate(100%, -65%) scale(0.8)` 
      character2.style.pointerEvents = `none`
      character2.children[2].style.color = `transparent` 
      character3.style.transform = `translate(-194%, -64%) scale(0.8)`
      character3.style.pointerEvents = `none`  
      character3.children[2].style.color = `transparent`
    }
  }

export const addCharacterClass = (name) => {
      if(name === 'Bodybuilder') return "middle-item-carousel"
      if(name === 'Runner') return "left-item-carousel" 
      if(name === "Athlete") return "right-item-carousel"
}

export const goLeft = (setState,index) => {
    return index === 0 ? setState(2) : setState(prev=>prev -1) 
  }
export const goRight = (setState,index) => {
    return index === 2 ? setState(0) : setState(prev=>prev + 1) 
  }
