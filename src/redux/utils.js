export const roomsTocleanSelector = (rooms) => {
    return rooms.filter(room => {
        return room.cleaned === 0
    })
}

export const selectSearchRooms = (allRooms, startDate, endDate, numbOfGuest) => {
    const sorted = allRooms.filter(room => {
        const rentPeriod = JSON.parse(room.rented);
        if (rentPeriod.length === 0) {
            if (room.nr_max_pers >= Number(numbOfGuest)) {
                return true;
            }
        }
        const rentPeriodSort = rentPeriod.sort((a, b) => a[0] - b[0]);
        let j = 0;
        if (rentPeriodSort.length === 1) {
            if (endDate < rentPeriodSort[0][0] || startDate > rentPeriodSort[0][1]) {
                if (room.nr_max_pers >= Number(numbOfGuest)) {
                    return true;
                }
            }
            return false
        }
        for (let i = 0; i < rentPeriodSort.length; i++) {
            if (startDate > rentPeriodSort[i][1] && endDate < rentPeriodSort[i + 1][0]) {
                if (room.nr_max_pers >= Number(numbOfGuest)) {
                    return true;
                }
            }
        }
        return false;
    })
    return sorted
}
// From : Thu Apr 01 2021
// To: Sun Apr 04 2021

// From : Mon Apr 05 2021
// To: Thu Apr 08 2021

// From : Thu Apr 15 2021
// To: Fri Apr 23 2021

export const findTotalRoomPeriods = (rooms) => {
    let totalRentPeriods = 0;
    rooms.forEach(room => {
        const rentPeriod = JSON.parse(room.rented);
        totalRentPeriods = totalRentPeriods + rentPeriod.length;
    });
    return totalRentPeriods
}
export const findTotalGuestInotel = (rooms) => {
    let totalGuest = 0;
    rooms.forEach(room => {
        // debugger
        if(room.cleaned==1 && room.checked_in==1){
            totalGuest+= room.nr_max_pers;
        }
    });
    return totalGuest
}
export const findTotalCapacity = (rooms) => {
    let totalCapac = 0;
    rooms.forEach(room => {
    
        totalCapac+= room.nr_max_pers;
        
    });
    return totalCapac
}

