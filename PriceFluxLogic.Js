var cycle = rnd(1, 4);

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

function NormalPrice(){
    wheatPrice *= 2;
    alePrice *=1 ;
    clothesPrice *= 2;
}

function WarPrice(){
    wheatPrice *= 3;
    alePrice *= 4;
    clothesPrice *= 1;
}


function EconomicalProsperityPrice(){
    wheatPrice *= 3;
    alePrice *= 1;
    clothesPrice *= 3;
}

function EconomicalHardshiprice(){
    wheatPrice *= 1;
    alePrice *= 4;
    clothesPrice *= 1;
}

