
var checkbox1 = document.getElementById('ulga');
var checkbox2 = document.getElementById('bilety3D');
var inputNumber = document.getElementById('bilety');
var button = document.getElementById('button-oblicz');
var wynik = document.getElementById('wynik');
var trzyde = 28;
var dwade= 24;
button.onclick = function() {
if(checkbox1.checked && checkbox2.checked) {
	var ilosc = inputNumber.value;
	

	var koszt = (ilosc * (trzyde / 2));
	wynik.innerHTML = "Cena biletów wynosi " + koszt + " zł.";
}
else if(checkbox2.checked)
{ 
	var ilosc = inputNumber.value;
	var koszt1 = ilosc * trzyde;
	wynik.innerHTML = "Cena biletów wynosi " + koszt1 + " zł.";
}

else if(checkbox1.checked)
{
	var ilosc = inputNumber.value;
	
	var koszt2 = ilosc * (dwade /2);
	wynik.innerHTML = "Cena biletów wynosi " + koszt2 + " zł.";
}

else{
	var ilosc = inputNumber.value;

	var koszt3 = ilosc * dwade; 
	wynik.innerHTML = "Cena biletów wynosi " + koszt3 + " zł.";
	
}

}
