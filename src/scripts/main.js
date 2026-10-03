// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { PotteryList } from "./PotteryList.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 3, 6)
let platter = makePottery("platter",7, 2)
let bowl = makePottery("bowl", 4, 4)
let vase = makePottery("vase", 5, 3)
let teacup = makePottery("teacup", 2, 1)

// Fire each piece of pottery in the kiln
let mugFired = firePottery(mug, 2200)
let platterFired = firePottery(platter, 2200)
let bowlFired = firePottery(bowl, 2300)
let vaseFired = firePottery(vase, 2100)
let teacupFired = firePottery(teacup, 2500)

// Determine which ones should be sold, and their price
toSellOrNotToSell(mugFired)
toSellOrNotToSell(platterFired)
toSellOrNotToSell(bowlFired)
toSellOrNotToSell(vaseFired)
toSellOrNotToSell(teacupFired)

// Invoke the component function that renders the HTML list
const potteryListElement = document.querySelector(".potteryList") //finds the article element with the class potteryList
potteryListElement.innerHTML = PotteryList()//fills with HTML string

