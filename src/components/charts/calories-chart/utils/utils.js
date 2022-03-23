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
    console.log({...config, data: newData})
    return {...config, data: newData}

}