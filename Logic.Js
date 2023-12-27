var myVariableTotalWheat = 0;
var myVariableTotalClothes = 0;
var myVariableTotalAle = 0;

var wheatPrice = 5;
var clothesPrice = 11;
var alePrice = 1;

var money = 0;
var profitLoss = true;
var moneyModifier = 0;
var randomModifier = 0;

var WheatCirculation; //des is variableTotal (total What sold vo dir) + a random amount of Wheat in addtion
var ClothesCirculation; //des is variableTotal (total What sold vo dir) + a random amount of Wheat in addtion
var AleCirculation; //des is variableTotal (total What sold vo dir) + a random amount of Wheat in addtion

var isButtonClicked = false;
var intervalId;
var isButtonClicked1 = false;
var intervalId1;
var isButtonClicked2 = false;
var intervalId2;


function wheatButtonCheck(){
    if (!isButtonClicked) {
        // Start the interval only if the button is not clicked
        intervalId = setInterval(sellingWheat, 1000);
        isButtonClicked = true;
    } else {
        // Stop the interval and reset the flag
        clearInterval(intervalId);
        isButtonClicked = false;
    }
}
function clothesButtonCheck(){
    if (!isButtonClicked1) {
        // Start the interval only if the button is not clicked
        intervalId1 = setInterval(sellingClothes, 5000);
        isButtonClicked1 = true;
    } else {
        // Stop the interval and reset the flag
        clearInterval(intervalId1);
        isButtonClicked1 = false;
    }
}
function aleButtonCheck(){
    if (!isButtonClicked2) {
        // Start the interval only if the button is not clicked
        intervalId2 = setInterval(sellingAle, 500);
        isButtonClicked2 = true;
    } else {
        // Stop the interval and reset the flag
        clearInterval(intervalId2);
        isButtonClicked2 = false;
    }
}


function sellingWheat(){ 
    myVariableTotalWheat++; 
    document.getElementById("VariableDisplay").innerText="Sold wheat sacks: " + myVariableTotalWheat;
    checkWheatPrice();
    adjustMoney();
}
function sellingClothes(){ 
    myVariableTotalClothes++; 
    document.getElementById("ClothesDisplay").innerText="Sold clothes: " + myVariableTotalClothes;
    checkClothesPrice();
    adjustMoney();
}
function sellingAle(){ 
    myVariableTotalAle++; 
    document.getElementById("AleDisplay").innerText="Sold ale: " + myVariableTotalAle;
    checkAlePrice();
    adjustMoney();
}


function checkWheatPrice(){
    if (myVariableTotalWheat > 1){
        //Price goes down a little
        wheatPrice *= 0.95
    }
}
function checkClothesPrice(){
    if (myVariableTotalClothes > 1){
        //Price goes down a little
        clothesPrice *= 0.95
    }
}
function checkAlePrice(){
    if (myVariableTotalAle > 1){
        //Price goes down a little
        alePrice *= 0.95
    }
}


function adjustMoney() {
    // Profit
    money += 1 * wheatPrice;
    money = Math.round(money * 100) / 100;

    document.getElementById("MoneyDisplay").innerText = "Money: " + money + " GLD";
}
function adjustMoneyClothes() {
    // Profit
    money += 1 * clothesPricePricePrice;
    money = Math.round(money * 100) / 100;

    document.getElementById("MoneyDisplay").innerText = "Money: " + money + " GLD";
}
function adjustMoneyAle() {
    // Profit
    money += 1 * alePricePrice;
    money = Math.round(money * 100) / 100;

    document.getElementById("MoneyDisplay").innerText = "Money: " + money + " GLD";
}
function resetPrice(){
    wheatPrice = 5;
}


function preventBehavior(e) {
    e.preventDefault(); 
  };
  
  const canvas = document.getElementById('glcanvas');
  canvas.addEventListener('touchmove', preventBehavior, false);