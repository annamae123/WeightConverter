function Grams(){
    let kilograms = document.getElementById("weightInput").value;
    const grams = 1000;
    const ans = grams * kilograms;

   document.getElementById('display').innerHTML = ans;
   document.getElementById('displayUnit').innerHTML = "Grams";
}
function tons(){
    let kilograms = document.getElementById("weightInput").value;
    const ton = 0.00098421;
    const ans = ton * kilograms ;

   document.getElementById('display').innerHTML = ans;
   document.getElementById('displayUnit').innerHTML = "Tons";
}
function Pounds(){
    let kilograms = document.getElementById("weightInput").value;
    const pounds = 2.20462262;
    const ans = kilograms * pounds;
    // const mins = minute % hour;

//    document.getElementById('display').innerHTML = parseInt (ans) + " Hour/s and " + mins + " minutes";
document.getElementById('display').innerHTML = ans;
   document.getElementById('displayUnit').innerHTML = "Pounds";
}