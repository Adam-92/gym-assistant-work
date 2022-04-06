export const getActivityData = async () => {
        const response = await fetch('http://localhost:3000/data/stepsActivity.json')
        return response.json()
}
export const setExampleData = () => {
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
