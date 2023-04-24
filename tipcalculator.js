//Calculate Tip

function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    // var numOfPeople = document.getElementById("peopleamt").value;
    if (document.getElementById("01").checked) {
      
        var numOfPeople = document.getElementById("01").value
    }
   else if (document.getElementById("02").checked) {
      
    var numOfPeople = document.getElementById("02").value
  }
  else if (document.getElementById("03").checked) {
      
    var numOfPeople = document.getElementById("03").value
  }
  else if (document.getElementById("04").checked) {
      
    var numOfPeople = document.getElementById("04").value
  } 
  else if (document.getElementById("05").checked) {
      
    var numOfPeople = document.getElementById("05").value
  }
  else if (document.getElementById("06").checked) {
      
    var numOfPeople = document.getElementById("06").value
  }

  



    if (billAmt === "") {
      alert("Please enter values");
      return;
    }
 
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.getElementById("each").style.display = "none";
    } else {
      document.getElementById("each").style.display = "block";
    }
    //alert(serviceQual)
    //Calculate tip
    var total = (billAmt * (serviceQual/100)) / numOfPeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
  
    total = total.toFixed(2);
    
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    
    
  }
  
  
  //Hide
  document.getElementById("totalTip").style.display = "none";
  document.getElementById("each").style.display = "none";
  

  
  document.getElementById("calculate").onclick = function() {
    calculateTip();
  
  };

