// Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1.
 let id = 1
//Define and export a function named makePottery with parameters shape, weight, and height.
export const makePottery = (shape, weight, height) => {
    const pottery = {shape, weight, height, id}
    id++ //increment opperator increments the value id by 1
    return pottery
}   
