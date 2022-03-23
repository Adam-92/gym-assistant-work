export  const percent = (steps, target) => {
    const calculate = Math.round(steps * 100 / target)
    return  calculate > 100 ? 100 : calculate
}    

export const addToRef = (el, containerRef) => {
    if(el && !containerRef.current.includes(el)){
        containerRef.current.push(el)
    }
}