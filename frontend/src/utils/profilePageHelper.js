export const nameInitial = (firstName, lastName) => {
    return firstName[0].toUpperCase() + lastName[0].toUpperCase()
}

export const transformDate = (time) =>{
    let timeStamp = new Date(time)
    let month = timeStamp.toLocaleString('default', { month: 'short' })
    let year = timeStamp.getFullYear()
    return `${month} ${year}`
}
