export const updateObjectInArray = (items, itemId) => {
    
    return items.map((u) => {
        if (u.id === itemId) {
            return {...u, inWish: !u.inWish}
        }        
        return u;
    })
    
}