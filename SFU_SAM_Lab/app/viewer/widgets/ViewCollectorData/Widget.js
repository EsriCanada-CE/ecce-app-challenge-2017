
define(['dojo/_base/declare', 
        'jimu/BaseWidget',
        'esri/layers/FeatureLayer',
		'esri/renderers/UniqueValueRenderer',
        'esri/symbols/SimpleLineSymbol',
        'dojo/domReady!'],

function(declare, 
         BaseWidget, 
         FeatureLayer,
		 UniqueValueRenderer,
		 SimpleLineSymbol)
 {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {
    // DemoWidget code goes here 

    //please note that this property is be set by the framework when widget is loaded.
    //templateString: template,

    baseClass: 'jimu-widget-viewcollectordata',

    postCreate: function() {
      this.inherited(arguments);
      console.log('postCreate');
    },

    startup: function() {
      this.inherited(arguments);
      
      console.log('startup');

   
	var busSym = new SimpleLineSymbol({
          color: [255,0,175,255],
          width: 1,
		  style: "esriSLSSolid",
		  type: "esriSLS"
        });
		
	var walkSym = new SimpleLineSymbol({
          color: [175,0,255,255],
          width: 1,
          style: "esriSLSSolid",
		  type: "esriSLS"
        });
		
	var bikeSym = new SimpleLineSymbol({
          color: [0,255,175,255],
          width: 1,
          style: "esriSLSSolid",
		  type: "esriSLS"
        });
		
	var otherSym = new SimpleLineSymbol({
          color: [255,175,0,255],
          width: 1,
          style: "esriSLSSolid",
		  type: "esriSLS"
        });
	
	var transRenderer = new UniqueValueRenderer({
		  type: "uniqueValue",
		  defaultSymbol: otherSym,
		  defaultLabel: "Other transportation types",
          field1: "tran_type",
          uniqueValueInfos: [
          {
            value: "Bus", 
            symbol: busSym,
            label: "Bus"
          }, {
            value: "Walking", 
            symbol: walkSym,
            label: "Walk"
		  }, {
			value: "Biking", 
            symbol: bikeSym,
            label: "Bike" 
		  }]
        });

        // Set the renderer on the layer
    
	var transLyr = new FeatureLayer(
            "http://services.arcgis.com/E5vyYQKPMX5X3R3H/arcgis/rest/services/Route_webMap/FeatureServer/0"
        );

        // Set the renderer for the layer...
        transLyr.setRenderer(transRenderer);

        this.map.addLayer(transLyr);
    },

    onOpen: function(){
      console.log('onOpen');
    },

    onClose: function(){
      console.log('onClose');
    },

    onMinimize: function(){
      console.log('onMinimize');
    },

    onMaximize: function(){
      console.log('onMaximize');
    },

    onSignIn: function(credential){
      console.log('onSignIn');
    },

    onSignOut: function(){
      console.log('onSignOut');
    }
  });
});