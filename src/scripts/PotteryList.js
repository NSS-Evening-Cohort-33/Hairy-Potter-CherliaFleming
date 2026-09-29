import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => { 
    let pottery = usePottery() //holds a copy of sellable pottery objects 
    let potteryListHTML = ``

   for (const potteryItem of pottery) {
    <section class="pottery" id="${potteryItem.id}">
        <h2 class="${potteryItem.shape}">Mug</h2>
        <div class="pottery__properties">
            Item weighs 3 grams and is 6 cm in height 
            </div>
            <div class="${potteryItem.price}">
                </section>
                

    
