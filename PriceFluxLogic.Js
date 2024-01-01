var cycle;
window.onload = go;

function go(){
    const localInterval = setInterval(Cyclenumber, 5000);
}

function Cyclenumber(){
    cycle = Math.floor(Math.random() * 4) + 1;

    switch (cycle){
        case 1:
            NormalPrice();
            break;
        case 2:
            WarPrice();
            break;
        case 3:
            EconomicalProsperityPrice();
            break;
        case 4:
            EconomicalHardshiprice();
            break;
    }
}



function NormalPrice(){
    document.getElementById("NewsBox1").innerText = "Standard Market Report: Merchants trade, farmers yield expected harvests. Citizens find solace in the kingdom's economic stability."
    wheatPrice *= 2;
    alePrice *=1 ;
    clothesPrice *= 2;
}

function WarPrice(){
    document.getElementById("NewsBox1").innerText = "War clouds gather: Tensions escalate as neighboring realms clash over disputed borders, casting a shadow on the kingdom's peace."
    wheatPrice *= 3;
    alePrice *= 4;
    clothesPrice *= 1;
}


function EconomicalProsperityPrice(){
    document.getElementById("NewsBox1").innerText = "Kingdom flourishes: Bountiful harvests and thriving trade lead to economic boom, bringing prosperity to our noble land."
    wheatPrice *= 3;
    alePrice *= 1;
    clothesPrice *= 3;
}

function EconomicalHardshiprice(){
    document.getElementById("NewsBox1").innerText = "Harsh economic times befall the realm: Famine and trade hardships grip our land, challenging the kingdom's resilience in the face of adversity."    
    wheatPrice *= 1;
    alePrice *= 4;
    clothesPrice *= 1;
}

