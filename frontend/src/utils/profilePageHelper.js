export const nameInitial = (firstName, lastName) => {
    return firstName[0].toUpperCase() + lastName[0].toUpperCase()
}

export const transformDate = (time) =>{
    let timeStamp = new Date(time)
    let month = timeStamp.toLocaleString('default', { month: 'short' })
    let year = timeStamp.getFullYear()
    return `${month} ${year}`
}

export const transformDateModal = (time) =>{
    if(!time) return time;
    let timeStamp = new Date(time)
    let year = timeStamp.getFullYear();
    let month = ('0' + (timeStamp.getMonth() + 1)).slice(-2);
    let day = ('0' + timeStamp.getDate()).slice(-2);
    let formattedDate = year + '-' + month + '-' + day;
    return formattedDate;

}
