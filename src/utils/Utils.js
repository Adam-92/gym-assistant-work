export  const changeToPercent = (steps, target) => {
    const calculate = Math.round(steps * 100 / target)
    return  calculate > 100 ? 100 : calculate
}    

export const addToRefContainer = (el, containerRef) => {
    if(el && !containerRef.current.includes(el)){
        containerRef.current.push(el)
    }
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