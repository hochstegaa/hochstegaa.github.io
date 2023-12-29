window.onload = Cycle
        
function Cycle(){     
    Summer();
    setTimeout(Fall, 1200000);
    setTimeout(Winter, 1800000);
    setTimeout(Spring, 24000000);    
}

function Summer(){
    document.getElementById("SeasonDisplay").innerText = "Current season: Summer"
}

function Fall(){
    document.getElementById("SeasonDisplay").innerText = "Current season: Fall"
}

function Winter(){
    document.getElementById("SeasonDisplay").innerText = "Current season: Winter"
}

function Spring(){
    document.getElementById("SeasonDisplay").innerText = "Current season: Spring";
    Cycle();
}

