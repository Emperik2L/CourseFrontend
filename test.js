	var ageval = document.getElementById("age");
	var countryval = document.getElementById("country");
	
  function selectval() {
  

	console.log(countryval);

	}
  
  function validation() {
  

	  if (countryval.value === "newzealand" && ageval.value >= 18) { alert("Thank you, you may continue shopping.");}
	  else { alert("Sorry you are not able to shop with us.");}
	  };