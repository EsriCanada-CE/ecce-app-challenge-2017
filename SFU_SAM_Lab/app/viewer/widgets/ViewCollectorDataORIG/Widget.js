
define(['dojo/_base/declare', 
        'jimu/BaseWidget',
        'esri/dijit/PopupTemplate',
        'esri/layers/FeatureLayer',
        'esri/dijit/Legend',
        'esri/renderers/smartMapping',
        'dojo/_base/array',
        'dojo/dom',
        'dojo/dom-construct',
        'dojo/data/ItemFileReadStore',
        'dijit/form/FilteringSelect',
        'dojo/parser',
        'dojo/_base/lang',
        'dijit/layout/BorderContainer',
        'dijit/layout/ContentPane',
        'dojo/domReady!'],

function(declare, 
         BaseWidget, 
         PopupTemplate,
         FeatureLayer,
         Legend,
         smartMapping,
         array,
         dom,
         domConstruct,
         ItemFileReadStore,
         FilteringSelect,
         parser,
         lang)
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

   
	  var fieldName = "tran_type";


    // set up an object to use as a lookup table to work with user friendly field names
     var fields = {
        "FID": "FID",
		"ID": "ID",
		"tran_type": "Transportation Type"
     
     };
	 
     var outFields = ["FID", "ID", "tran_type"];

     //create popup
      var popupTemplate = new PopupTemplate({
        title: "{FID}, {ID}, {tran_type}",
        fieldInfos: [{
           "fieldName": fieldName,
           "label": fields[fieldName],
           "visible": true,
           "format": {
              places: 0,
              digitSeparator: true
           }
      }],
        showAttachments: true
     });
     
    layer = new FeatureLayer("http://services.arcgis.com/E5vyYQKPMX5X3R3H/arcgis/rest/services/Route/FeatureServer/0?token=1TaaDND2Bn-pIzXzIXsgyQQ4scS0Elf2zX_0mUwXuMonT_ajqMRbKFlXqiP093_QLV6lSgTToxJMbwhybM8NxB9osuxJVaFKMeDOyuCxF7NLiddKH7yRClxWHhno9pQbX5lU3k_S-lsf0-wEKzvtZwGXf4vl6-MWj68sYx4h5v1jAURl1XG48IPcUfcPLIgWI9_LboWTtQCN8oDac753gw..", {
            "infoTemplate": popupTemplate,
            "mode": FeatureLayer.MODE_SNAPSHOT,
            "outFields": outFields,
            "opacity": 0.8
     });
    

     //layer.setDefinitionExpression(fieldName + " > 0");

     // this.map.setExtent(extent);
     this.map.addLayer(layer);
     

     layer.on("load", lang.hitch(this,function () {
         this.createRenderer(fieldName);
     }));

     
     //this function gets called when fields are selected to render
     // create a store and a filtering select for the air quality fields
     
     var fieldNames, fieldStore, fieldSelect;
     fieldNames = {
        "identifier": "value",
        "label": "name",
        "items": []
     };
     array.forEach(outFields, function (f) {
        //if (f.split("_").length > 1) { // exclude attrs that don't contain _
           fieldNames.items.push({
              "name": fields[f],
              "value": f
           });
        //}
     });

     fieldStore = new ItemFileReadStore({
        data: fieldNames
     });
     fieldSelect = new FilteringSelect({
        displayedValue: fieldNames.items[0].name,
        value: fieldNames.items[0].value,
        name: "fieldsFS",
        required: false,
        store: fieldStore,
        searchAttr: "name",
        style: {
           "width": "290px",
           "fontSize": "12pt",
           "color": "#444",
           "height": "24px"         }
     }, domConstruct.create("div", null, dom.byId("fieldWrapper2")));
     
     fieldSelect.on("change", lang.hitch(this, function(ch){
        this.map.infoWindow.hide(); 
        var popupTemplateUpdated = new PopupTemplate({
            title: "{FID}, {ID}, {tran_type}",
            //title: "{FID}, {ID}",
            fieldInfos: [{ 
              "fieldName": ch, 
              "label": fields[ch], 
              "visible": true, 
              //"format": { places: 0, digitSeparator: true } 
            }],
            showAttachments: true
        });
        layer.setInfoTemplate(popupTemplateUpdated);
        this.createRenderer(ch);
        layer.redraw();
        this.createLegend(this.map, layer, ch);
     }));   

    },

	createRenderer: function(field) {
        //ensure that invalid values aren't shown on the map
        //layer.setDefinitionExpression(field + " > 0");
        //start the smart mapping
        smartMapping.createClassedColorRenderer({
           layer: layer,
           field: field,
           basemap: "dark-gray",
           theme: "above-and-below",
           classificationMethod: "equal-interval",
		   numClasses: 3
        }).then(lang.hitch(this, function (response) {
           layer.setRenderer(response.renderer);
           layer.redraw();
           this.createLegend(this.map, layer, field);
        }));
    },
    
    createLegend: function(map, layer, field) {
        //If applicable, remove the previous legend
        //if (this.legend) {
           //this.legend.destroy();
           //domConstruct.destroy(dom.byId("legendDiv"));
        //}

       // create a new div for the legend
        var legendDiv = domConstruct.create("div", {
           id: "legendDiv"
        }, dom.byId("legendWrapper"));

        this.legend = new Legend({
           map: map,
           layerInfos: [{
              layer: layer
              //title: "View Layer By: " + field
        }]
        }, legendDiv);
        this.legend.startup();
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