<header>
    <link rel="stylesheet" href="format.css"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="manifest" href="manifest.json" />
    <link rel="manifest" href="Thingy.webmanifest" />
</header>

<head>
  <link rel="manifest" href="manifest.json" />
  <link rel="manifest" href="Thingy.webmanifest" />
</head>

<div id="container">
    <h1>Tip Calculator</h1>
    <div id="calculator">
      <form>
        <p>Wie hoch ist die Summe?
          <p>
            <input id="billamt" type="text" placeholder="Summe der Rechnung">
  
            <p>Wie war der Service?  
              <div class="serviceQual">
                <div id="showstuff"></div>
                <input type="range" min="0" max="50" value="15" class="slider" id="serviceQual"> 
              </div>     
              <script> 
                var slider = document.getElementById("serviceQual");
                var output = document.getElementById("showstuff");

                output.innerHTML = slider.value + " %";

                slider.oninput = function() {
                output.innerHTML = this.value + " %";
                }
              </script>     
              
  
      </form>
      <p>Wie viele Leute teilen sich die Rechnung?</p>
      <label for="javascript">1:</label>
      <input type="radio" id="01" value="1" name="choice">
      <label for="javascript">2:</label>
      <input type="radio" id="02" value="2" name="choice">
      <label for="javascript">3:</label>
      <input type="radio" id="03" value="3" name="choice">
      <label for="javascript">4:</label>
      <input type="radio" id="04" value="4" name="choice">
      <label for="javascript">5:</label>
      <input type="radio" id="05" value="5" name="choice">
      <label for="javascript">6:</label>
      <input type="radio" id="06" value="6" name="choice">
      
       <!-- <input id="peopleamt" type="text" placeholder="Anzahl der Leute">  -->
      <button type="button" id="calculate">Calculate!</button>
  
    </div>

    <div id="totalTip">
      <sup>€</sup><span id="tip">0.00</span>
      <small id="each">Pro person</small>
    </div>
   
    <script src="tipcalculator.js"></script>
  </div>
 
 
