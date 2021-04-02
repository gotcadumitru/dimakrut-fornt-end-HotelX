export const roomsTocleanSelector = (rooms)=>{
    return rooms.filter(room =>{
        return room.cleaned === 1
    })
}