/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.getElementById("search").addEventListener("input", function (e) {
  let kg = e.target.value;

  document.getElementById("submit-btn").addEventListener("click", function () {
    document.getElementById("outputLB").innerHTML = (kg * 2.20462).toFixed(2);
    document.getElementById("outputGrams").innerHTML = (kg * 0.001).toFixed(2);
    document.getElementById("outputOZ").innerHTML = (kg * 35.274).toFixed(0);
  });
});
