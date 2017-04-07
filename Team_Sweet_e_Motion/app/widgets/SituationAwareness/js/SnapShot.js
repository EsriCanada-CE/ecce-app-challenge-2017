// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/DeferredList dojo/_base/array esri/request esri/geometry/webMercatorUtils esri/geometry/Polygon esri/geometry/Point esri/geometry/Multipoint esri/geometry/Polyline jimu/utils jimu/portalUtils jimu/portalUrlUtils jimu/tokenUtils jimu/dijit/Message ./CSVUtils".split(" "),function(B,l,n,r,z,C,D,E,K,L,F,q,G,H,p,I,J){return B("SnapShot",null,{portal:null,portalUrl:"",baseName:"",logo:"",originMapId:"",originAppId:"",credential:null,nls:null,
layerArray:[],parent:null,downloadAll:!1,time:null,constructor:function(a){this.parent=a;this.mapItemInfo=this.parent.map.itemInfo;this.extent=this.parent.map.extent;this.nls=l.mixin(this.parent.nls,window.jimuNls.drawBox);this.downloadAll=this.parent.config.csvAllFields;a=a.appConfig;this.portalUrl=a.portalUrl;this.portal=G.getPortal(this.portalUrl);this.selfUrl=H.getPortalSelfInfoUrl(this.portalUrl);this.baseUrl=this.portalUrl+"sharing/rest/";this.logo=a.logo;this.originMapId=a.map.itemId;this.originAppId=
a.appId},createSnapShot:function(a){var b=new n;this.baseName=q.stripHTML(a.name);this.layerArray=[];var d=new Date(a.time),c=d.getTimezoneOffset();this.time=q.fieldFormatter.getFormattedDate(d,{dateFormat:"shortDateShortTime"})+" "+this.nls.utc+(0>c?"+"+Math.abs(c)/60:"-"+c/60);this.portal.getUser().then(l.hitch(this,function(f){this.createFolder(f,this.time).then(l.hitch(this,function(e){this.createLayerItems(f,e,a).then(l.hitch(this,function(a){this.addLayers(f,e,a).then(l.hitch(this,function(a){this.createMap(f,
e,a,this.mapItemInfo).then(l.hitch(this,function(a){new I({message:'\x3ca href\x3d"'+(this.portalUrl+"home/webmap/viewer.html?webmap\x3d"+a.id)+'" target\x3d"_blank"\x3e'+(a.success?this.nls.snapshot_complete:this.nls.snapshot_failed)+"\x3c/a\x3e"});b.resolve("success")}),function(a){b.reject(a)})}),function(a){b.reject(a)})}),function(a){b.reject(a)})}),function(a){b.reject(a)})}),function(a){b.reject(a)});return b},createFolder:function(a,b){var d=new n,c={url:this.baseUrl+"content/users/"+a.username+
"/createFolder",content:{f:"json",folderName:this.baseName+"_"+b,title:this.baseName+"_"+b,description:this.baseName+" "+this.nls.snapshot},handleAs:"json",callbackParamName:"callback"};this.isValidCredential()&&(c.content.token=this.credential.token);C(c,{usePost:!0}).then(l.hitch(this,function(a){d.resolve(a)}),l.hitch(this,function(a){d.reject(a)}));return d},createLayerItems:function(a,b,d){var c=new n;a=d.layers;this.buffers=d.buffers;this.incidents=d.incidents;d=[];for(b=0;b<a.length;b++){var f=
!0;a[b].analysisObject&&("undefined"!==typeof a[b].analysisObject.featureCount&&0===a[b].analysisObject.featureCount)&&(f=!1);a[b].graphics&&0===a[b].graphics.length&&(f=!1);f&&d.push(this.createItem(a[b],this.incidents,this.buffers,this.time,this.nls,this.baseName))}var e=[];(new r(d)).then(l.hitch(this,function(a){for(var b=0;b<a.length;b++)e.push(a[b][1]);c.resolve(e)}),l.hitch(this,function(a){c.reject(a)}));return c},addLayers:function(a,b,d){for(var c=new n,f=[],e=0;e<d.length;e++)f.push(a.addItem(d[e],
b.folder.id));var k=[];(new r(f)).then(l.hitch(this,function(a){for(var b=0;b<a.length;b++){var e=a[b][1];e.success&&k.push(e.id)}c.resolve(k)}),l.hitch(this,function(a){c.reject(a)}));return c},createItem:function(a,b,d,c,f,e){var k=new n,h={label:a.label,title:a.label+"_"+c,desc:f.snapshot_append+" "+f.of_append+" "+a.type+" "+f.layer_append+" "+a.label+" ("+c+")",name:a.label+" ("+c+")",tags:[e+","+f.snapshot_append]};if(a.layerObject){var g=a.layerObject;e=a.analysisObject;this.layerArray.push({layer:{id:h.title,
label:h.title,opacity:1,visible:!1},label:h.name});var A;g.infoTemplate&&g.infoTemplate.info&&(A=g.infoTemplate.info);h.popupInfo=A;"groupedSummary"===a.type||"summary"===a.type?e.updateForIncident(b,d,null,null,!0,!0,!0).then(l.hitch(this,function(a){a=this.createAnalysisLayerJSON(a,g,f,c,h);k.resolve(a)})):e.updateForIncident(b,"closest"===a.type?this.parent.config.maxDistance:d,null,!0,!0,!0).then(l.hitch(this,function(a){a=this.createAnalysisLayerJSON(a,g,f,c,h);k.resolve(a)}))}else a=this.createIncidentBufferLayerJSON(a.graphics,
f,c,h),k.resolve(a);return k},createAnalysisLayerJSON:function(a,b,d,c,f){var e=a.graphics;(a=a.context._exportToCSV(e,!0))&&a.push({name:d.snapshot_append,alias:d.snapshot_append,type:"esriFieldTypeString"});for(var k=[],h=0;h<e.length;h++){var g=e[h];g.attributes[d.snapshot_append]=c;g.geometry.cache&&(g.geometry.clearCache(),delete g.geometry.cahce);k.push({attributes:g.attributes,geometry:g.geometry})}return{title:f.title,type:"Feature Collection",tags:f.tags,description:f.desc,extent:b.fullExtent,
name:f.title,text:JSON.stringify({layers:[{layerDefinition:{capabilities:"Query",name:f.name,geometryType:b.geometryType,objectIdField:b.objectIdField,type:"Feature Layer",extent:b.fullExtent,drawingInfo:{renderer:b.renderer.toJson()},fields:a},popupInfo:f.popupInfo,featureSet:{features:k,geometryType:b.geometryType}}]}),f:"json"}},createIncidentBufferLayerJSON:function(a,b,d,c){var f=[],e=[],k=[];z.forEach(a,function(a){switch(a.geometry.type){case "point":f.push(a);break;case "polyline":e.push(a);
break;case "polygon":k.push(a)}});a=[];0<f.length&&a.push(f);0<e.length&&a.push(e);0<k.length&&a.push(k);for(var h=[],g={point:"esriGeometryPoint",polyline:"esriGeometryPolyline",polygon:"esriGeometryPolygon"},l={point:this.nls.point,polyline:this.nls.line,polygon:this.nls.polygon},n={xmin:this.extent.xmin,ymin:this.extent.ymin,xmax:this.extent.xmax,ymax:this.extent.ymax,spatialReference:this.extent.spatialReference},x=0;x<a.length;x++){var t=a[x],r;if(0<t.length){var m=t[0];r=l["undefined"!==typeof m.geometry?
m.geometry.type:m.type];for(var u=g["undefined"!==typeof m.geometry?m.geometry.type:m.type],q=m.symbol.toJson(),p=[],v=0;v<t.length;v++){var m=t[v],w;switch(u){case "esriGeometryPolyline":w=m.geometry.paths;break;case "esriGeometryPolygon":w=m.geometry.rings;break;case "esriGeometryPoint":w=[m.geometry]}var y=0,s;z.forEach(w,function(a){switch(u){case "esriGeometryPolyline":s=new F(a);s.spatialReference=m.geometry.spatialReference;break;case "esriGeometryPolygon":s=new E(a);s.spatialReference=m.geometry.spatialReference;
break;case "esriGeometryPoint":s=a}a={attributes:{ObjectID:v+y},geometry:s};a.attributes[b.snapshot_append]=d;p.push(a);y+=1})}h.push({layerDefinition:{capabilities:"Query",name:1===a.length?c.name:r,geometryType:u,objectIdField:"ObjectID",type:"Feature Layer",extent:n,drawingInfo:{renderer:{type:"simple",label:"",description:"",symbol:q}},fields:[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:b.snapshot_append,alias:b.snapshot_append,type:"esriFieldTypeString"}]},featureSet:{features:p,
geometryType:u}})}}this.layerArray.push({layer:{id:c.title,label:c.title,opacity:1,visible:!0},label:c.name});return{title:c.title,type:"Feature Collection",tags:c.tags,description:c.desc,extent:n,name:c.title,text:JSON.stringify({layers:h}),f:"json"}},createMap:function(a,b,d,c){var f=c.itemData;c=this.baseName+" ("+this.nls.snapshot_append+" "+this.time+")";for(var e,k=[],h=0;h<f.baseMap.baseMapLayers.length;h++)e=f.baseMap.baseMapLayers[h],k.push({id:e.id,layerType:e.layerType,url:e.url,visibility:e.visibility,
opacity:e.opacity,title:e.title}),e=e.resourceInfo.spatialReference;f={baseMapLayers:k};k=[];for(h=0;h<this.layerArray.length;h++){var g=this.layerArray[h];k.push({id:g.layer.id,layerType:"ArcGISFeatureLayer",visibility:g.layer.visible,opacity:g.layer.opacity,title:g.label,type:"Feature Collection",itemId:d[h]})}d=D.webMercatorToGeographic(this.extent);d={title:c,type:"Web Map",item:c,extent:d.xmin+","+d.ymin+","+d.xmax+","+d.ymax,text:JSON.stringify({operationalLayers:k,baseMap:f,spatialReference:e,
authoringApp:"WebMapViewer",authoringAppVersion:"4.1",version:"2.4"}),tags:this.baseName+","+this.nls.snapshot_append,wabType:"HTML"};return a.addItem(d,b.folder.id)},_checkCredential:function(){var a=p.isValidCredential(this.credential);a||this.clearCredentialAndUser();return a},isValidCredential:function(){this.updateCredential();return this._checkCredential()},updateCredential:function(){this._checkCredential()||(this.credential=p.getPortalCredential(this.portalUrl))},clearCredentialAndUser:function(){this.user=
this.credential=null},createDownloadZip:function(a,b,d){var c=new n,f=this.nls.calculated_results;this._performAnalysis(a,b,d,this.downloadAll,!1).then(function(a){for(var b=[],d=0;d<a.length;d++){var g=a[d];(g=g.context._exportToCSV(g.graphics,!1,!0,g.analysisResults))&&b.push(g)}0<b.length&&J.exportCalculatedResultsCSV(f,b);c.resolve("success")},function(a){c.reject(a)});return c},_performAnalysis:function(a,b,d,c,f){for(var e=new n,k=[],h=0;h<a.length;h++){var g=a[h];console.log("AO: "+g);var p=
!0;g.analysisObject&&("undefined"!==typeof g.analysisObject.featureCount&&0===g.analysisObject.featureCount)&&(p=!1);p&&("groupedSummary"===g.type||"summary"===g.type?k.push(g.analysisObject.updateForIncident(b,d,null,null,!0,f,c)):k.push(g.analysisObject.updateForIncident(b,"closest"===g.type?this.parent.config.maxDistance:d,null,!0,f,c)))}var q=[];(new r(k)).then(l.hitch(this,function(a){for(var b=0;b<a.length;b++)q.push(a[b][1]);e.resolve(q)}),l.hitch(this,function(a){console.error(a);e.reject(a)}));
return e}})});