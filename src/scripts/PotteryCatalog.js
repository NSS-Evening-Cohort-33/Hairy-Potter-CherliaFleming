//only collects uncracked pottery 
let potteryCatalog = []

export const toSellOrNotToSell = (pottery) => {

//if price is greater than or equal to 6 the price is 40 
    if (pottery.cracked) {
    } else if (pottery.weight >= 6) {
            pottery.price = 40
            potteryCatalog.push(pottery)
    } else {
            pottery.price = 20
            potteryCatalog.push(pottery)
    }
                

    return pottery
}

export const usePottery = () => {
    return structuredClone(potteryCatalog)
}
