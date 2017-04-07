define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function(declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      baseClass: 'jimu-widget-CalculateSavings',
      name: 'Calculate Savings', 
      // Custom widget code goes here
	  
     
		
	  


      //this property is set by the framework when widget is loaded.
      //name: 'CustomWidget',


      //methods to communication with app container:

      // postCreate: function() {
      //   this.inherited(arguments);
      //   console.log('postCreate');
      // },

      // startup: function() {
      //  this.inherited(arguments);
      //  this.mapIdNode.innerHTML = 'map id:' + this.map.id;
      //  console.log('startup');
      // },

      // onOpen: function(){
      //   console.log('onOpen');
      // },

      // onClose: function(){
      //   console.log('onClose');
      // },

      // onMinimize: function(){
      //   console.log('onMinimize');
      // },

      // onMaximize: function(){
      //   console.log('onMaximize');
      // },

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      // resize: function(){
      //   console.log('resize');
      // }

      //methods to communication between widgets:
	  
    });
  });
  
   function calculateIt() {
			var x, y, z, fnlvalue;
			x = document.getElementById("x").value;
			y = document.getElementById("y").value;
			z = document.getElementById("z").value;
			fnlvalue = (x/100) * y * z;
			
 			if (isNaN(parseFloat(fnlvalue)) || fnlvalue == 0) {	
				document.getElementById("label2").innerHTML =  "Please enter numeric values in all fields.";
				document.getElementById("label1").innerHTML = "";
			}
			else {
            document.getElementById("label1").innerHTML = fnlvalue.toFixed(2) + "$";
			document.getElementById("label2").innerHTML =  "The amount above is how much money you would spend taking a car.";
			} 
        }