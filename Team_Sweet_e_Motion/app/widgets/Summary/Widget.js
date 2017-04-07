// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"widgets/Summary/ClusterLayer":function(){define("dojo/_base/declare dojo/_base/array dojo/_base/Color esri/layers/GraphicsLayer esri/graphic esri/geometry/geometryEngine esri/geometry/Extent esri/geometry/Point esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol".split(" "),function(f,d,b,a,m,e,z,v,l,B,D,k){return f("ClusterLayer",[a],{constructor:function(a){this.name=a.id;this.displayOnPan=a.displayOnPan||!1;this._map=a.map;this.clusterSize=
a.clusterSize||100;this.color=a.color||"#ff0000";this.countField=a.countField;this._features=[];try{this.setFeatures(a.features)}catch(b){console.log(b)}this.loaded=!0;this.onLoad(this)},setFeatures:function(a){this._map&&this._map.infoWindow.isShowing&&this._map.infoWindow.hide();this._features=a;this._clusterFeatures()},setColor:function(a){this.color=a;this._clusterFeatures()},_clusterFeatures:function(){this.clear();var a=this._features;if(0<a.length){var d=this.clusterSize,f=[],A=this._map.spatialReference,
t=this._map.extent,p=t.normalize();1<p.length&&(t=e.union(p).getExtent());for(var p=new v(t.xmin,t.ymax,A),r=Math.ceil(this._map.height/d),s=Math.ceil(this._map.width/d),q=t.getWidth()/this._map.width*d,d=t.getHeight()/this._map.height*d,t=0;t<r;t++)for(var C=0;C<s;C++){var x=p.x+q*C,u=p.y-d*t,u=new z(x,u-d,x+q,u,A),x=[],y;for(y in a){var h=a[y];u.contains(h.geometry)&&x.push(h)}0<x.length&&(u=this._getClusterCenter(x),f.push({center:u,graphics:x}))}for(var g in f)a=f[g],A=this._getClusterCount(a),
p=a.graphics,r=A.toString(),s=19*r.length,q=this._getSymbolColor(),d=new B(B.STYLE_NULL,new b(0,0,0,0),0),y=new l(l.STYLE_CIRCLE,1.6*s,d,new b([q[0],q[1],q[2],0.4])),s=new l(l.STYLE_CIRCLE,s,d,new b([q[0],q[1],q[2],0.8])),q=new D,q.family="Arial",q.size="12px",r=new k(r,q,"#ffffff"),r.setOffset(0,-4),p={Count:A,Data:p},1<A?(this.add(new m(a.center,y,p)),this.add(new m(a.center,s,p)),this.add(new m(a.center,r,p))):(a=a.graphics[0].geometry,this.add(new m(a,s,p)),this.add(new m(a,r,p)))}},_getSymbolColor:function(){var a=
b.fromString(this.color),d=b.fromString("#000000");return b.blendColors(a,d,0.1).toRgb()},_getClusterCount:function(a){for(var b=0,d=0;d<a.graphics.length;d++)var e=a.graphics[d],b=this.countField&&e.attributes[this.countField]?b+e.attributes[this.countField]:b+1;return b},_getClusterCenter:function(a){var b=0,e=0,f=a.length;d.forEach(a,function(a){b+=a.geometry.x;e+=a.geometry.y},this);return new v(b/f,e/f,a[0].geometry.spatialReference)}})})},"widgets/Summary/c":function(){define(function(){function f(d,
b){this.wrapper=d;this.wrapperId=d.id;this.timeoutTimerId=this.intervalTimerId=null;this.isAnimating=!1;this.animationProgress=this.animationStep=0;this.beforeAnimation=[];this.afterAnimation=[];this.digitsNumber=b.digitsNumber||6;this.direction=b.direction||f.ScrollDirection.Mixed;this.value=b.value||"";this.characterSet=b.characterSet||f.DefaultCharacterSets.allCharacters;this.characterNumber=this.characterSet.length;this.animationDuration=b.animationDuration||50;var a=["wrapper","left","inner",
"right","marker"];this.extraClassName={};for(var m=0;m<a.length;m++)this.extraClassName[a[m]]=b.extraClassName?"string"===typeof b.extraClassName?b.extraClassName:b.extraClassName[a[m]]||"":"";this.onLoad=b.onLoad||null;this.onValueChanged=b.onValueChanged||null;var e=this;this.imageLoadCounter=0;this.charsImage=new Image;this.charsImage.onload=function(){e.finishLoading()};this.charsImage.src=b.charsImageUrl;this.markerImage=new Image;this.markerImage.onload=function(){e.finishLoading()};this.markerImage.src=
b.markerImageUrl}f.DefaultCharacterSets={numericUp:"0123456789",numericDown:"9876543210",alphabeticUp:" ABCDEFGHIJKLMNOPQRSTUVWXYZ",alphabeticDown:"ZYXWVUTSRQPONMLKJIHGFEDCBA ",alphanumericUp:"0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZ",alphanumericDown:"9876543210ZYXWVUTSRQPONMLKJIHGFEDCBA ",calculator:"0123456789.,+-*/\x3d ",qwertyKeybord:" QWERTYUIOPASDFGHJKLZXCVBNM1234567890-\x3d[]\\;',./~`!@#$%^\x26*()_+{}|:\"\x3c\x3e?",allCharacters:" ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-\x3d[]\\;',./~`!@#$%^\x26*()_+{}|:\"\x3c\x3e?"};
f.ScrollDirection={Downwards:-1,Mixed:0,Upwards:1};f.prototype.finishLoading=function(){this.imageLoadCounter++;if(!(2!==this.imageLoadCounter||!this.charsImage.width||!this.markerImage.width)){this.digitWidth=this.charsImage.width;this.digitHeight=Math.ceil(this.charsImage.height/this.characterNumber);this.offsetHeight=(this.markerImage.height-this.digitHeight)/2;this.makrer=document.createElement("DIV");this.makrer.className="counter_marker"+(this.extraClassName.marker?" ":"")+this.extraClassName.marker;
this.makrer.style.backgroundImage="url('"+this.markerImage.src+"')";this.makrer.style.width=this.digitWidth*this.digitsNumber+this.digitsNumber+"px";this.makrer.style.height=this.markerImage.height+"px";this.wrapper.className=this.wrapper.className+(this.extraClassName.marker?" ":"")+this.extraClassName.marker;this.wrapper.style.width=this.makrer.style.width;this.wrapper.style.height=this.makrer.style.height;this.wrapper.appendChild(this.makrer);for(var d=0,b=0,d=0;d<this.digitsNumber;d++){var a=
document.createElement("DIV");a.id=this.wrapperId+"_"+d;a.className="counter_character";a.className=0===d?a.className+(" counter_character_left"+(this.extraClassName.left?" ":"")+this.extraClassName.left):d===this.digitsNumber-1?a.className+(" counter_character_right"+(this.extraClassName.right?" ":"")+this.extraClassName.right):a.className+(" counter_character_inner"+(this.extraClassName.inner?" ":"")+this.extraClassName.inner);a.style.backgroundImage="url('"+this.charsImage.src+"')";a.style.width=
this.digitWidth+"px";a.style.height=this.markerImage.height+"px";a.style.top=-this.markerImage.height+"px";this.wrapper.appendChild(a);b+=f._parseInt(f._elementCurrentStyle(a,"margin-left"));b+=f._parseInt(f._elementCurrentStyle(a,"margin-right"));b+=f._parseInt(f._elementCurrentStyle(a,"border-left-width"));b+=f._parseInt(f._elementCurrentStyle(a,"border-right-width"));b+=this.digitWidth}this.makrer.style.width=b+"px";this.wrapper.style.width=b+"px";if(null!==this.onLoad)this.onLoad();this.setValue(this.value,
100)}};f.prototype.animate=function(d){this.animationProgress=d?1:this.animationProgress+this.animationStep;1<=this.animationProgress&&(this.animationProgress=1,this.timeoutTimerId&&clearTimeout(this.timeoutTimerId),this.intervalTimerId&&clearTimeout(this.intervalTimerId),this.isAnimating=!1,this.intervalTimerId=this.timeoutTimerId=null);d=0;var b=this.wrapper.id+"_";for(d=0;d<this.beforeAnimation.length;d++){var a=f._getDijitById(this,b+(this.digitsNumber-d-1));if(a){var m=0,m=1>this.animationProgress?
this.beforeAnimation[d]+(this.afterAnimation[d]-this.beforeAnimation[d])*this.animationProgress:this.afterAnimation[d];a.style.backgroundPosition="0px "+f._parseInt(m)+"px"}}};f.prototype.setValue=function(d,b){if(2!==this.imageLoadCounter||!this.charsImage.width||!this.markerImage.width){if(this.value=d,null!==this.onValueChanged)this.onValueChanged()}else{this.timeoutTimerId&&clearTimeout(this.timeoutTimerId);this.intervalTimerId&&clearTimeout(this.intervalTimerId);var a=0,m=this.wrapper.id+"_",
e;this.beforeAnimation=[];this.afterAnimation=[];for(a=this.digitsNumber-1;0<=a;a--)e=f._getDijitById(this,m+(this.digitsNumber-a-1)),this.beforeAnimation[a]=Number(e.style.backgroundPosition.substr(4).replace("px",""));for(var z=this.value.toString?this.value.toString():String(this.value),v=d.toString?d.toString():String(d),a=this.digitsNumber-1;0<=a;a--){e=f._getDijitById(this,m+(this.digitsNumber-a-1));e=-1;0<=z.length-a-1&&(e=z.charAt(z.length-a-1).toUpperCase(),e=this.characterSet.indexOf(e));
-1===e&&(e=this.characterSet.indexOf(" "));-1===e&&(e=this.characterSet.indexOf("0"));-1===e&&(e=0);var l=-1;0<=v.length-a-1&&(l=v.charAt(v.length-a-1).toUpperCase(),l=this.characterSet.indexOf(l));-1===l&&(l=this.characterSet.indexOf(" "));-1===l&&(l=this.characterSet.indexOf("0"));-1===l&&(l=0);this.afterAnimation[a]=Math.round(-this.digitHeight*l+this.offsetHeight);0===this.direction?Math.abs(e-l)>this.characterNumber/2&&(this.beforeAnimation[a]=l<e?this.beforeAnimation[a]+this.digitHeight*this.characterNumber:
this.beforeAnimation[a]-this.digitHeight*this.characterNumber):-1===this.direction?this.beforeAnimation[a]>this.afterAnimation[a]&&(this.beforeAnimation[a]-=this.digitHeight*this.characterNumber):1===this.direction&&this.beforeAnimation[a]<this.afterAnimation[a]&&(this.beforeAnimation[a]+=this.digitHeight*this.characterNumber)}this.value=d;if(null!==this.onValueChanged)this.onValueChanged();b&&0<parseInt(b,10)||(b=1E3);this.isAnimating=!0;a=this.animationDuration;this.animationStep=a/b;this.animationProgress=
0;var B=this;b>a&&(this.intervalTimerId=setInterval(function(){B.animate(!1)},a));this.timeoutTimerId=setTimeout(function(){B.animate(!0)},b)}};f._parseInt=function(d){d=parseInt(d,10);isNaN(d)&&(d=0);return d};f._elementCurrentStyle=function(d,b){if(d.currentStyle){for(var a=0,f="",e=!1,a=0;a<b.length;a++)b.charAt(a)&&("-"!==b.charAt(a)||"-"!==b.charAt(a).toString())?(f=b.charAt(a).toString?f+(e?b.charAt(a).toString().toUpperCase():b.charAt(a).toString()):f+(e?b.charAt(a).toUpperCase():b.charAt(a)),
e=!1):e=!0;return d.currentStyle[f]}return getComputedStyle(d,null).getPropertyValue(b)};f._getDijitById=function(d,b){for(var a=d.wrapper.childNodes,f=0;f<a.length;f++){var e=a[f];if(e.id===b)return e}return null};return f})},"widgets/Summary/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Summary/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"panelBottom"\x3e\r\n    \x3c!-- Panel Main --\x3e\r\n    \x3cdiv id\x3d"panelMain"\x3e\r\n      \x3c!-- Panel Container --\x3e\r\n      \x3cdiv id\x3d"panelContainer" data-dojo-attach-point\x3d"containerNode"\x3e\r\n        \x3cdiv id\x3d"panel0" class\x3d"col" data-dojo-attach-point\x3d"panel0Node"\x3e\r\n          \x3cdiv id\x3d"title0" class\x3d"titleCounter" data-dojo-attach-point\x3d"title0Node"\x3e\x3c/div\x3e\r\n          \x3cdiv id\x3d"counter0" class\x3d"counter" data-dojo-attach-point\x3d"counter0Node"\x3e\x3c/div\x3e\r\n          \x3cdiv id\x3d"units0" class\x3d"units" data-dojo-attach-point\x3d"units0Node"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv id\x3d"panel1" class\x3d"col line" data-dojo-attach-point\x3d"panel1Node"\x3e\r\n          \x3cdiv id\x3d"title1" class\x3d"titleCounter" data-dojo-attach-point\x3d"title1Node"\x3e\x3c/div\x3e\r\n          \x3cdiv id\x3d"counter1" class\x3d"counter" data-dojo-attach-point\x3d"counter1Node"\x3e\x3c/div\x3e\r\n          \x3cdiv id\x3d"units1" class\x3d"units" data-dojo-attach-point\x3d"units1Node"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv id\x3d"panel2" class\x3d"col line" data-dojo-attach-point\x3d"panel2Node"\x3e\r\n          \x3cdiv id\x3d"title2" class\x3d"titleCounter" data-dojo-attach-point\x3d"title2Node"\x3e\x3c/div\x3e\r\n          \x3cdiv id\x3d"counter2" class\x3d"counter" data-dojo-attach-point\x3d"counter2Node"\x3e\x3c/div\x3e\r\n          \x3cdiv id\x3d"units2" class\x3d"units" data-dojo-attach-point\x3d"units2Node"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv id\x3d"panel3" class\x3d"col line" data-dojo-attach-point\x3d"panel3Node"\x3e\r\n          \x3cdiv id\x3d"title3" class\x3d"titleCounter" data-dojo-attach-point\x3d"title3Node"\x3e\x3c/div\x3e\r\n          \x3cdiv id\x3d"counter3" class\x3d"counter" data-dojo-attach-point\x3d"counter3Node"\x3e\x3c/div\x3e\r\n          \x3cdiv id\x3d"units3" class\x3d"units" data-dojo-attach-point\x3d"units3Node"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Panel Nav --\x3e\r\n    \x3cdiv id\x3d"panelNav"\x3e\r\n      \x3cul class\x3d"navigation" data-dojo-attach-point\x3d"pagesListNode"\x3e\x3c/ul\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Panel Message --\x3e\r\n    \x3cdiv id\x3d"panelMessage" data-dojo-attach-point\x3d"messageNode"\x3e\r\n      \x3cspan id\x3d"msgText" data-dojo-attach-point\x3d"messageTextNode"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Panel Footer --\x3e\r\n    \x3cdiv id\x3d"panelFooter" data-dojo-attach-point\x3d"footerNode" class\x3d"jimu-main-background"\x3e\r\n      \x3cdiv id\x3d"panelLabel" data-dojo-attach-point\x3d"labelNode"\x3e\x3c/div\x3e\r\n      \x3cdiv id\x3d"panelClose" data-dojo-attach-event\x3d"onclick:_close"\x3e\x3c/div\x3e\r\n      \x3cdiv id\x3d"panelFooterContent" data-dojo-attach-point\x3d"footerContentNode"\x3e\r\n        \x3cspan id\x3d"labelFilter"\x3e${nls.filter}\x3c/span\x3e\r\n        \x3cdiv id\x3d"panelFilter"\x3e\r\n          \x3cselect id\x3d"selFilter" data-dojo-attach-point\x3d"filterNode"\x3e\x3c/select\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Summary/css/style.css":".jimu-widget-summary {color: #ffffff !important; background-color: #4c4c4c; left: 0px !important; right: 0px !important; bottom: 0px; height: 140px !important; display: block;}.jimu-widget-summary .panelBottom {position: absolute; width: 100%; height: 140px; left: 0px; top: 0px; text-align: center; padding: 0px;}.jimu-widget-summary #panelMessage {position: absolute; top: 0px; text-align: center; width: 100%; height: 40px; line-height: 40px; display: none;}.jimu-widget-summary #panelMain {position: absolute; width: 100%; height: 80px; left: 0px; top: 0px; text-align: center; padding: 0px;}.jimu-widget-summary #panelContainer {margin: auto; width: 100%; max-width: 880px; height: 80px; overflow: hidden; padding-top: 0px;}.jimu-widget-summary .col {position: relative; width: 219px; height: 80px; padding: 0px; margin-top: 10px; margin-bottom: 0px; display: none; text-align: center; float: left;}.jimu-rtl .jimu-widget-summary .col {float: right;}.jimu-widget-summary .line {border-left: 1px solid #ffffff; border-left: 1px solid rgba(255, 255, 255, 0.5);}.jimu-rtl .jimu-widget-summary .line {border-left: none; border-right: 1px solid #ffffff; border-right: 1px solid rgba(255, 255, 255, 0.5);}.jimu-widget-summary .titleCounter {position: absolute; top: 0px; left: 10px; right: 10px; height: 15px; font-weight: bold; line-height: 15px; letter-spacing: 1px; text-align: right; display: block; overflow: hidden;}.jimu-widget-summary .counter {position: absolute; top: 20px; left: 7px; width: 204px; height: 40px; display: block;}.jimu-widget-summary .units {position: absolute; bottom: 0px; left: 10px; right: 109px; height: 15px; font-weight: normal; line-height: 15px; letter-spacing: 1px; text-align: right; display: block;}.jimu-widget-summary .counter_character {display: inline; float: left; position: relative; margin-left: 0px; margin-right: 0px;}.jimu-widget-summary .counter_character_left {margin-left: 0px; margin-right: 0px;}.jimu-widget-summary .counter_character_inner {margin-left: 0px; margin-right: 0px;}.jimu-widget-summary .counter_character_right {margin-left: 0px; margin-right: 0px;}.jimu-widget-summary .counter_marker {position: relative; z-index: 10;}.jimu-widget-summary #panelNav {position: absolute; width: 100%; height: 20px; left: 0px; bottom: 40px; padding: 0px; line-height: 20px;}.jimu-widget-summary .navigation {list-style-type: none; width: 60px; height: 20px; margin: auto; padding: 0px;}.jimu-widget-summary .navigation li {width: 20px; height: 20px; float: left; background: url(images/dot.png);}.jimu-rtl .jimu-widget-summary .navigation li {float: right;}.jimu-widget-summary .navigation li:hover {background: url(images/doton.png);}.jimu-widget-summary .navigation li.active {background: url(images/doton.png);}.jimu-widget-summary #panelFooter {position: absolute; bottom: 0px; left: 0px; right: 0px; height: 40px; line-height: 40px; background-color: #3d3d3d; background-color: rgba(0, 0, 0, 0.2); border-bottom: 1px solid #353535; border-bottom: 1px solid rgba(0, 0, 0, 0.3);}.jimu-widget-summary #panelLabel {position: absolute; height: 40px; line-height: 40px; padding: 0 0 0 10px; text-align: left; display: block; font-size: 16px;}.jimu-rtl .jimu-widget-summary #panelLabel {text-align: right; padding: 0 10px 0;}.jimu-widget-summary #panelClose {position: absolute; left: auto; right: 0px; width: 24px; height: 40px; line-height: 40px; text-align: center; display: block; cursor: pointer; background-image: url('images/x.png'); background-repeat: no-repeat; background-position: center center; background-size: 18px;}.jimu-rtl .jimu-widget-summary #panelClose {position: absolute; left: 0px; right: auto;}.jimu-widget-summary #panelFooterContent {position: absolute; left: auto; right: 24px; height: 40px; line-height: 40px; text-align: right; display: none;}.jimu-rtl .jimu-widget-summary #panelFooterContent {position: absolute; left: 24px; right: auto; text-align: left;}.jimu-widget-summary #panelFilter {float: right; position: relative; margin: 5px 10px 5px 10px; width: 200px; height: 30px; overflow: hidden; background-color: #353535; background-color: rgba(0, 0, 0, 0.3); z-index: 2; border-radius: 4px;}.jimu-rtl .jimu-widget-summary #panelFilter {float: left;}#labelFilter {display: inline-block;}.jimu-widget-summary #selFilter {position: absolute; left: 0px; top: 0px; margin: 0px; color: #ffffff; outline: transparent; background: transparent; width: 200px; padding: 0px 0px 0px 5px; font-size: 14px; line-height: 1; border: none; border-radius: 0; height: 30px;}.jimu-widget-summary option {background-color: #ffffff; color: #000000;}@media only screen and (max-width: 500px) {#panelLabel {display: none !important;} #labelFilter {display: none !important;}}",
"*now":function(f){f(['dojo/i18n!*preload*widgets/Summary/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare jimu/BaseWidget jimu/LayerInfos/LayerInfos jimu/utils dojo/dom dojo/dom-style dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/_base/event dojo/_base/html dojo/_base/lang dojo/_base/array dojo/_base/xhr dojo/query esri/geometry/geometryEngine esri/graphic esri/layers/FeatureLayer esri/tasks/query dojo/number esri/tasks/StatisticDefinition ./ClusterLayer esri/graphicsUtils dojo/on widgets/Summary/c".split(" "),function(f,d,b,a,m,e,z,v,l,B,D,k,w,F,E,A,t,p,r,s,q,C,
x,u,y){return f([d],{baseClass:"jimu-widget-summary",name:"Summary",clusterLayer:null,counter0:null,counter1:null,counter2:null,counter3:null,fieldCount:0,pageCount:0,page:0,visCount:4,summaryIds:[],summaryFeatures:[],postCreate:function(){this.inherited(arguments);this.config.summaryLayer?(this.showFeatureCount=this.config.showFeatureCount,this.featureCountLabel=this.config.featureCountLabel,this.displayCluster=this.config.displayCluster,this.filterField=this.config.summaryLayer.filterField):this._showMessage(this.nls.missingSummaryLayerInConfig)},
startup:function(){this.inherited(arguments);this._updateUI();this._loadCounters();""!==this.filterField&&e.set(this.footerContentNode,"display","block");var h=new C({id:this.label,displayOnPan:!0,map:this.map,clusterSize:120,color:"#6e6e6e",countField:null,features:[]});this.map.addLayer(h);this.clusterLayer=h;this.own(u(this.clusterLayer,"click",k.hitch(this,this._clusterClick)));this.labelNode.innerHTML=a.sanitizeHTML(this.label?this.label:"");this._getStyleColor(null);this._watchLayerFilters();
this.opLayers=this.map.itemInfo.itemData.operationalLayers;this._processOperationalLayers();this.own(u(this.filterNode,"change",k.hitch(this,this._setFilter)))},destroy:function(){this.clusterLayer&&this.map.removeLayer(this.clusterLayer);this._stopRefresh();this.inherited(arguments)},onOpen:function(){this.inherited(arguments);this._updateLayerVisibility();this._summarize();this._startRefresh()},onClose:function(){this._updateLayerVisibility();this._stopRefresh();this.inherited(arguments)},resize:function(){"closed"!==
this.state&&(this.inherited(arguments),this.resizeTimer&&(clearTimeout(this.resizeTimer),this.resizeTimer=null),this.resizeTimer=setTimeout(k.hitch(this,this._loadPages),600))},onAppConfigChanged:function(h,a,c){switch(a){case "styleChange":this._updateUI(c)}},_updateUI:function(h){this._getStyleColor(h)},setPosition:function(h,g){if("BoxTheme"===this.appConfig.theme.name||"DartTheme"===this.appConfig.theme.name||"LaunchpadTheme"===this.appConfig.theme.name)this.inherited(arguments);else{this.position=
{left:"0px",right:"0px",bottom:"0px",height:"140px"};var c=a.getPositionStyle(this.position);c.position="absolute";g=this.map.id;D.place(this.domNode,g);D.setStyle(this.domNode,c);this.started&&this.resize();"TabTheme"===this.appConfig.theme.name&&(c=this.widgetManager.getControllerWidgets()[0],this.widgetManager.minimizeWidget(c.id))}},_getStyleColor:function(h){var a=this.appConfig.theme.name,c=this.appConfig.theme.styles[0];h&&(c=h);F.get({url:"./themes/"+a+"/manifest.json",handleAs:"json",load:k.hitch(this,
function(h){h=h.styles;for(var a=0;a<h.length;a++){var g=h[a];g.name===c&&(e.set(this.footerNode,"background-color",g.styleColor),this.clusterLayer.setColor(g.styleColor))}})})},_clusterClick:function(h){var a=h.graphic,c=a.attributes.Count,n=a.attributes.Data,a=c+" Features";1===c&&(a=c+" Feature");for(var c=this._summarizeAttributes(n),n="",b=0;b<this.fieldCount;b++)if(0!==b||this.config.showFeatureCount)n+=this.aliases[b]+": "+c[b]+"\x3cbr/\x3e\x3cbr/\x3e";this.map.infoWindow.setTitle(a);this.map.infoWindow.setContent(n);
this.map.infoWindow.show(h.mapPoint);B.stop(h)},_loadCounters:function(){var h={digitsNumber:17,direction:y.ScrollDirection.Upwards,characterSet:"0123456789.,- ",charsImageUrl:"widgets/Summary/images/c.png",markerImageUrl:"widgets/Summary/images/m.png"};this.counter0=new y(this.counter0Node,h);this.counter0.value=0;this.counter1=new y(this.counter1Node,h);this.counter1.value=0;this.counter2=new y(this.counter2Node,h);this.counter2.value=0;this.counter3=new y(this.counter3Node,h);this.counter3.value=
0},_watchLayerFilters:function(){this.map.itemId&&b.getInstance(this.map,this.map.itemInfo).then(k.hitch(this,function(h){this.layerInfosObj=h;u(this.layerInfosObj,"layerInfosFilterChanged",k.hitch(this,this._layerFilterChanged))}))},_layerFilterChanged:function(h){w.forEach(h,k.hitch(this,function(h){this.config.summaryLayer.id===h.id&&this._summarize()}))},_processOperationalLayers:function(){if(this.opLayers){var h=this.config.summaryLayer.id;""!==h?w.some(this.opLayers,k.hitch(this,function(a){if("ArcGISFeatureLayer"===
a.layerType){if(a.layerObject&&a.id===h){var c=[];w.forEach(this.config.summaryLayer.fields,function(a){c.push(a.field)});this.targetLayer=a.layerObject;this.opLayer=new p(a.layerObject.url,{outFields:c,infoTemplate:a.layerObject.infoTemplate});this._setLayer();return!0}if(a.featureCollection)for(;0<a.featureCollection.layers.length;)return a=a.featureCollection.layers[0].layerObject,a.id===h&&(this.opLayer=this.targetLayer=a,this.opLayerIsFeatureCollection=!0),this._setLayer(),!0}})):this._showMessage(this.nls.missingSummaryLayerInConfig)}else this._showMessage(this.nls.missingLayerInWebMap)},
_setLayer:function(){this.map.infoWindow.isShowing&&this.map.infoWindow.hide();this._closeMessage();this.targetLayerVisibility=this.targetLayer.visible?!0:!1;this.own(u(this.map,"extent-change",k.hitch(this,this._summarize)));this._configureFields();this._populateFilterValues();this._loadPages();"esriGeometryPoint"===this.opLayer.geometryType&&this.displayCluster&&this.clusterLayer.setVisibility(!0)},_configureFields:function(){if(this.config.summaryLayer&&this.config.summaryLayer.fields){var a=[this.featureCountLabel],
g=[];w.forEach(this.config.summaryLayer.fields,k.hitch(this,function(c){g.push(c);var n=c.label;0===n.length&&(n=this._getFieldAlias(c.field));a.push(n)}));this.fields=[{field:"",type:"COUNT",label:this.featureCountLabel}].concat(g);this.aliases=a;this.fieldCount=this.fields.length}},_populateFilterValues:function(){var a=this.filterField;if(a){var g=[],c=this._getFilterField(a);if(c&&c.domain&&"codedValue"===c.domain.type){for(var c=c.domain.codedValues,n=0;n<c.length;n++){var b=c[n];g.push({value:b.code,
label:b.name})}this._populateOptions(g)}else if(this.opLayerIsFeatureCollection){var d={};w.forEach(this.opLayer.graphics,function(c){c=c.attributes[a];d[c]||(d[c]=!0,g.push({value:c,label:c}))});g.sort(function(a,h){return a.value<h.value?-1:a.value>h.value?1:0});this._populateOptions(g)}else c=new r,c.returnGeometry=!1,c.returnDistinctValues=!0,c.where="1\x3d1",c.outFields=[a],c.orderByFields=[a],this.opLayer.queryFeatures(c,k.hitch(this,function(c){for(var b=0;b<c.features.length;b++){var n=c.features[b].attributes[a];
null!==n&&g.push({value:n,label:n})}this._populateOptions(g)}))}},_getFilterField:function(a){var g;w.some(this.targetLayer.fields,function(c){if(c.name===a)return g=c,!0});return g},_getFieldAlias:function(a){if(this.opLayer.infoTemplate)for(var g=this.opLayer.infoTemplate.info.fieldInfos,c=0;c<g.length;c++){var b=g[c];if(b.fieldName===a)return b.label}return a},_loadPages:function(){if(this.fields)try{var a=l.getContentBox(this.containerNode).w;this.visCount=Math.floor(a/220);var g=this.fieldCount=
this.fields.length;this.config.showFeatureCount||(g-=1);this.pageCount=Math.ceil(g/this.visCount);var c=this.pagesListNode;c.innerHTML="";if(1<this.pageCount){e.set(c,"width",20*this.pageCount+"px");for(a=0;a<this.pageCount;a++){var b=v.create("li",{id:"pageSum"+a},c);this.own(u(b,"click",k.hitch(this,this._setPage,a)))}}this.page=0;this._setPage(0)}catch(d){console.log(d)}},_setPage:function(a){var g=E("\x3e li",this.pagesListNode);w.forEach(g,function(c){c.id==="pageSum"+a?z.add(c,"active"):z.remove(c,
"active")});this.page=a;var g=E("\x3e div",this.containerNode),c=0;w.forEach(g,function(a){c<this.visCount?e.set(a,"display","block"):e.set(a,"display","none");c+=1});this._updateCounters()},_summarize:function(){this.sumTimer&&(clearTimeout(this.sumTimer),this.sumTimer=null);this.sumTimer=setTimeout(k.hitch(this,this._summarizeFeatures),300)},_summarizeFeatures:function(){this.summaryIds=[];this.summaryFeatures=[];if(this.opLayer){var a=this.map.extent,g=a.normalize();1<g.length&&(a=A.union(g).getExtent());
if(this.opLayerIsFeatureCollection){var g=[],c=this.filterField,b;c&&(b=this.filterNode,b=b.options[b.selectedIndex].value);for(var d=0;d<this.opLayer.graphics.length;d++){var e=this.opLayer.graphics[d];a.intersects(e.geometry)&&(c?(e.attributes[c].toString()===b||""===b)&&g.push(e):g.push(e))}this.summaryFeatures=g;this.displayCluster&&"esriGeometryPoint"===this.targetLayer.geometryType&&this.clusterLayer.setFeatures(g);this.sumData=this._summarizeAttributes(g);this._updateCounters()}else this._queryFeatures(a)}},
_queryFeatures:function(a){this.summaryIds=[];this.summaryFeatures=[];var b=new r;b.geometry=a;var c=this.config.summaryLayer.id,d="";this.layerInfosObj.traversal(function(a){if(c===a.id&&a.getFilter())return d=a.getFilter(),!0});b.where=d;this.defQuery&&(this.defQuery.cancel("new"),this.defQuery=null);this.defQuery=this.opLayer.queryIds(b,k.hitch(this,function(a){this.summaryIds=a;0<this.summaryIds.length?this._queryFeaturesByIds():(this.sumData=this._summarizeAttributes(this.summaryFeatures),this._updateCounters())}))},
_queryFeaturesByIds:function(){var a=this.opLayer.maxRecordCount||1E3,b=this.summaryIds.slice(0,a);this.summaryIds.splice(0,a);a=new r;a.outSpatialReference=this.map.spatialReference;a.returnGeometry=this.displayCluster&&"esriGeometryPoint"===this.targetLayer.geometryType?!0:!1;a.objectIds=b;this.opLayer.queryFeatures(a,k.hitch(this,function(a){this.summaryFeatures=this.summaryFeatures.concat(a.features);this.displayCluster&&"esriGeometryPoint"===this.targetLayer.geometryType&&this.clusterLayer.setFeatures(this.summaryFeatures);
this.sumData=this._summarizeAttributes(this.summaryFeatures);this._updateCounters();0<this.summaryIds.length&&setTimeout(k.hitch(this,this._queryFeaturesByIds),500)}))},_showMessage:function(a){e.set(this.containerNode,"display","none");this.messageTextNode.innerHTML=a;e.set(this.messageNode,"display","block")},_summarizeAttributes:function(a){var b=[];w.forEach(this.fields,k.hitch(this,function(c){var d=c.field.replace(/^\s+|\s+$/g,"");"SUM"===c.type?b.push(this._calculateSum(a,d)):"AVG"===c.type?
b.push(this._calculateAvg(a,d)):"MAX"===c.type?b.push(this._calculateMax(a,d)):"MIN"===c.type?b.push(this._calculateMin(a,d)):"COUNT"===c.type&&b.push(a.length)}));return b},_calculateSum:function(a,b){for(var c=0,d=0;d<a.length;d++){var e=a[d].attributes[b];isNaN(e)||(c+=e)}return c},_calculateAvg:function(a,b){for(var c=a.length,d=0,e=0;e<a.length;e++){var f=a[e].attributes[b];isNaN(f)||(d+=f)}return d/c},_calculateMax:function(a,b){for(var c,d=0;d<a.length;d++){var e=a[d].attributes[b];isNaN(e)||
(0===d?c=e:e>c&&(c=e))}return c},_calculateMin:function(a,b){for(var c,d=0;d<a.length;d++){var e=a[d].attributes[b];isNaN(e)||(0===d?c=e:e<c&&(c=e))}return c},_updateCounters:function(){for(var a=this.visCount,b=0;b<a;b++){var c=this.page*a+b;this.config.showFeatureCount||(c+=1);var d=this["panel"+b+"Node"];c<this.fieldCount?(e.set(d,"display","block"),this.sumData&&this._updateCounter(b,c)):e.set(d,"display","none")}},_updateCounter:function(b,d){var c=this.sumData[d],e=c,f="";1E13<=c&&(e=Math.floor(10*
c/1E12)/10,f="TRILLIONS");c=this["counter"+b];e=this._formatNumber(e);null!==c&&null!==e&&c.setValue(e);this["title"+b+"Node"].innerHTML=a.sanitizeHTML(this.aliases[d]?this.aliases[d]:"");this["units"+b+"Node"].innerHTML=f},_formatNumber:function(a){var b;-100<a&&100>a?(b=s.round(100*a)/100,a=s.format(b,{places:2}),0===a%1&&(a=s.format(b,{places:0}))):(b=s.round(a),a=s.format(b,{places:0}));return a},_closeMessage:function(){e.set(this.messageNode,"display","none");e.set(this.containerNode,"display",
"block")},_populateOptions:function(a){if(0<a.length){var b=this.filterNode;null===b&&console.log("Filter search drop down not configured");v.create("option",{value:"",innerHTML:this.nls.all},b);for(var c=0;c<a.length;c++){var d=a[c];v.create("option",{value:d.value,innerHTML:d.label},b)}}},_setFilter:function(){var a=this.filterNode,b=this.filterField,c=a.options[a.selectedIndex].value,d;if(this.opLayerIsFeatureCollection){var e=[];w.forEach(this.opLayer.graphics,function(a){if(a.attributes[b].toString()===
c||""===c){var d=new t(a.geometry,a.symbol,a.attributes);a.show();e.push(d)}else a.hide()});0<e.length&&((d=x.graphicsExtent(e))?this.map.setExtent(d.expand(2)):0<e.length&&this.map.centerAt(e[0].geometry))}else{var f=this._getFilterField(b),a=b+" \x3d "+c;f&&"esriFieldTypeString"===f.type&&(a=b+" \x3d '"+c+"'");""===c&&(a="1\x3d1");this.opLayer.setDefinitionExpression(a);this.targetLayer.setDefinitionExpression(a);a&&(f=new r,f.returnGeometry=!0,f.where=a,f.outSpatialReference=this.map.spatialReference,
this.opLayer.queryFeatures(f,k.hitch(this,function(a){d=x.graphicsExtent(a.features);this.map.setExtent(d.expand(1.5))})))}},_close:function(){this.widgetManager.closeWidget(this.id)},_updateLayerVisibility:function(){this.targetLayer&&("closed"===this.state?(this.displayCluster&&"esriGeometryPoint"===this.targetLayer.geometryType&&this.targetLayer.setVisibility(this.targetLayerVisibility),this.clusterLayer&&this.clusterLayer.setVisibility(!1)):(this.displayCluster&&"esriGeometryPoint"===this.targetLayer.geometryType&&
this.targetLayer.setVisibility(!1),this.clusterLayer&&this.clusterLayer.setVisibility(!0)))},_stopRefresh:function(){this.interval&&(clearInterval(this.interval),this.interval=null)},_startRefresh:function(){this._stopRefresh();if(this.config.refreshInterval){var a=6E4*this.config.refreshInterval;this.interval=setInterval(k.hitch(this,this._summarize),a)}}})});