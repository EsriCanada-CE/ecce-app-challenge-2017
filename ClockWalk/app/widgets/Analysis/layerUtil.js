// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/array dojo/promise/all dojo/Deferred esri/layers/FeatureLayer esri/layers/GeoRSSLayer jimu/LayerInfos/LayerInfos".split(" "),function(d,k,l,m,n,p){return{getLayerObjects:function(h){var e=new l;p.getInstance(h,h.itemInfo).then(function(f){var g=[];f.traversal(function(b){g.push(b)});f=d.map(g,function(b){var c;return b.getItemInfo().then(function(a){a&&a.originItemInfo&&(c=a.originItemInfo)}).then(function(){return b.getLayerType()}).then(function(a){"GeoRSSLayer"===a&&(b.isLeaf()||
d.forEach(b.getSubLayers(),function(a){a.layerObject.name||(a.layerObject.name=a.title)}));return b.getLayerObject()}).then(function(a){a.itemInfo=c;return a})});return k(f).then(function(b){var c=[];d.forEach(b,function(a,b){if(a instanceof m&&"esri.layers.StreamLayer"!==a.declaredClass||a instanceof n)a.id=a.id||g[b].id,c.push(a)});e.resolve(c)})},function(){e.resolve([])});return e}}});