// Create a counter function which has increment and getValue functionality (closure)

const counter = () => {
    let count = 0

    return {
        increment: (val = 1) => {
            return count += val
        },
        getValue: () => {
            return count
        }
    }
}