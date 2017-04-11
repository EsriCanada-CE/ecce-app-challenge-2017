
<div id="fuelcalc">
			<div class ="micro-container">
					<div style ="margin-top:0px; font-weight: bold; color: white; text-align: left;"><span style ="font-size: 20px;">Fuel Savings Calculator</div>
				
			<div id="fuelcontent">
				<form  class="fuel" style="text-align: left;">
					<input type="text" placeholder="Fuel Economy" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Fuel Economy'" id="fueleconomy"/>     <span style="color: white;">Litres / 100Km</span>
					<input type="text" placeholder="Commute Distance" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Commute Distance'" id="distance"/>   <span style="color: white;">Kilometers</span>
					<input type="text" placeholder="Fuel Cost" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Fuel Cost'"  id="cost"/>  <span style="color: white;">$ / Litre</span>
					<br>					
					<input type = "button" onclick="calculate();" value = "Calculate Cost" name ="solve"/>
				
				</form>
				
				<br>
				<div style ="text-align: left; color: white; font-size: 30px;" id = "result"></div>
			
			</div>
		</div>
</div>

		<script>
		
		function calculate()
			{
				var fueleconomy = document.getElementById("fueleconomy").value;
				var distance = document.getElementById("distance").value;
				var cost = document.getElementById("cost").value;
				
				var calculated =  ((distance/100)*fueleconomy)*cost;
					
				var numresult = calculated.toFixed(2);	
				
				var dollarsign = "$";
				
				var result = dollarsign.concat(numresult);
				
				document.getElementById("result").innerHTML = result;	
			}
		  
		</script>