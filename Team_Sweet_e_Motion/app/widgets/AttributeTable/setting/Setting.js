// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/AttributeTable/utils":function(){define("dojo/_base/lang dojo/_base/array jimu/LayerInfos/LayerInfos dojo/Deferred dojo/promise/all exports dojo/store/Observable dojo/store/Cache dojo/store/Memory esri/lang ./table/FeatureLayerQueryStore jimu/utils".split(" "),function(g,l,r,p,h,f,d,v,e,t,s,n){function q(a,b){if(!a||!a.length)return b||[];if(!b||!b.length)return a;for(var k=[],c=0,m=a.length;c<m;c++)for(var u=a[c],w=0,h=b.length;w<h;w++)if(b[w].name===u.name){k.push(u);break}return k}
f.readLayerInfosObj=function(a){return r.getInstance(a,a.itemInfo)};f.readLayerInfosFromMap=function(a,b,k){var c=new p;r.getInstance(a,a.itemInfo).then(g.hitch(this,function(m){var a=[];b?m.traversalLayerInfosOfWebmap(function(c){a.push(c)}):m.traversal(function(c){a.push(c)});if(k){var w=[],h=m.getMapNotesLayerInfoArray();l.forEach(h,function(c){w.push(c.id);c.traversal(function(c){w.push(c.id)})});a=l.filter(a,function(c){return-1===w.indexOf(c.id)})}m=m.getTableInfoArray();a=a.concat(m);c.resolve(a)}),
g.hitch(this,function(k){console.error(k);c.reject(k)}));return c.promise};f.generateColumnsFromFields=function(a,b,k,c,m,u){function h(c){if(a&&t.isDefined(a.fieldInfos))for(var k=0,m=a.fieldInfos.length;k<m;k++){var b=a.fieldInfos[k];if(b.fieldName===c)return b.format}return null}var d={selectionHandle:{label:"",className:"selection-handle-column",hidden:!1,unhidable:!0,filed:"selection-handle-column",sortable:!1,_cache:{sortable:!1,statistics:!1}}};l.forEach(b,g.hitch(f,function(a,b,e){b="field"+
b;var n=!!a.domain,v="esriFieldTypeDate"===a.type,p=k&&a.name===k,s="esriFieldTypeDouble"===a.type||"esriFieldTypeSingle"===a.type||"esriFieldTypeInteger"===a.type||"esriFieldTypeSmallInteger"===a.type,q="esriFieldTypeString"===a.type;d[b]={label:a.alias||a.name,className:b,hidden:1===e.length?!1:!a.show&&t.isDefined(a.show),unhidable:1===e.length?!1:!a.show&&t.isDefined(a.show)&&a._pk,field:a.name,sortable:!1,_cache:{sortable:!!m,statistics:u&&!n&&s}};q?d[b].formatter=g.hitch(f,f.urlFormatter):v?
d[b].formatter=g.hitch(f,f.dateFormatter,h(a.name)):s&&(d[b].formatter=g.hitch(f,f.numberFormatter,h(a.name)));n?d[b].get=g.hitch(f,function(c,a){return this.getCodeValue(c.domain,a[c.name])},a):p?d[b].get=g.hitch(f,function(c,a,b){return this.getTypeName(b[c.name],a)},a,c):!n&&(!v&&!p)&&(d[b].get=g.hitch(f,function(c,a,b,k){var m=null;a&&b&&0<b.length&&(b=(b=l.filter(b,g.hitch(f,function(c){return c.name===k[a]})))&&b[0]||null)&&(b.domains&&b.domains[c.name]&&b.domains[c.name].codedValues)&&(m=this.getCodeValue(b.domains[c.name],
k[c.name]));return(c=null!==m?m:k[c.name])||isFinite(c)?c:""},a,k,c))}));return d};f.getTypeName=function(a,b){return n.fieldFormatter.getTypeName(a,b)};f.getCodeValue=function(a,b){return n.fieldFormatter.getCodedValue(a,b)};f.urlFormatter=function(a){return n.fieldFormatter.getFormattedUrl(a)};f.dateFormatter=function(a,b){return n.fieldFormatter.getFormattedDate(b,a)};f.numberFormatter=function(a,b){return n.fieldFormatter.getFormattedNumber(b,a)};f.readLayerObjectsFromMap=function(a,b,k){var c=
new p,m=[];this.readLayerInfosFromMap(a,b,k).then(g.hitch(this,function(a){l.forEach(a,g.hitch(this,function(c){m.push(c.getLayerObject())}));h(m).then(g.hitch(this,function(a){c.resolve(a)}),g.hitch(this,function(a){c.reject(a);console.error(a)}))}),g.hitch(this,function(a){c.reject(a)}));return c.promise};f.readSupportTableInfoFromLayerInfos=function(a){var b=new p,k=[];l.forEach(a,g.hitch(this,function(c){k.push(c.getSupportTableInfo())}));h(k).then(g.hitch(this,function(c){c=g.clone(c);l.forEach(c,
function(c,b){c.id=a[b].id});b.resolve(c)}),function(c){b.reject(c)});return b.promise};f.readConfigLayerInfosFromMap=function(a,b,k){var c=new p,m=[];this.readLayerInfosFromMap(a,b,k).then(g.hitch(this,function(a){var b=[];l.forEach(a,function(c){m.push(c.getSupportTableInfo())});h(m).then(g.hitch(this,function(k){l.forEach(k,g.hitch(this,function(c,k){c.isSupportedLayer&&(a[k].name=a[k].title,b.push(a[k]))}));c.resolve(b)}),g.hitch(this,function(a){c.reject(a)}))}),g.hitch(this,function(a){c.reject(a)}));
return c.promise};f.getConfigInfosFromLayerInfos=function(a){return l.map(a,function(a){return f.getConfigInfoFromLayerInfo(a)})};f.getConfigInfoFromLayerInfo=function(a){var b={};b.name=a.name||a.title;b.id=a.id;b.show=a.isShowInMap();b.layer={url:a.getUrl()};var k=a.getPopupInfo();k&&!k.description&&(b.layer.fields=l.map(k.fieldInfos,function(c){return{name:c.fieldName,alias:c.label,show:c.visible,format:c.format}}),a=g.getObject("layerObject.fields",!1,a),b.layer.fields=q(b.layer.fields,a),l.some(b.layer.fields,
function(c){return c.show})||(b.layer.fields&&0<b.layer.fields.length?b.layer.fields[0].show=!0:console.warn("We do not get fields info.")));return b};f.generateCacheStore=function(a,b,k,c,m){a=new s({layer:a,objectIds:a._objectIds||null,totalCount:b,batchCount:k,where:c||"1\x3d1",spatialFilter:m});b=new e;return new v(a,b,{})};f.generateMemoryStore=function(a,b){return new d(new e({data:a||[],idProperty:b}))};f.merge=function(a,b,k,c){for(var m=l.map(b,function(c){return c[k]}),u=0,h=a.length;u<
h;u++){var d=m.indexOf(a[u][k]);-1<d&&c(a[u],b[d])}};f.syncOrderWith=function(a,b,k){function c(c,a){return l.map(c,function(c){return c[a]})}if(!g.isArray(b)||!k)return a;for(var m=c(a,k),h=[],d=0,f=b.length;d<f;d++){var e=m.indexOf(b[d][k]);-1<e&&(h=h.concat(a.splice(e,1)),m=c(a,k))}return h.concat(a)}})},"dojo/store/Observable":function(){define(["../_base/kernel","../_base/lang","../when","../_base/array"],function(g,l,r,p){g=function(h){function f(d,f){var e=h[d];e&&(h[d]=function(a){var b;"put"===
d&&(b=h.getIdentity(a));if(t)return e.apply(this,arguments);t=!0;try{var k=e.apply(this,arguments);r(k,function(c){f("object"==typeof c&&c||a,b)});return k}finally{t=!1}})}var d=[],g=0;h=l.delegate(h);h.notify=function(h,f){g++;for(var e=d.slice(),a=0,b=e.length;a<b;a++)e[a](h,f)};var e=h.query;h.query=function(f,t){t=t||{};var q=e.apply(this,arguments);if(q&&q.forEach){var a=l.mixin({},t);delete a.start;delete a.count;var b=h.queryEngine&&h.queryEngine(f,a),k=g,c=[],m;q.observe=function(a,f){1==
c.push(a)&&d.push(m=function(a,m){r(q,function(d){var u=d.length!=t.count,e,l;if(++k!=g)throw Error("Query is out of date, you must observe() the query prior to any data modifications");var r,s=-1,q=-1;if(void 0!==m){var y=[].concat(d);b&&!a&&(y=b(d));e=0;for(l=d.length;e<l;e++){var x=d[e];if(h.getIdentity(x)==m&&!(0>y.indexOf(x))){r=x;s=e;(b||!a)&&d.splice(e,1);break}}}if(b){if(a&&(b.matches?b.matches(a):b([a]).length))e=-1<s?s:d.length,d.splice(e,0,a),q=p.indexOf(b(d),a),d.splice(e,1),t.start&&
0==q||!u&&q==d.length?q=-1:d.splice(q,0,a)}else a&&(void 0!==m?q=s:t.start||(q=h.defaultIndex||0,d.splice(q,0,a)));if((-1<s||-1<q)&&(f||!b||s!=q)){u=c.slice();for(e=0;d=u[e];e++)d(a||r,s,q)}})});var e={};e.remove=e.cancel=function(){var b=p.indexOf(c,a);-1<b&&(c.splice(b,1),c.length||d.splice(p.indexOf(d,m),1))};return e}}return q};var t;f("put",function(d,e){h.notify(d,e)});f("add",function(d){h.notify(d)});f("remove",function(d){h.notify(void 0,d)});return h};l.setObject("dojo.store.Observable",
g);return g})},"dojo/store/Cache":function(){define(["../_base/lang","../when"],function(g,l){var r=function(p,h,f){f=f||{};return g.delegate(p,{query:function(d,g){var e=p.query(d,g);e.forEach(function(d){(!f.isLoaded||f.isLoaded(d))&&h.put(d)});return e},queryEngine:p.queryEngine||h.queryEngine,get:function(d,f){return l(h.get(d),function(e){return e||l(p.get(d,f),function(e){e&&h.put(e,{id:d});return e})})},add:function(d,f){return l(p.add(d,f),function(e){h.add(e&&"object"==typeof e?e:d,f);return e})},
put:function(d,f){h.remove(f&&f.id||this.getIdentity(d));return l(p.put(d,f),function(e){h.put(e&&"object"==typeof e?e:d,f);return e})},remove:function(d,f){return l(p.remove(d,f),function(e){return h.remove(d,f)})},evict:function(d){return h.remove(d)}})};g.setObject("dojo.store.Cache",r);return r})},"widgets/AttributeTable/table/FeatureLayerQueryStore":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array esri/tasks/query esri/tasks/QueryTask ./FeatureLayerQueryResult".split(" "),
function(g,l,r,p,h,f){return g(null,{queryUrl:"",idProperty:"id",data:null,_entityData:null,constructor:function(d){g.safeMixin(this,d);this.data=[];this._entityData=[];this.layer=d.layer;this.objectIds=d.objectIds;this.where=d.where;this.orderByFields=d.orderByFields;this.totalCount=d.totalCount;this.batchCount=d.batchCount||25;this.idProperty=this.layer.objectIdField;this.spatialFilter=d.spatialFilter;this.layer&&this.layer.url&&(this.queryTask=new h(this.layer.url))},get:function(d){return this.data[d]},
getIdentity:function(d){return d[this.idProperty]},query:function(d,h){var e=new p,g=h&&h.start||0,s=this.batchCount,n=null;"function"===typeof d?n=d(this._entityData):"[object Array]"===Object.prototype.toString.call(d)&&(n=d);if(this.objectIds)n=n?n:this.objectIds,e.objectIds=n.length>=g+this.batchCount?n.slice(g,g+s):n.slice(g);else if(n&&0<n.length?e.objectIds=n.length>=g+this.batchCount?n.slice(g,g+s):n.slice(g):(e.start=g,e.num=s,e.where=this.where,e.geometry=this.spatialFilter,e.spatialRelationship=
p.SPATIAL_REL_INTERSECTS),(g=h.sort)&&0<g.length)g=r.map(g,function(a){return a.attribute+" "+(a.descending?"DESC":"ASC")}),e.orderByFields=g;e.returnGeometry="esriGeometryPoint"===this.layer.geometryType;e.outFields=["*"];var q=this.totalCount,g=null,g=!e.where;if(!(e.objectIds&&0<e.objectIds.length)&&g)return new f([]);g=this.queryTask?this.queryTask.execute(e):this.layer.queryFeatures(e);g.total=g.then(l.hitch(this,function(a){var b=0,k=this.layer.objectIdField;if(this.objectIds){if(!k)for(b=0;b<
a.fields.length;b++)if("esriFieldTypeOID"===a.fields[b].type){k=a.fields[b].name;break}for(var c={},b=0;b<a.features.length;b++)c[a.features[b].attributes[k]]=a.features[b];a.features=r.map(e.objectIds,function(a){return c[a]})}for(b=0;b<a.features.length;b++)if(a.features[b]){var m=a.features[b];a.features[b]=l.mixin(l.clone(m.attributes),{geometry:m.geometry});this.data[a.features[b][k]]=a.features[b];this._entityData.push(a.features[b])}a=a.features;return q}),function(){console.log("FeatureLayerQueryStore queryFeatures failed.");
return 0});return new f(g)}})})},"widgets/AttributeTable/table/FeatureLayerQueryResult":function(){define("esri/main dojo/_base/lang dojo/_base/kernel dojo/_base/Deferred dojo/DeferredList dojo/_base/array".split(" "),function(g,l,r,p){var h=function(f){function d(d){f[d]||(f[d]=function(){var e=arguments;return p.when(f,function(f){Array.prototype.unshift.call(e,f.features||f);return h(r[d].apply(r,e))})})}if(!f)return f;f.then&&(f=l.delegate(f));f.total||(f.total=p.when(f,function(d){return g._isDefined(d.total)?
d.total:d.length||0}));d("forEach");d("filter");d("map");d("some");d("every");return f};return h})},"widgets/AttributeTable/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/AttributeTable/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n  \x3cdiv class\x3d"instruction"\x3e\r\n    \x3cp\x3e${nls.instruction}\x3c/p\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableLayerInfos" class\x3d"table-layer-infos"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"table-options jimu-ellipsis"\x3e\r\n    \x3cul\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"exportcsv" checked\r\n        data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.exportCSV}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"expand" data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.expand}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"filterByMapExtent" data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.filterByExtent}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n    \x3c/ul\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/AttributeTable/setting/css/style.css":".jimu-widget-attributetable-setting{margin:0; padding:0; font-size:14px; width: 100%; height: 100%; position: relative; color: #596679;}.jimu-widget-attributetable-setting .instruction{font-size: 12px; margin-bottom: 10px;}.jimu-widget-attributetable-setting .show{width: 120px;}.jimu-widget-attributetable-setting .symbol{width: 200px;}.jimu-widget-attributetable-setting .table-layer-infos{width: 100%; height: 396px;}.jimu-widget-attributetable-setting .table-options ul{list-style-type: none; padding: 0;}.jimu-widget-attributetable-setting .jimu-checkbox{margin-right: 20px;}.jimu-widget-attributetable-setting .disable-checkbox{color: #e5e5e5;}",
"*now":function(g){g(['dojo/i18n!*preload*widgets/AttributeTable/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/Deferred dojo/query jimu/dijit/Popup jimu/dijit/Message jimu/dijit/CheckBox jimu/dijit/LoadingShelter ../utils".split(" "),function(g,l,r,p,h,f,d,v,e,t,s,n,q,a,b){return g([r,l],{baseClass:"jimu-widget-attributetable-setting",currentFieldTable:null,_allLayerFields:null,_layerInfos:null,_tableInfos:null,_delayedLayerInfos:null,_delayedLayerInfosAfterInit:null,
_unSpportQueryCampsite:null,startup:function(){this.inherited(arguments);this.config.layerInfos||(this.config.layerInfos=[]);this._allLayerFields=[];this._layerInfos=[];this._tableInfos=[];this._delayedLayerInfos=[];this._delayedLayerInfosAfterInit=[];this._unSpportQueryCampsite={};this.displayFieldsTable=new p({fields:[{name:"show",title:this.nls.show,width:"auto",type:"checkbox","class":"show"},{name:"label",title:this.nls.label,width:"60%",type:"text"},{name:"url",title:"url",type:"text",hidden:!0},
{name:"index",title:"index",type:"text",hidden:!0},{name:"actions",title:this.nls.actions,type:"actions",width:"20%",actions:["edit"],"class":"symbol"},{name:"showAttachments",title:"",type:"checkbox",hidden:!0}],selectable:!0,autoHeight:!1});this.displayFieldsTable.placeAt(this.tableLayerInfos);f.setStyle(this.displayFieldsTable.domNode,{height:"100%"});this.shelter=new a({hidden:!0});this.shelter.placeAt(this.domNode.parentNode.parentNode||this.domNode);this.shelter.startup();this.shelter.show();
b.readLayerInfosObj(this.map).then(h.hitch(this,function(a){this.own(a.on("layerInfosChanged",h.hitch(this,this.onLayerInfosChanged)));this.own(v(this.displayFieldsTable,"actions-edit",h.hitch(this,this.editFieldsClick)));this.own(v(this.displayFieldsTable,"row-click",h.hitch(this,this._verifiedOnShowClick)));this.setConfig(this.config)}))},editFieldsClick:function(a){var c=t(".action-item-parent",a);if(c&&c.length)if(c=this.displayFieldsTable.getRowData(a),c.show){var b=parseInt(c.index,10);this.shelter.show();
this._getLayerFields(b).then(h.hitch(this,function(c){this.openFieldsDialog(a,c,b)}),h.hitch(this,function(a){console.error(a)})).always(h.hitch(this,function(){this.shelter.hide()}))}else var d=new n({message:this.nls.warning,buttons:[{label:this.nls.ok,onClick:h.hitch(this,function(){d.close()})}]})},_verifiedOnShowClick:function(a){var c=this.displayFieldsTable.getRowData(a),b=parseInt(c.index,10),d=null,d=this.config&&this.config.layerInfos&&0<this.config.layerInfos.length?this.config.layerInfos[b]:
this._layerInfos[b],b=-1<this._unSpportQueryCampsite.layerNames.indexOf(d.name||d.title);c.show&&b&&(new n({message:this.nls.unsupportQueryWarning}),c.show=!1,this.displayFieldsTable.editRow(a,c))},_getLayerFields:function(a){return this._layerInfos[a].getLayerObject().then(h.hitch(this,function(c){var m=this._allLayerFields[a];c=d.map(c.fields,function(a){return{name:a.name,alias:a.alias,show:!0}});b.merge(c,m,"name",function(a,c){h.mixin(a,c)});return c=b.syncOrderWith(c,m,"name")}))},openFieldsDialog:function(a,
c,b){var d=!1,e=this._layerInfos[b];(e=e&&e.layerObject)&&(d=e.hasAttachments&&e.objectIdField);var e=f.create("div"),g=this._createFieldsTable(c,b);f.place(g.domNode,e);var l=null;d&&(l=new q({label:this.nls.showAttachments,style:"margin-top:10px;"}),c=this.displayFieldsTable.getRowData(a),l.setValue(c.showAttachments),l.placeAt(e));this.currentFieldTable=g;c=600;l&&(c=640);var n=new s({titleLabel:this.nls.configureLayerFields,width:640,maxHeight:c,autoHeight:!0,content:e,buttons:[{label:this.nls.ok,
onClick:h.hitch(this,function(){this._allLayerFields[b]=g.getData();var c=l?l.getValue():!1;this.displayFieldsTable.editRow(a,{showAttachments:c});n.close();n=null})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:h.hitch(this,function(){n.close();n=null})}],onClose:function(){n=null}});g.startup()},_createFieldsTable:function(a){for(var c=null,b={fields:[{name:"show",title:this.nls.fieldVisibility,type:"checkbox","class":"show",onChange:h.hitch(this,function(a){var b=c.getData();
if(!d.some(b,h.hitch(this,function(a){return a.show}))&&(new n({message:this.nls.fieldCheckWarning}),b=c.getRowData(a)))b.show=!0,c.editRow(a,b)})},{name:"name",title:this.nls.fieldName,type:"text"},{name:"alias",title:this.nls.fieldAlias,editable:!0,type:"text"},{name:"actions",title:this.nls.fieldActions,type:"actions",actions:["up","down"],"class":"symbol"}],selectable:!0,autoHeight:!1,style:{height:"300px",maxHeight:"300px"}},c=new p(b),b=0;b<a.length;b++)a[b].show=void 0===a[b].show?!0:!!a[b].show,
c.addRow(a[b]);return c},setConfig:function(a){this.config=a;this.displayFieldsTable.clear();this._allLayerFields=[];this._processTableData().then(h.hitch(this,function(a){this._init(a);this.shelter.hide()}),h.hitch(this,function(a){new n({message:a.message||a})}))},onLayerInfosChanged:function(a,c,b){"added"!==c||(!b||!a)||b.getSupportTableInfo().then(h.hitch(this,function(a){a.isSupportedLayer&&(this._layerInfos&&0===this._layerInfos.length?this._delayedLayerInfos.push(b):this._layerInfos&&(0<this._layerInfos.length&&
!this._getLayerInfoById(b.id))&&(this._delayedLayerInfosAfterInit.push(b),this._processDelayedLayerInfosAfterInit(this._delayedLayerInfosAfterInit)))}))},_processDelayedLayerInfosAfterInit:function(a){for(var c=this._layerInfos.length,d=0;d<a.length;d++){var e=b.getConfigInfoFromLayerInfo(a[d]);this.displayFieldsTable.addRow({label:e.name||e.title,url:e.layer.url,index:""+(c+d),show:e.show});this._allLayerFields.push(e.layer.fields);this._layerInfos.push(a[d])}},_processDelayedLayerInfos:function(){0<
this._delayedLayerInfos.length&&(d.forEach(this._delayedLayerInfos,h.hitch(this,function(a){this._getLayerInfoById(a.id)||this._layerInfos.push(a)})),this._delayedLayerInfos=[])},_processTableData:function(){var a=new e;b.readConfigLayerInfosFromMap(this.map,!0,!0).then(h.hitch(this,function(c){this._layerInfos=c;this._processDelayedLayerInfos();b.readSupportTableInfoFromLayerInfos(this._layerInfos).then(h.hitch(this,function(d){this._tableInfos=d;this.config&&this.config.layerInfos&&0<this.config.layerInfos.length?
(d=b.getConfigInfosFromLayerInfos(this._layerInfos),b.merge(d,this.config.layerInfos,"id",h.hitch(this,function(a,c){a.show=c.show;a.showAttachments=c.showAttachments;a.layer.url=c.layer.url;h.getObject("layer.fields.length",!1,a)&&h.getObject("layer.fields.length",!1,c)?(b.merge(a.layer.fields,c.layer.fields,"name",function(a,c){h.mixin(a,c)}),a.layer.fields=b.syncOrderWith(a.layer.fields,c.layer.fields,"name")):a.layer.fields=c.layer.fields})),this.config.layerInfos=d,this._unSpportQueryCampsite.fromConfig=
!0,this._unSpportQueryCampsite.layerNames=this._getUnsupportQueryLayerNames(this.config.layerInfos),a.resolve(d)):(this._unSpportQueryCampsite.fromConfig=!1,this._unSpportQueryCampsite.layerNames=this._getUnsupportQueryLayerNames(this._layerInfos),a.resolve(b.getConfigInfosFromLayerInfos(c)))}),function(c){console.error(c);a.reject(c)})}),h.hitch(this,function(c){console.error(c);a.reject(c)}));return a},_getUnsupportQueryLayerNames:function(a){var c=[];d.forEach(a,h.hitch(this,function(a){var b=
this._getSupportTableInfoById(a.id);b&&!b.isSupportQuery&&c.push(a.name||a.title)}));return c},_init:function(a){for(var c=[],b=0;b<a.length;b++){var d=a[b].show&&this._getSupportTableInfoById(a[b].id).isSupportQuery;this.displayFieldsTable.addRow({label:a[b].name||a[b].title,url:a[b].layer.url,index:""+b,show:d,showAttachments:!!a[b].showAttachments});this._allLayerFields.push(a[b].layer.fields);this._unSpportQueryCampsite.fromConfig&&(d=(d=this._unSpportQueryCampsite.layerNames)&&-1<d.indexOf(a[b].name||
a[b].title),a[b].show&&d&&c.push(a[b].name||a[b].title))}this._unSpportQueryCampsite.fromConfig&&0<c.length&&new n({message:this.nls.unsupportQueryLayers+"\x3cbr\x3e\x3cbr\x3e"+c.toString()});this.config.hideExportButton?this.exportcsv.uncheck():this.exportcsv.check();this.config.initiallyExpand?this.expand.check():this.expand.uncheck();this._canUseOpenAtStart()&&(this.openAtStart?this.expand.check():this.expand.uncheck(),this.expand.status=!1,f.addClass(this.expand.domNode,"disable-checkbox"));this.config.filterByMapExtent?
this.filterByMapExtent.check():this.filterByMapExtent.uncheck()},_canUseOpenAtStart:function(){return this.closeable||!this.isOnScreen},_getLayerInfoById:function(a){for(var b=0,d=this._layerInfos.length;b<d;b++)if(this._layerInfos[b].id===a)return this._layerInfos[b]},_getSupportTableInfoById:function(a){for(var b=0,d=this._tableInfos.length;b<d;b++)if(this._tableInfos[b].id===a)return this._tableInfos[b]},getConfig:function(){var a=this.displayFieldsTable.getData(),b=[],e=a.length;if(this.config&&
this.config.layerInfos&&0<this.config.layerInfos.length)d.forEach(a,h.hitch(this,function(d,e){var f=this.config.layerInfos[e],g={};g.name=f.name||f.title;g.id=f.id;g.layer={};g.layer.url=a[e].url;g.layer.fields=this._allLayerFields[e];g.show=a[e].show;g.showAttachments=a[e].showAttachments;b.push(g)}));else for(var f=0;f<e;f++){var g={};g.name=this._layerInfos[f].name||this._layerInfos[f].title;g.id=this._layerInfos[f].id;g.layer={};g.layer.url=a[f].url;g.layer.fields=this._allLayerFields[f];g.show=
a[f].show;g.showAttachments=a[f].showAttachments;b.push(g)}this.config.layerInfos=b;this.config.hideExportButton=!this.exportcsv.getValue();this.config.filterByMapExtent=this.filterByMapExtent.getValue();this._canUseOpenAtStart()||(this.config.initiallyExpand=this.expand.getValue());return this.config}})});