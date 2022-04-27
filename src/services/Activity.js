export const getDailySteps = async () => {
        const response = await fetch('http://localhost:3000/data/dailySteps.json')
        return response.json()
}
export const getMonthlySteps = async () => {
        const response = await fetch('http://localhost:3000/data/monthlySteps.json')
        return response.json()
}
export const getCarouselCharacters = async () => {
        const response = await fetch('http://localhost:3000/data/charactersCarousel.json')
        return response.json()
}
export const getTilesData = async () => {
        const response = await fetch('http://localhost:3000/data/tiles.json')
        return response.json()
}
export const getNextTraining = async () => {
        const response = await fetch('http://localhost:3000/data/nextTraining.json')
        return response.json()
}
export const getGauges = async () => {
        const response = await fetch('http://localhost:3000/data/guages.json')
        return response.json()
}
