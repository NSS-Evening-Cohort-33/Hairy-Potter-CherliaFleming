// Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1.
 let id = 1
//Define and export a function named makePottery with parameters shape, weight, and height.
export const makePottery = (shape, weight, height) => {
   
    let potteryHTML = `<ul>`

    potteryHTML += `<li>id: ${id}</li>
    <li>shape: ${shape}</li>
    <li>weight: ${weight}</li>
    <li>height: ${height}</li>`

    potteryHTML += `</ul>`
    id++ // helps each piece have an id 

    return potteryHTML
}


