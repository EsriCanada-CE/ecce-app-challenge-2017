// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Bookmark/ImageNode":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dojo/on dojo/query jimu/utils dojo/mouse".split(" "),function(k,c,d,g,m,a,b,h){return k([g,m],{templateString:'\x3cdiv class\x3d"jimu-img-node"\x3e\x3c/div\x3e',constructor:function(a,b){},postCreate:function(){this.box=d.create("div",{"class":"node-box"},this.domNode);d.create("img",{src:this.img},this.box);var b=d.create("div",{"class":"node-label"},
this.domNode);d.create("span",{innerHTML:h.sanitizeHTML(this.label),title:this.label},b);this.own(a(this.domNode,"click",c.hitch(this,this.onClick)))},onClick:function(){b(".jimu-img-node",this.getParent().domNode).removeClass("jimu-state-selected");b(this.domNode).addClass("jimu-state-selected")},highLight:function(){b(".jimu-img-node",this.getParent().domNode).removeClass("jimu-state-selected");b(this.domNode).addClass("jimu-state-selected")},startup:function(){}})})},"widgets/Bookmark/LayoutsContainer":function(){define(["dojo/_base/declare",
"dojo/_base/lang","dojo/_base/html","dojo/query","dijit/_WidgetBase"],function(k,c,d,g,m){return k([m],{baseClass:"jimu-tile-container",constructor:function(){this.items=[];this.vmargin=this.hmargin=15;this.itemSize={width:-1,height:-1}},startup:function(){this.inherited(arguments);this.containerDom=this.domNode;d.create("div",{src:this.img},this.box);this.items.forEach(c.hitch(this,function(a){this._placeItem(a)}));this.resize()},_placeItem:function(a){a.domNode&&d.place(a.domNode,this.containerDom)},
addItem:function(a){this.items.push(a);this._placeItem(a);this.resize()},addItems:function(a){this.items=this.items.concat(a);this.items.forEach(c.hitch(this,function(a){this._placeItem(a)}));this.resize()},removeItem:function(a){var b;for(b=0;b<this.items.length;b++)if(this.items[b].label===a){this.items[b].domNode?this.items[b].destroy():d.destroy(this.items[b]);this.items.splice(b,1);this.resize();break}},empty:function(){var a;for(a=0;a<this.items.length;a++)this.items[a].domNode?this.items[a].destroy():
d.destroy(this.items[a]);this.items=[]},resize:function(){var a=this.containerDom.parentElement||this.containerDom.parentNode,b=d.getMarginBox(a),h=this.containerDom;if(279<=b.w&&329>b.w)this._setNodeWidths(h,130);else if(1>=Math.abs(b.w-330))this._setNodeWidths(h,104);else{var f=d.getMarginBox(h).w-20,c=parseInt(f/104,10);0<c&&(f=parseInt(f%104/c,10),this._setNodeWidths(h,104+f))}this.setContainerHeight(b,a)},_setNodeWidths:function(a,b){g(".jimu-img-node",a).forEach(function(a){d.setStyle(a,"width",
b+"px")})},getItemSize:function(){var a={};a.width=this.itemSize.width;a.height=this.itemSize.height;return a},setContainerWidth:function(a,b){d.setStyle(this.containerDom,{width:(b.width+2*this.hmargin)*Math.floor(a.w/(b.width+2*this.hmargin))+20+"px",margin:"0px auto"})},setContainerHeight:function(a,b){var c=this._getDomHeight(".header",b),f=this._getDomHeight(".error",b),g=this._getDomHeight(".footer",b);d.setStyle(this.containerDom,{height:a.h-(c+f+g)+"px"})},setItemPosition:function(a,b){var c=
{position:"relative",margin:this.vmargin+"px "+this.hmargin+"px"};0<=b.width&&(c.width=b.width+"px");0<=b.height&&(c.height=b.height+"px");d.setStyle(a.domNode,c);d.addClass(a.domNode,"jimu-float-leading")},_getDomHeight:function(a,b){var c=0,f=g(a,b)[0];f&&(f=d.getMarginBox(f))&&f.h&&(c=f.h);return c}})})},"widgets/Bookmark/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Bookmark/Widget.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"jimu-r-row add-section header"\x3e\r\n\t\t\x3cinput class\x3d"jimu-input input-bookmark-name" data-dojo-attach-point\x3d"bookmarkName" type\x3d"text" placeholder\x3d"${nls.placeholderBookmarkName}"\x3e\r\n\t\t\x3cdiv class\x3d"btn-add" data-dojo-attach-point\x3d"btnAdd" data-dojo-attach-event\x3d"onclick:_onAddBtnClicked"\x3e\x3cdiv class\x3d"jimu-center-img"\x3e\x3c/div\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"jimu-state-error error" data-dojo-attach-point\x3d"errorNode"\x3e\x26nbsp;\x3c/div\x3e\r\n\t\x3cdiv class\x3d"bookmark-list" data-dojo-attach-point\x3d"bookmarkListNode"\x3e\r\n\t\t\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv class\x3d"jimu-r-row play-section footer"\x3e\r\n\t\t\x3cdiv class\x3d"col-1-2"\x3e\r\n\t\t\t\x3cdiv class\x3d"jimu-btn btn-play" data-dojo-attach-point\x3d"btnPlay" data-dojo-attach-event\x3d"onclick:_onPlayBtnClicked"\x3e${nls.labelPlay}\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"col-1-2"\x3e\r\n\t\t\t\x3cdiv class\x3d"jimu-btn btn-delete" data-dojo-attach-point\x3d"btnDelete" data-dojo-attach-event\x3d"onclick:_onDeleteBtnClicked"\x3e${nls.labelDelete}\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Bookmark/css/style.css":".jimu-img-node{font-size: 12px; position: relative; float: left; color: #686868; overflow: hidden;}.jimu-img-node .node-box{border-radius: 4px; overflow: hidden;}.jimu-img-node img{width: 100%; height: 100%; cursor: pointer;}.jimu-img-node .node-label{height: 30px; text-align: center; overflow: hidden; text-overflow: ellipsis;}.jimu-img-node:hover{color: #51b1fe;}.jimu-img-node.jimu-state-selected .node-label{background-color: #d9dde0;}.jimu-widget-bookmark{width: 100%; height: 100%; overflow: hidden; position: relative;}.jimu-widget-bookmark .add-section{position: relative; height: 30px; margin-top: 7px; overflow: visible;}.jimu-widget-bookmark .input-bookmark-name{border-top-right-radius: 0; border-bottom-right-radius: 0; position: absolute; left: 0; top: 0; width: 100%;}.jimu-widget-bookmark .btn-add{position: absolute; right: 1px; top: 1px; bottom: 1px; width: 30px; z-index: 2; border-top-right-radius: 2px; border-bottom-right-radius: 2px; background-color: #d9dde0; cursor: pointer;}.jimu-widget-bookmark .btn-add .jimu-center-img{border-top: 1px solid rgba(255, 255, 255, 0.2); background-image: url(images/add.png);}.jimu-widget-bookmark .jimu-state-error{margin-top: 4px; visibility: hidden;}.jimu-widget-bookmark .bookmark-list{margin-bottom: 35px; width: 100%;}.jimu-widget-bookmark .play-section{overflow: hidden; margin-top: 20px; position: absolute; bottom: 0;}.jimu-widget-bookmark .jimu-btn{float: none; margin: auto; width: 100%;}.jimu-widget-bookmark .jimu-img-node{margin-bottom: 4px;}.jimu-widget-bookmark .jimu-img-node .node-label{height: 2.7em; line-height: 16px; vertical-align: middle; padding: 0 5px; margin: 0 auto; width: 100px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;}.jimu-widget-bookmark .jimu-img-node .node-box{margin: 0 auto; width: 104px; height: 60px; border-radius: 0;}.jimu-widget-bookmark .jimu-img-node img{margin: 0 2px; width: 100px; height: 60px;}.FoldableTheme.green .jimu-widget-bookmark .btn-add{background-color: #80dbc5;}.FoldableTheme.cyan .jimu-widget-bookmark .btn-add{background-color: #d5d5d4;}.jimu-rtl .jimu-widget-bookmark .btn-add{left: 1px; right: auto;}",
"*now":function(k){k(['dojo/i18n!*preload*widgets/Bookmark/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html jimu/BaseWidget dojo/on dojo/aspect dojo/string esri/SpatialReference ./ImageNode ./LayoutsContainer jimu/utils libs/storejs/store".split(" "),function(k,c,d,g,m,a,b,h,f,p,q,n,l){return k([m],{baseClass:"jimu-widget-bookmark",name:"Bookmark",bookmarks:[],currentIndex:-1,_canDelete:!1,_canPlay:!1,_playStatus:"none",startup:function(){this.inherited(arguments);this.bookmarkList=new q({itemSize:{width:100,height:92},hmargin:15,
vmargin:5},this.bookmarkListNode);this.appConfig.map["3D"]?(g.setStyle(this.btnPlay,"display",""),b.after(this.map,"onCameraChangeEnd",c.hitch(this,this._onFlytoEnd),!0),b.after(this.map,"onCameraChangeBreak",c.hitch(this,this._onFlytoBreak),!0)):g.setStyle(this.btnPlay,"display","none");this.bookmarkList.startup();this.own(a(this.bookmarkName,"keydown",c.hitch(this,function(e){13===(void 0!==e.keyCode?e.keyCode:e.which)&&this._onAddBtnClicked()})))},onOpen:function(){var e=this._getLocalCache();
this.bookmarks=0<e.length?e:this.appConfig.map["3D"]?c.clone(this.config.bookmarks3D):c.clone(this.config.bookmarks2D);0===this.bookmarks.length&&this._readBookmarksInWebmap();this.displayBookmarks()},onClose:function(){this.bookmarks=[];this.currentIndex=-1},onMinimize:function(){this.resize()},onMaximize:function(){this.resize()},resize:function(){this.bookmarkList&&this.bookmarkList.resize()},destroy:function(){this.bookmarkList.destroy();this.inherited(arguments)},displayBookmarks:function(){this._processDuplicateName(this.bookmarks);
var e=[];this.bookmarkList.empty();d.forEach(this.bookmarks,function(a){e.push(this._createBookMarkNode(a))},this);this.bookmarkList.addItems(e);this._switchDeleteBtn();this._switchPlayBtn();this.resize()},_readBookmarksInWebmap:function(){this.map.itemInfo&&this.map.itemInfo.itemData&&this.map.itemInfo.itemData.bookmarks&&d.forEach(this.map.itemInfo.itemData.bookmarks,function(a){a.isInWebmap=!0;this.bookmarks.push(a)},this)},_switchDeleteBtn:function(){-1<this.currentIndex&&!this.bookmarks[this.currentIndex].isInWebmap?
(g.removeClass(this.btnDelete,"jimu-state-disabled"),this._canDelete=!0):(g.addClass(this.btnDelete,"jimu-state-disabled"),this._canDelete=!1)},_switchPlayBtn:function(){1<this.bookmarks.length?(g.removeClass(this.btnPlay,"jimu-state-disabled"),this._canPlay=!0):(g.addClass(this.btnPlay,"jimu-state-disabled"),this._canPlay=!1)},_switchPlayStatus:function(a){this._playStatus=a;this.btnPlay.innerHTML="none"===this._playStatus||"stop"===this._playStatus?n.stripHTML(this.nls.labelPlay):n.stripHTML(this.nls.labelStop)},
_createBookMarkNode:function(e){var b;b=e.thumbnail?n.processUrlInWidgetConfig(e.thumbnail,this.folderUrl):this.folderUrl+"images/thumbnail_default.png";b=new p({img:b,label:e.displayName});a(b.domNode,"click",c.hitch(this,c.partial(this._onBookmarkClick,e)));return b},_getKeysKey:function(){return this.appConfig.map["3D"]?this.name+".3D":this.name+".2D"},_saveAllToLocalCache:function(){var a=[];d.forEach(l.get(this._getKeysKey()),function(a){l.remove(a)},this);d.forEach(this.bookmarks,function(b){var e=
this._getKeysKey()+"."+b.displayName;a.push(e);l.set(e,b)},this);l.set(this._getKeysKey(),a)},_getLocalCache:function(){var a=[];if(!l.get(this._getKeysKey()))return a;d.forEach(l.get(this._getKeysKey()),function(b){b.startWith(this._getKeysKey())&&a.push(l.get(b))},this);return a},_onFlytoEnd:function(a){"stop"!==this._playStatus&&"none"!==this._playStatus&&(this.currentIndex+1===this.bookmarkList.items.length?this._switchPlayStatus("stop"):(this.currentIndex++,this.bookmarkList.items[this.currentIndex].highLight(),
setTimeout(c.hitch(this,this._setCamera,this.bookmarks[this.currentIndex]),this.config.stopTime)))},_onFlytoBreak:function(){"playing"===this._playStatus&&this._switchPlayStatus("stop")},_onAddBtnClicked:function(){0===h.trim(this.bookmarkName.value).length?(g.setStyle(this.errorNode,{visibility:"visible"}),this.errorNode.innerHTML=n.stripHTML(this.nls.errorNameNull)):(this._createBookmark(),g.setStyle(this.errorNode,{visibility:"hidden"}),this.errorNode.innerHTML="\x26nbsp;",this.bookmarkName.value=
"",this.displayBookmarks())},_onPlayBtnClicked:function(){this._canPlay&&("playing"===this._playStatus?this._switchPlayStatus("stop"):(this._switchPlayStatus("playing"),this.currentIndex=0,this._switchDeleteBtn(),this.bookmarkList.items[this.currentIndex].highLight(),this._setCamera(this.bookmarks[this.currentIndex])))},_createBookmark:function(){var a;this.appConfig.map["3D"]?(a=this.map.getCamera(new f(4326)),a={name:this.bookmarkName.value,camera:[a.x,a.y,a.z,a.heading,a.tilt]}):a={name:this.bookmarkName.value,
displayName:this.bookmarkName.value,extent:this.map.extent.toJson()};this.bookmarks.push(a);this._saveAllToLocalCache();this.resize()},_onDeleteBtnClicked:function(){this._canDelete&&-1!==this.currentIndex&&(d.some(this.bookmarks,function(a,b){if(b===this.currentIndex)return this.bookmarks.splice(b,1),!0},this),this._saveAllToLocalCache(),this.resize(),this.currentIndex=-1,this.displayBookmarks())},_onBookmarkClick:function(a){d.some(this.bookmarks,function(b,c){if(b.displayName===a.displayName)return this.currentIndex=
c,!0},this);this._switchDeleteBtn();this.appConfig.map["3D"]?this._setCamera(a):require(["esri/geometry/Extent"],c.hitch(this,function(b){var c=a.extent;c.spatialReference?new f(c.spatialReference):new f({wkid:4326});this.map.setExtent(new b(c))}))},_setCamera:function(a){this.map.setCamera(a.camera,this.config.flyTime)},_processDuplicateName:function(a){var b=[],c={};d.forEach(a,function(a){var d=a.name;d in c?c[d]++:c[d]=0;if(0<c[d]){var e=d+"("+c[d]+")";e in c?(c[e]++,c[d]++):c[e]=0;a.displayName=
0<c[e]?d+"("+c[d]+")":e}else a.displayName=d;b.push(a)},this);a=b}})});