
var myVariableTotal = 0;
var wheatPrice = 5;
var money = 0;
var profitLoss = true;
var moneyModifier = 0;
var randomModifier = 0;
var WheatCirculation; //des is variableTotal (total What sold vo dir) + a random amount of Wheat in addtion

function updateVariable(){
    myVariableTotal++; 
    document.getElementById("VariableDisplay").innerText="Sold wheat sacks: " + myVariableTotal;
    
    checkWheatPrice();
    adjustMoney();  
}

function adjustMoney() {
    // Profit
    money += 1 * wheatPrice;
    money = Math.round(money * 100) / 100;

    document.getElementById("MoneyDisplay").innerText = "Money: " + money + " GLD";
}

function checkWheatPrice(){
    if (myVariableTotal > 1){
        //Price goes down a little
        wheatPrice *= 0.95
    }
}

function resetPrice(){
    wheatPrice = 5;
}