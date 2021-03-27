/*
TEMPERATURE CONVERTER
- Select unit
- When unit is selected, input field will change to that specific unit
- Enter value for that unit
- Click calculate and then convert to other units that were not selected
- To select a new unit simply click the drop down arrow and the app will reset.
*/

// Select unit
const units = document.querySelector('#units');

units.addEventListener('change', function() {  
  let selectedUnit = units.selectedIndex;
  let degree = document.querySelector('#degree');  

  const firstResult = document.getElementById('unit1');
  const secondResult = document.getElementById('unit2');
  const thirdResult = document.getElementById('unit3');
        
  switch(selectedUnit) {
    case 0:
      degree.innerHTML = "&deg;F";
      firstResult.innerHTML = "&deg;C";
      secondResult.innerHTML = "&deg;R";
      thirdResult.innerHTML = "K";
      document.getElementById('unit-description').placeholder = "Degrees Fahrenheit";
      break;

    case 1:
      degree.innerHTML = "&deg;C";    
      firstResult.innerHTML = "&deg;F";
      secondResult.innerHTML = "&deg;R";
      thirdResult.innerHTML = "K";
      document.getElementById('unit-description').placeholder = "Degrees Celsius";
      break;

    case 2:
      degree.innerHTML = "&deg;R";    
      firstResult.innerHTML = "&deg;C";
      secondResult.innerHTML = "&deg;F";
      thirdResult.innerHTML = "K";
      document.getElementById('unit-description').placeholder = "Degrees Rankine";
      break;

    case 3:    
      degree.innerHTML = "K";        
      firstResult.innerHTML = "&deg;C";
      secondResult.innerHTML = "&deg;R";
      thirdResult.innerHTML = "&deg;F";
      document.getElementById('unit-description').placeholder = "Kelvin";
      break;
  }

});

// Listen for submit
document.querySelector('#temp-form').addEventListener('submit', function(e) {
  // Hide results
  document.querySelector('#results').style.display = 'none';

  // Show loader
  document.querySelector('#loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  reset();
  
  e.preventDefault();
});

// Calculate Results
function calculateResults(){
  
  // UI Vars
  const unitToConvert = document.querySelector("#unit-description");
  let selectedUnit = units.selectedIndex;

  const convertedUnitOne = document.querySelector("#celsius");
  const convertedUnitTwo = document.querySelector("#rankine");
  const convertedUnitThree = document.querySelector("#kelvin");

  if (selectedUnit === 0) {
    function fahrenheitConversion() {
      const ftemp = parseFloat(unitToConvert.value);
      const ctemp = (ftemp - 32) * (5/9);
      const rtemp = ftemp + 459.67;
      const ktemp = (ftemp - 32) * (5/9) + 273.15;
      
      convertedUnitOne.value = ctemp.toFixed(2);
      convertedUnitTwo.value = rtemp.toFixed(2);
      convertedUnitThree.value = ktemp.toFixed(2);
    }
    unitToConvert.addEventListener('submit', fahrenheitConversion());
  }
  else if (selectedUnit === 1) {
    function celsiusConversion() {
      const ctemp = parseFloat(unitToConvert.value);
      const ftemp = (ctemp * (9/5)) + 32;
      const rtemp = (ctemp * (9/5)) + 491.67;
      const ktemp = ctemp + 273.15;
      
      convertedUnitOne.value = ftemp.toFixed(2);
      convertedUnitTwo.value = rtemp.toFixed(2);
      convertedUnitThree.value = ktemp.toFixed(2);
    }
    unitToConvert.addEventListener('submit', celsiusConversion());
  }
  else if (selectedUnit === 2) {
    function rankineConversion() {
      const rtemp = parseFloat(unitToConvert.value);
      const ctemp = (rtemp - 491.67) * (5/9);
      const ftemp = rtemp - 459.67;
      const ktemp = rtemp * (5/9);
      
      convertedUnitOne.value = ctemp.toFixed(2);
      convertedUnitTwo.value = ftemp.toFixed(2);
      convertedUnitThree.value = ktemp.toFixed(2);
    }
    unitToConvert.addEventListener('submit', rankineConversion());
  }
  else {
    function kelvinConversion() {
      const ktemp = parseFloat(unitToConvert.value);
      const ctemp = ktemp - 273.15;
      const rtemp = ktemp * (9/5);
      const ftemp = (ktemp - 273.15) * (9/5) + 32;
      
      convertedUnitOne.value = ctemp.toFixed(2);
      convertedUnitTwo.value = rtemp.toFixed(2);
      convertedUnitThree.value = ftemp.toFixed(2);
    }
    unitToConvert.addEventListener('submit', kelvinConversion());
  }
  
  // Show results
  document.querySelector('#results').style.display = 'block';

  // Hide loader
  document.querySelector('#loading').style.display = 'none';
}


// Reset
function reset() {
  units.addEventListener("click", function() {
    document.querySelector('#results').style.display = 'none';
    document.querySelector("#unit-description").value = 'none';
  })
}

