// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/tasks/datareviewer/ReviewerResultsTask":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/json dojo/has ./_DRSBaseTask ../../request ../FeatureSet ../../layers/FeatureEditResult ../../kernel".split(" "),function(h,k,n,l,t,q,u,m,r,w,e){h=h(u,{declaredClass:"esri.tasks.datareviewer.ReviewerResultsTask",constructor:function(b){this.onGetResultsComplete=k.hitch(this,this.onGetResultsComplete);this.onWriteResultComplete=k.hitch(this,this.onWriteResultComplete);
this.onWriteFeatureAsResultComplete=k.hitch(this,this.onWriteFeatureAsResultComplete);this.onGetLayerDefinitionComplete=k.hitch(this,this.onGetLayerDefinitionComplete);this.onGetBatchRunDetailsComplete=k.hitch(this,this.onGetBatchRunDetailsComplete)},getResults:function(b,e){var d=this._successHandler,g=this._errorHandler,a=this._appendQueryParams,f=this._url+"/ReviewerResults/getResults",f=a(f),c=new l,a={queryParameters:b.toJSON(),f:"json"};null!==e&&void 0!==e&&(a.filtersArray=e.toJSON());m({callbackParamName:"callback",
url:f,content:a}).then(k.hitch(this,function(a,f){if(void 0!==a.error){var b=Error();b.message=a.error.message;b.code=a.error.code;g(b,c)}else try{void 0===a.features||void 0===a.fieldAliases||void 0===a.fields?g(null,c):(b=new r(a),d({featureSet:b},"onGetResultsComplete",c))}catch(v){g(v,c)}}),function(a,d){g(a,c)});return c},writeResult:function(b,e){var d=this._successHandler,g=this._errorHandler,a=this._appendQueryParams,f=this._url+"/ReviewerResults/writeResult",f=a(f),c=new l;m({callbackParamName:"callback",
url:f,content:{reviewerAttributes:b.toJSON(),geometry:t.stringify(e.toJson()),f:"json"}}).then(k.hitch(this,function(a,f){var b=Error();if(void 0!==a.error)b.message=a.error.message,b.code=a.error.code,g(b,c);else try{void 0!==a.result&&"error"===a.result?(b.message=a.messages,b.code=a.result,g(b,c)):"success"===a.result?d({success:!0},"onWriteResultComplete",c):g(null,c)}catch(v){g(v,c)}}),function(a,d){g(a,c)});return c},writeFeatureAsResult:function(b,e){var d=this._successHandler,g=this._errorHandler,
a=this._appendQueryParams,f=this._url+"/ReviewerResults/writeFeatureAsResult",f=a(f),c=new l;m({callbackParamName:"callback",url:f,content:{reviewerAttributes:b.toJSON(),feature:t.stringify(e.toJson()),f:"json"}}).then(k.hitch(this,function(a,b){var f=Error();if(void 0!==a.error)f.message=a.error.message,f.code=a.error.code,g(f,c);else try{void 0!==a.result&&"error"===a.result?(f.message=a.messages,f.code=a.result,g(f,c)):"success"===a.result?d({success:!0},"onWriteFeatureAsResultComplete",c):g(null,
c)}catch(v){g(v,c)}}),function(a,d){g(a,c)});return c},getLayerDefinition:function(b){var e=this._successHandler,d=this._errorHandler,g=this._appendQueryParams,a=this._url+"/ReviewerResults/getLayerDefinition",a=g(a),f=new l,g={f:"json"};if(null!==b||void 0!==b)g.filtersArray=b.toJSON();m({callbackParamName:"callback",url:a,content:g}).then(k.hitch(this,function(a,b){if(void 0!==a.error){var c=Error();c.message=a.error.message;c.code=a.error.code;d(c,f)}else try{void 0===a.whereClause?d(null,f):e({whereClause:a.whereClause},
"onGetLayerDefinitionComplete",f)}catch(x){d(x,f)}}),function(a,b){d(a,f)});return f},getBatchRunDetails:function(b){var e=this._successHandler,d=this._errorHandler,g=this._appendQueryParams,a=this._url+"/ReviewerResults/getBatchRunDetails",a=g(a),f=new l;m({callbackParamName:"callback",url:a,content:{batchRunIds:t.stringify(b),f:"json"}}).then(k.hitch(this,function(a,b){if(void 0!==a.error){var c=Error();c.message=a.error.message;c.code=a.error.code;d(c,f)}else try{void 0===a.features||void 0===
a.fieldAliases||void 0===a.fields?d(null,f):(c=new r(a),e({featureSet:c},"onGetBatchRunDetailsComplete",f))}catch(x){d(x,f)}}),function(a,b){d(a,f)});return f},updateLifecycleStatus:function(b,e,d,g){var a=this._successHandler,f=this._errorHandler,c=this._appendQueryParams,h=this._url+"/ReviewerResults/updateLifecycleStatus",h=c(h),p=new l;m({callbackParamName:"callback",url:h,content:{sessionId:b,lifecycleStatus:e,technicianName:d,filtersArray:g.toJSON(),f:"json"}}).then(k.hitch(this,function(c,
b){if(void 0!==c.error){var d=Error();d.message=c.error.message;d.code=c.error.code;f(d,p)}else try{var g=[];n.forEach(c.updateResults,function(a){var c=new w;c.error=Error(a.description);c.success=a.success;c.objectId=a.objectId;g.push(c)});a({featureEditResults:g},"onUpdateLifecycleStatusComplete",p)}catch(z){f(z,p)}}),function(a,c){f(a,p)});return p},getResultsFieldNames:function(){return"recordId objectId subtype category sessionId checktitle resourceName checkName notes severity reviewStatus correctionStatus verificationStatus reviewTechnician correctionTechnician verificationTechnician reviewDateUtc correctionDateUtc verificationDateUtc lifecycleStatus".split(" ")},
onGetResultsComplete:function(b){},onWriteResultComplete:function(b){},onWriteFeatureAsResultComplete:function(b){},onGetLayerDefinitionComplete:function(b){},onGetBatchRunDetailsComplete:function(b){},onUpdateLifecycleStatusComplete:function(b){}});q("extend-esri")&&k.setObject("tasks.datareviewer.ReviewerResultsTask",h,e);return h})},"esri/tasks/datareviewer/_DRSBaseTask":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/has ../../request ../../urlUtils ../../kernel ../Task ./ReviewerSession".split(" "),
function(h,k,n,l,t,q,u,m,r,w){h=h(r,{declaredClass:"esri.tasks.datareviewer.DRSBaseTask",_url:null,_queryParams:null,_reviewerMapServerUrl:null,constructor:function(e){"/"==e[e.length-1]&&(e=e.slice(0,-1));e=u.urlToObject(e);this._url=e.path;this._queryParams=e.query;e=this._url.toLowerCase().lastIndexOf("/exts/");0<e&&(this._reviewerMapServerUrl=this._url.substring(0,e));this._successHandler=k.hitch(this,this._successHandler);this._errorHandler=k.hitch(this,this._errorHandler);this._appendQueryParams=
k.hitch(this,this._appendQueryParams);this.onError=k.hitch(this,this.onError)},_appendQueryParams:function(e){if(this._queryParams)for(var b in this._queryParams)e=u.urlToObject(e).query?e+("\x26"+b+"\x3d"+this._queryParams[b]):e+("?"+b+"\x3d"+this._queryParams[b]);return e},_successHandler:function(e,b,k){b&&this[b].apply(this,[e]);k&&k.resolve(e)},_errorHandler:function(e,b){null===e&&(e=Error("Unexpected response received from server"),e.code=500);this.onError(e);b&&b.reject(e)},getReviewerMapServerUrl:function(){var e=
null;if(e=this._reviewerMapServerUrl){if(this._queryParams)for(var b in this._queryParams)e=u.urlToObject(e).query?e+("\x26"+b+"\x3d"+this._queryParams[b]):e+("?"+b+"\x3d"+this._queryParams[b]);return e}return null},getLifecycleStatusStrings:function(){var e=this._successHandler,b=this._errorHandler,h=this._appendQueryParams,d=this._url+"/Utilities/getLifecycleStatusStrings",d=h(d),g=new l;q({callbackParamName:"callback",url:d,content:{f:"json"}}).then(k.hitch(this,function(a,d){if(void 0!==a.error){var c=
Error();c.message=a.error.message;c.code=a.error.code;b(c,g)}else try{if(c=a.lifecycleStatusString,void 0===c)b(null,g);else{var f=[];n.forEach(c,function(a,c){f[a.descriptionCode]=a.descriptionString});e({lifecycleStatusStrings:f},"onGetLifecycleStatusStringsComplete",g)}}catch(p){b(p,g)}}),function(a,d){b(a,g)});return g},createReviewerSession:function(e,b){var h=this._successHandler,d=this._errorHandler,g=this._appendQueryParams,a=this._url+"/Utilities/createReviewerSession",a=g(a),f=new l;q({callbackParamName:"callback",
url:a,content:{sessionName:e,sessionProperties:b.toJsonSessionOptions(),f:"json"}}).then(k.hitch(this,function(a,b){if(void 0!==a.error){var c=Error();c.message=a.error.message;c.code=a.error.code;d(c,f)}else try{if(void 0===a.sessionAttributes)d(null,f);else{var c=a.sessionAttributes,g=new w(c.sessionId,c.sessionName,c.userName,c.versionName);h({reviewerSession:g},"onCreateReviewerSessionComplete",f)}}catch(v){d(v,f)}}),function(a,b){d(a,f)});return f},getReviewerSessions:function(){var e=this._successHandler,
b=this._errorHandler,h=this._appendQueryParams,d=this._url+"/Utilities/getReviewerSessions",d=h(d),g=new l;q({callbackParamName:"callback",url:d,content:{f:"json"}}).then(k.hitch(this,function(a,d){if(void 0!==a.error){var c=Error();c.message=a.error.message;c.code=a.error.code;b(c,g)}else try{if(c=a.sessionAttributes,void 0===c)b(null,g);else{var f=[];n.forEach(c,function(a,c){f[c]=new w(a.sessionId,a.sessionName,a.userName,a.versionName)});e({reviewerSessions:f},"onGetReviewerSessionsComplete",
g)}}catch(p){b(p,g)}}),function(a,d){b(a,g)});return g},getCustomFieldNames:function(){var e=this._successHandler,b=this._errorHandler,h="BATCHJOBCHECKGROUP CHECKTITLE FEATUREOBJECTCLASS LIFECYCLEPHASE LIFECYCLESTATUS SESSIONID SEVERITY SUBTYPE".split(" "),d=this._appendQueryParams,g=this._url+"/Dashboard",g=d(g),a=new l;q({callbackParamName:"callback",url:g,content:{f:"json"}}).then(k.hitch(this,function(d,c){if(void 0!==d.error){var g=Error();g.message=d.error.message;g.code=d.error.code;b(g,a)}else try{var f=
[];void 0===d.reviewerResultsBy&&b(null,a);n.forEach(d.reviewerResultsBy,function(a,c){-1===h.indexOf(a.name)&&f.push(a.name)});e({customFieldNames:f},"onGetCustomFieldNamesComplete",a)}catch(x){b(x,a)}}),function(d,c){b(d,a)});return a},onGetLifecycleStatusStringsComplete:function(e){},onGetReviewerSessionsComplete:function(e){},onCreateReviewerSessionComplete:function(e){},onGetCustomFieldNamesComplete:function(e){},onError:function(e){}});t("extend-esri")&&k.setObject("tasks.datareviewer.DRSBaseTask",
h,m);return h})},"esri/tasks/datareviewer/ReviewerSession":function(){define(["dojo/_base/declare","dojo/has","dojo/_base/lang","../../kernel"],function(h,k,n,l){h=h(null,{declaredClass:"esri.tasks.datareviewer.ReviewerSession",sessionId:NaN,sessionName:"",userName:"",versionName:"",constructor:function(h,k,l,m){this.sessionId=h;this.sessionName=k;this.userName=l;void 0!==m&&(this.versionName=m)},toString:function(){return isNaN(this.sessionId)?null:"Session "+this.sessionId+" : "+this.sessionName}});
k("extend-esri")&&n.setObject("tasks.datareviewer.ReviewerSession",h,l);return h})},"widgets/ReportFeature/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/ReportFeature/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n  \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"first  jimu-trailing-padding1"\x3e${nls.drsUrl}\x3c/td\x3e\r\n        \x3ctd style\x3d"width:auto;"\x3e\r\n          \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" required\x3d"true" \r\n          data-dojo-attach-point\x3d"drsUrl" style\x3d"width:650px;" class\x3d"inputBox"/\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd  style\x3d"width:80px;"\x3e\r\n            \x3cdiv data-dojo-attach-event\x3d"onclick:_onBtnSetSourceClicked" class\x3d"jimu-btn  jimu-float-trailing" style\x3d"padding:0px 15px !important;" \x3e${nls.setSource}\x3c/div\x3e       \r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.includeReportedBy}\x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n           \x3cdiv\x3e\r\n              \x3cdiv class\x3d"revTechnician-item jimu-trailing-margin025" data-dojo-attach-point\x3d"currentUser"\x3e\r\n                \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'UserName\'" data-dojo-attach-point\x3d"currentLogin" value\x3d"logon" class\x3d"jimu-radio"\x3e\x3c/div\x3e\r\n                \x3clabel class\x3d"jimu-leading-margin025"\x3e${nls.getCurrentUser}\x3c/label\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"revTechnician-item jimu-trailing-margin025" data-dojo-attach-point\x3d"userName"\x3e\r\n                \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'UserName\'" data-dojo-attach-point\x3d"defaultUser" value\x3d"default" class\x3d"jimu-radio"\x3e\x3c/div\x3e\r\n                \x3clabel class\x3d"jimu-leading-margin025"\x3e${nls.getDefaultUser}\x3c/label\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"revTechnician-item jimu-trailing-margin025 " data-dojo-attach-point\x3d"userInput"\x3e\r\n                \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'UserName\'" data-dojo-attach-point\x3d"allowUser" value\x3d"user" class\x3d"jimu-radio"\x3e\x3c/div\x3e\r\n                \x3clabel class\x3d"jimu-leading-margin025"\x3e${nls.getUser}\x3c/label\x3e\r\n              \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n       \x3c/tr\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"userNameSettings" \x3e\r\n       \x3ctr class\x3d\'dynamicRow\'\x3e\r\n       \x3ctd class\x3d"first jimu-trailing-padding1"\x3e\r\n       ${nls.userName}\r\n       \x3c/td\x3e\r\n       \x3ctd class\x3d"second"\x3e   \x3cinput type\x3d"text" class\x3d"inputBox" data-dojo-type\x3d"dijit/form/ValidationTextBox" \r\n            data-dojo-attach-point\x3d"defaultUserName" placeHolder\x3d"${nls.revTechName}"\r\n            data-dojo-props\x3d\'style:{width:"30%"}\' /\x3e\x3c/td\x3e\r\n       \x3c/tr\x3e\r\n       \x3c/div\x3e\r\n       \x3ctr\x3e\r\n        \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.defaultSessionId}\x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n          \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"defaultSessionSelect" class\x3d"selectBox"\x3e\r\n        \x3c/select\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"third"\x3e\r\n          \x3cdiv class\x3d"help-icon"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e \r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableLayerInfos"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableNoLayersError" style\x3d"display:none"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/ReportFeature/setting/css/style.css":".drs-widget-report-feature-setting{margin:0; padding:0; font-size:15px;}.drs-widget-report-feature-setting .setting-table \x3e thead \x3e tr \x3e th,.drs-widget-report-feature-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.drs-widget-report-feature-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto;}.drs-widget-report-feature-setting .input-table \x3e tbody \x3e tr \x3e .second{width:120px;}.drs-widget-report-feature-setting .input-table \x3e tbody \x3e tr \x3e .third{width:35px;}.drs-widget-report-feature-setting .revTechnician-item{display: inline-block; vertical-align: middle;}.drs-widget-report-feature-setting .revTechnician-item .jimu-radio,.drs-widget-report-feature-setting .revTechnician-item .jimu-leading-margin025{vertical-align: middle;}",
"*now":function(h){h(['dojo/i18n!*preload*widgets/ReportFeature/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable dojo/_base/html dojo/query dojo/on dijit/registry esri/tasks/datareviewer/ReviewerResultsTask jimu/dijit/Message dojo/dom-style dijit/form/ValidationTextBox jimu/dijit/RadioBtn".split(" "),function(h,k,n,l,t,q,u,m,r,w,e,b,y){return h([t,l],{baseClass:"drs-widget-report-feature-setting",includeUserBy:"",defaultUserName:"",selectedUserType:"",postCreate:function(){this.own(r(this.currentUser,
"click",n.hitch(this,function(){this._setRadioItem(this.currentUser)})));this.own(r(this.userName,"click",n.hitch(this,function(){this._setRadioItem(this.userName)})));this.own(r(this.userInput,"click",n.hitch(this,function(){this._setRadioItem(this.userInput)})))},startup:function(){this.inherited(arguments);this.config.layers||(this.config.layers=[]);var d=[{name:"label",title:this.nls.label,width:"40%",type:"text"},{name:"id",title:"index",type:"text",hidden:!0},{name:"alias",title:this.nls.alias,
type:"text",width:"40%",editable:"true","class":"symbol"},{name:"show",title:this.nls.show,width:"auto",type:"checkbox","class":"show"},{name:"layerType",title:"layerType",type:"text",hidden:!0},{name:"url",title:"url",type:"text",hidden:!0}];this._setUserNameVisibility(!1);this.displayFieldsTable=new q({fields:d,selectable:!0});this.displayFieldsTable.placeAt(this.tableLayerInfos);u.setStyle(this.displayFieldsTable.domNode,{height:"100%"});this.displayFieldsTable.startup();this.setConfig(this.config)},
_setUserNameVisibility:function(d){var b=m(this.userNameSettings);d?(this.set("includeUserBy","default"),b.style({display:"block"}),this.showHideDynamicRows(!0,this.userNameSettings)):this.showHideDynamicRows(!1,this.userNameSettings)},showHideDynamicRows:function(d){var b=m(".dynamicRow");if(void 0!==b&&null!==b&&0<b.length)for(var a=0;a<b.length;a++)b[a].style.display=d?"":"none"},setConfig:function(d){this.config=d;this.populateSessionNames(this.config.drsUrl);d.drsUrl&&this.drsUrl.set("value",
d.drsUrl);""===d.includeReportedBy||"logon"===d.includeReportedBy||void 0===d.includeReportedBy?this._setRadioItem(this.currentUser):"default"===d.includeReportedBy?(this._setRadioItem(this.userName),this.defaultUserName.set("value",d.defaultUserName)):"user"===d.includeReportedBy&&this._setRadioItem(this.userInput);d=this.map.itemInfo.itemData.operationalLayers;0>=d.length?(y.set(this.tableNoLayersError,"display",""),this.tableNoLayersError.innerHTML=this.nls.noLayers):y.set(this.tableNoLayersError,
"display","none");for(var b=0;b<d.length;b++){var a=d[b];if(a.hasOwnProperty("url")&&0<a.url.indexOf("MapServer")||"ArcGISFeatureLayer"===a.layerType){var f,c,e="ArcGISMapServiceLayer";f=this.isLayerInConfig(a,"alias");c=this.isLayerInConfig(a,"show");a.layerType&&(e=a.layerType);this.displayFieldsTable.addRow({label:a.title,id:a.id,alias:""===f?a.title:f,show:""===c?!0:c,layerType:e,url:a.url})}}},_onBtnSetSourceClicked:function(){this.populateSessionNames(this.drsUrl.value)},populateSessionNames:function(b){this.defaultSessionSelect.options.length=
null;(new e(b)).getReviewerSessions().then(n.hitch(this,function(b){k.forEach(b.reviewerSessions,n.hitch(this,function(a){this.defaultSessionSelect.addOption({value:a.sessionId,label:a.toString()})}));this.config.sessionID&&this.defaultSessionSelect.set("value",this.config.sessionID.toString())}))},isLayerInConfig:function(b,e){if(this.config.layers)for(var a=this.config.layers,d=a.length,c=0;c<d;c++)if(a[c].id.toLowerCase()===b.id.toLowerCase()){if("show"===e)return a[c].show;if("alias"===e)return a[c].alias}return""},
_setRadioItem:function(b){b=w.byNode(m(".jimu-radio",b)[0]);b.check(!0);this.selectedUserType=b.value;"default"===b.value?this._setUserNameVisibility(!0):this._setUserNameVisibility(!1)},getConfig:function(){if(!this.drsUrl.value)return new b({message:this.nls.warning}),!1;this.config.drsUrl=this.drsUrl.value;if(""===this.defaultSessionSelect.value||void 0===this.defaultSessionSelect.value)return new b({message:this.nls.noSessionName}),!1;this.config.sessionID=this.defaultSessionSelect.value;var d=
this.displayFieldsTable.getData();this.config.layers=[];for(var e=[],a=d.length,f=0;f<a;f++){var c={};c.label=d[f].label;c.id=d[f].id;c.alias=d[f].alias;c.show=d[f].show;c.layerType=d[f].layerType;c.url=d[f].url;e.push(c)}this.config.layers=e;if("default"===this.selectedUserType&&""===this.defaultUserName.value)return new b({message:this.nls.noUserName}),!1;this.config.includeReportedBy=this.selectedUserType;this.config.defaultUserName=this.defaultUserName.value;return this.config}})});