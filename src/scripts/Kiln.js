
export const firePottery = (pottery,temperature) => {
    //An object representing a piece of pottery that was made at the wheel in the makePottery function
    let potteryFired = true

    //Add new property of cracked to the object if kiln above 2200 cracked is true 
    if (temperature > 2200) {
        potteryFired.cracked = true

    //if temperature is  is below 2200 then cracked is false 
    } else {
        potteryFired.cracked = false




