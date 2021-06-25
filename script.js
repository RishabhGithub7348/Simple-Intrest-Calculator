function compute()
{
    p = document.getElementById("principal").value;
    
    if (p<=0) {
        alert("Please Enter a Number Greater than Zero ;) ");
        document.getElementById("principal").focus();
    
    }
else {
    r = document.getElementById("rate").value;
    t = document.getElementById("year").value;
    
    var currentYear  = new Date().getFullYear();
    var finalyear = currentYear+parseInt(t);
    result = (p*r*t)/100;
    var finalvalue = result+parseInt(p);
    document.getElementById("outputPrincipal").innerHTML = "If you deposit " + p+",";
    document.getElementById("outputInterest").innerHTML = "at an interest rate of " + r+"%.";
    document.getElementById("Finalvalue").innerHTML = "You will recevie the amount of " + finalvalue+".";
    document.getElementById("Finalyear").innerHTML = "in the year of " + finalyear;
    
}
}    
function updaterate()

{
  var z = document.getElementById("rate").value;
  document.getElementById("roi").innerText=z;
}
   