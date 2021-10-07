function compute()
   {
       var principal = document.getElementById("principal").value;
       var rate = document.getElementById("rate").value;
       var years = document.getElementById("years").value;
   if(principal <= 0){
       alert("Enter a positive number");
           document.getElementById("principal").focus();
       return false;
   }
   var interest = principal * years * rate / 100;
   var future = new Date().getFullYear();
   var futureyears = future + Number(years);
   var resulttext = "If you deposit $<mark>" + principal + "</mark>,<br> at an interest rate of <mark>" + rate + "%</mark>.<br> You will receive an amount of $<mark>" + interest + "</mark><br>in the year <mark>" + futureyears + "</mark>";
   document.getElementById("result").innerHTML = resulttext;
}
   function sliderchange() {
       var xrate = document.getElementById("rate").value;
       sliderrate.innerHTML = xrate + " %";
   }
