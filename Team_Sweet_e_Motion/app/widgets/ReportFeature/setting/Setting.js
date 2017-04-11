// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/tasks/datareviewer/ReviewerResultsTask":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/json dojo/has ./_DRSBaseTask ../../request ../FeatureSet ../../layers/FeatureEditResult ../../kernel".split(" "),function(n,g,m,l,t,q,r,k,p,u,d){return n(r,{declaredClass:"esri.tasks.datareviewer.ReviewerResultsTask",constructor:function(b){this.onGetResultsComplete=g.hitch(this,this.onGetResultsComplete);this.onWriteResultComplete=g.hitch(this,this.onWriteResultComplete);
this.onWriteFeatureAsResultComplete=g.hitch(this,this.onWriteFeatureAsResultComplete);this.onGetLayerDefinitionComplete=g.hitch(this,this.onGetLayerDefinitionComplete);this.onGetBatchRunDetailsComplete=g.hitch(this,this.onGetBatchRunDetailsComplete)},getResults:function(b,d){var h=this._successHandler,c=this._errorHandler,a=this._appendQueryParams,f=this._url+"/ReviewerResults/getResults",f=a(f),e=new l,a={queryParameters:b.toJSON(),f:"json"};null!==d&&void 0!==d&&(a.filtersArray=d.toJSON());k({callbackParamName:"callback",
url:f,content:a}).then(g.hitch(this,function(a,f){if(void 0!==a.error){var b=Error();b.message=a.error.message;b.code=a.error.code;c(b,e)}else try{void 0===a.features||void 0===a.fieldAliases||void 0===a.fields?c(null,e):(b=new p(a),h({featureSet:b},"onGetResultsComplete",e))}catch(d){c(d,e)}}),function(a,h){c(a,e)});return e},writeResult:function(b,d){var h=this._successHandler,c=this._errorHandler,a=this._appendQueryParams,f=this._url+"/ReviewerResults/writeResult",f=a(f),e=new l;k({callbackParamName:"callback",
url:f,content:{reviewerAttributes:b.toJSON(),geometry:t.stringify(d.toJson()),f:"json"}}).then(g.hitch(this,function(a,f){var b=Error();if(void 0!==a.error)b.message=a.error.message,b.code=a.error.code,c(b,e);else try{void 0!==a.result&&"error"===a.result?(b.message=a.messages,b.code=a.result,c(b,e)):"success"===a.result?h({success:!0},"onWriteResultComplete",e):c(null,e)}catch(d){c(d,e)}}),function(a,h){c(a,e)});return e},writeFeatureAsResult:function(b,d){var h=this._successHandler,c=this._errorHandler,
a=this._appendQueryParams,f=this._url+"/ReviewerResults/writeFeatureAsResult",f=a(f),e=new l;k({callbackParamName:"callback",url:f,content:{reviewerAttributes:b.toJSON(),feature:t.stringify(d.toJson()),f:"json"}}).then(g.hitch(this,function(a,b){var f=Error();if(void 0!==a.error)f.message=a.error.message,f.code=a.error.code,c(f,e);else try{void 0!==a.result&&"error"===a.result?(f.message=a.messages,f.code=a.result,c(f,e)):"success"===a.result?h({success:!0},"onWriteFeatureAsResultComplete",e):c(null,
e)}catch(d){c(d,e)}}),function(a,h){c(a,e)});return e},getLayerDefinition:function(b){var d=this._successHandler,h=this._errorHandler,c=this._appendQueryParams,a=this._url+"/ReviewerResults/getLayerDefinition",a=c(a),f=new l,c={f:"json"};if(null!==b||void 0!==b)c.filtersArray=b.toJSON();k({callbackParamName:"callback",url:a,content:c}).then(g.hitch(this,function(a,b){if(void 0!==a.error){var c=Error();c.message=a.error.message;c.code=a.error.code;h(c,f)}else try{void 0===a.whereClause?h(null,f):d({whereClause:a.whereClause},
"onGetLayerDefinitionComplete",f)}catch(g){h(g,f)}}),function(a,b){h(a,f)});return f},getBatchRunDetails:function(b){var d=this._successHandler,h=this._errorHandler,c=this._appendQueryParams,a=this._url+"/ReviewerResults/getBatchRunDetails",a=c(a),f=new l;k({callbackParamName:"callback",url:a,content:{batchRunIds:t.stringify(b),f:"json"}}).then(g.hitch(this,function(a,b){if(void 0!==a.error){var c=Error();c.message=a.error.message;c.code=a.error.code;h(c,f)}else try{void 0===a.features||void 0===
a.fieldAliases||void 0===a.fields?h(null,f):(c=new p(a),d({featureSet:c},"onGetBatchRunDetailsComplete",f))}catch(g){h(g,f)}}),function(a,c){h(a,f)});return f},updateLifecycleStatus:function(b,d,h,c){var a=this._successHandler,f=this._errorHandler,e=this._appendQueryParams,v=this._url+"/ReviewerResults/updateLifecycleStatus",v=e(v),s=new l;k({callbackParamName:"callback",url:v,content:{sessionId:b,lifecycleStatus:d,technicianName:h,filtersArray:c.toJSON(),f:"json"}}).then(g.hitch(this,function(c,
b){if(void 0!==c.error){var h=Error();h.message=c.error.message;h.code=c.error.code;f(h,s)}else try{var d=[];m.forEach(c.updateResults,function(a){var c=new u;c.error=Error(a.description);c.success=a.success;c.objectId=a.objectId;d.push(c)});a({featureEditResults:d},"onUpdateLifecycleStatusComplete",s)}catch(e){f(e,s)}}),function(a,c){f(a,s)});return s},getResultsFieldNames:function(){return"recordId objectId subtype category sessionId checktitle resourceName checkName notes severity reviewStatus correctionStatus verificationStatus reviewTechnician correctionTechnician verificationTechnician reviewDateUtc correctionDateUtc verificationDateUtc lifecycleStatus".split(" ")},
onGetResultsComplete:function(b){},onWriteResultComplete:function(b){},onWriteFeatureAsResultComplete:function(b){},onGetLayerDefinitionComplete:function(b){},onGetBatchRunDetailsComplete:function(b){},onUpdateLifecycleStatusComplete:function(b){}})})},"esri/tasks/datareviewer/_DRSBaseTask":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/has ../../request ../../urlUtils ../../kernel ../Task ./ReviewerSession".split(" "),function(n,g,m,l,t,q,r,k,p,u){return n(p,
{declaredClass:"esri.tasks.datareviewer.DRSBaseTask",_url:null,_queryParams:null,_reviewerMapServerUrl:null,constructor:function(d){"/"==d[d.length-1]&&(d=d.slice(0,-1));d=r.urlToObject(d);this._url=d.path;this._queryParams=d.query;d=this._url.toLowerCase().lastIndexOf("/exts/");0<d&&(this._reviewerMapServerUrl=this._url.substring(0,d));this._successHandler=g.hitch(this,this._successHandler);this._errorHandler=g.hitch(this,this._errorHandler);this._appendQueryParams=g.hitch(this,this._appendQueryParams);
this.onError=g.hitch(this,this.onError)},_appendQueryParams:function(d){if(this._queryParams)for(var b in this._queryParams)d=r.urlToObject(d).query?d+("\x26"+b+"\x3d"+this._queryParams[b]):d+("?"+b+"\x3d"+this._queryParams[b]);return d},_successHandler:function(d,b,g){b&&this[b].apply(this,[d]);g&&g.resolve(d)},_errorHandler:function(d,b){null===d&&(d=Error("Unexpected response received from server"),d.code=500);this.onError(d);b&&b.reject(d)},getReviewerMapServerUrl:function(){var d=null;if(d=this._reviewerMapServerUrl){if(this._queryParams)for(var b in this._queryParams)d=
r.urlToObject(d).query?d+("\x26"+b+"\x3d"+this._queryParams[b]):d+("?"+b+"\x3d"+this._queryParams[b]);return d}return null},getLifecycleStatusStrings:function(){var d=this._successHandler,b=this._errorHandler,k=this._appendQueryParams,h=this._url+"/Utilities/getLifecycleStatusStrings",h=k(h),c=new l;q({callbackParamName:"callback",url:h,content:{f:"json"}}).then(g.hitch(this,function(a,h){if(void 0!==a.error){var e=Error();e.message=a.error.message;e.code=a.error.code;b(e,c)}else try{if(e=a.lifecycleStatusString,
void 0===e)b(null,c);else{var g=[];m.forEach(e,function(a,c){g[a.descriptionCode]=a.descriptionString});d({lifecycleStatusStrings:g},"onGetLifecycleStatusStringsComplete",c)}}catch(s){b(s,c)}}),function(a,h){b(a,c)});return c},createReviewerSession:function(d,b){var k=this._successHandler,h=this._errorHandler,c=this._appendQueryParams,a=this._url+"/Utilities/createReviewerSession",a=c(a),f=new l;q({callbackParamName:"callback",url:a,content:{sessionName:d,sessionProperties:b.toJsonSessionOptions(),
f:"json"}}).then(g.hitch(this,function(a,c){if(void 0!==a.error){var b=Error();b.message=a.error.message;b.code=a.error.code;h(b,f)}else try{if(void 0===a.sessionAttributes)h(null,f);else{var b=a.sessionAttributes,d=new u(b.sessionId,b.sessionName,b.userName,b.versionName);k({reviewerSession:d},"onCreateReviewerSessionComplete",f)}}catch(g){h(g,f)}}),function(a,c){h(a,f)});return f},getReviewerSessions:function(){var d=this._successHandler,b=this._errorHandler,k=this._appendQueryParams,h=this._url+
"/Utilities/getReviewerSessions",h=k(h),c=new l;q({callbackParamName:"callback",url:h,content:{f:"json"}}).then(g.hitch(this,function(a,h){if(void 0!==a.error){var e=Error();e.message=a.error.message;e.code=a.error.code;b(e,c)}else try{if(e=a.sessionAttributes,void 0===e)b(null,c);else{var g=[];m.forEach(e,function(a,c){g[c]=new u(a.sessionId,a.sessionName,a.userName,a.versionName)});d({reviewerSessions:g},"onGetReviewerSessionsComplete",c)}}catch(k){b(k,c)}}),function(a,h){b(a,c)});return c},getCustomFieldNames:function(){var d=
this._successHandler,b=this._errorHandler,k="BATCHJOBCHECKGROUP CHECKTITLE FEATUREOBJECTCLASS LIFECYCLEPHASE LIFECYCLESTATUS SESSIONID SEVERITY SUBTYPE".split(" "),h=this._appendQueryParams,c=this._url+"/Dashboard",c=h(c),a=new l;q({callbackParamName:"callback",url:c,content:{f:"json"}}).then(g.hitch(this,function(c,h){if(void 0!==c.error){var g=Error();g.message=c.error.message;g.code=c.error.code;b(g,a)}else try{var l=[];void 0===c.reviewerResultsBy&&b(null,a);m.forEach(c.reviewerResultsBy,function(a,
c){-1===k.indexOf(a.name)&&l.push(a.name)});d({customFieldNames:l},"onGetCustomFieldNamesComplete",a)}catch(n){b(n,a)}}),function(c,h){b(c,a)});return a},onGetLifecycleStatusStringsComplete:function(d){},onGetReviewerSessionsComplete:function(d){},onCreateReviewerSessionComplete:function(d){},onGetCustomFieldNamesComplete:function(d){},onError:function(d){}})})},"esri/tasks/datareviewer/ReviewerSession":function(){define(["dojo/_base/declare","dojo/has","dojo/_base/lang","../../kernel"],function(n,
g,m,l){return n(null,{declaredClass:"esri.tasks.datareviewer.ReviewerSession",sessionId:NaN,sessionName:"",userName:"",versionName:"",constructor:function(g,l,m,k){this.sessionId=g;this.sessionName=l;this.userName=m;void 0!==k&&(this.versionName=k)},toString:function(){return isNaN(this.sessionId)?null:"Session "+this.sessionId+" : "+this.sessionName}})})},"widgets/ReportFeature/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],
function(){})},"url:widgets/ReportFeature/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n  \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"first  jimu-trailing-padding1"\x3e${nls.drsUrl}\x3c/td\x3e\r\n        \x3ctd style\x3d"width:auto;"\x3e\r\n          \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" required\x3d"true" \r\n          data-dojo-attach-point\x3d"drsUrl" style\x3d"width:650px;" class\x3d"inputBox"/\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd  style\x3d"width:80px;"\x3e\r\n            \x3cdiv data-dojo-attach-event\x3d"onclick:_onBtnSetSourceClicked" class\x3d"jimu-btn  jimu-float-trailing" style\x3d"padding:0px 15px !important;" \x3e${nls.setSource}\x3c/div\x3e       \r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.includeReportedBy}\x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n           \x3cdiv\x3e\r\n              \x3cdiv class\x3d"revTechnician-item jimu-trailing-margin025" data-dojo-attach-point\x3d"currentUser"\x3e\r\n                \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'UserName\'" data-dojo-attach-point\x3d"currentLogin" value\x3d"logon" class\x3d"jimu-radio"\x3e\x3c/div\x3e\r\n                \x3clabel class\x3d"jimu-leading-margin025"\x3e${nls.getCurrentUser}\x3c/label\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"revTechnician-item jimu-trailing-margin025" data-dojo-attach-point\x3d"userName"\x3e\r\n                \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'UserName\'" data-dojo-attach-point\x3d"defaultUser" value\x3d"default" class\x3d"jimu-radio"\x3e\x3c/div\x3e\r\n                \x3clabel class\x3d"jimu-leading-margin025"\x3e${nls.getDefaultUser}\x3c/label\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"revTechnician-item jimu-trailing-margin025 " data-dojo-attach-point\x3d"userInput"\x3e\r\n                \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'UserName\'" data-dojo-attach-point\x3d"allowUser" value\x3d"user" class\x3d"jimu-radio"\x3e\x3c/div\x3e\r\n                \x3clabel class\x3d"jimu-leading-margin025"\x3e${nls.getUser}\x3c/label\x3e\r\n              \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n       \x3c/tr\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"userNameSettings" \x3e\r\n       \x3ctr class\x3d\'dynamicRow\'\x3e\r\n       \x3ctd class\x3d"first jimu-trailing-padding1"\x3e\r\n       ${nls.userName}\r\n       \x3c/td\x3e\r\n       \x3ctd class\x3d"second"\x3e   \x3cinput type\x3d"text" class\x3d"inputBox" data-dojo-type\x3d"dijit/form/ValidationTextBox" \r\n            data-dojo-attach-point\x3d"defaultUserName" placeHolder\x3d"${nls.revTechName}"\r\n            data-dojo-props\x3d\'style:{width:"30%"}\' /\x3e\x3c/td\x3e\r\n       \x3c/tr\x3e\r\n       \x3c/div\x3e\r\n       \x3ctr\x3e\r\n        \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.defaultSessionId}\x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n          \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"defaultSessionSelect" class\x3d"selectBox"\x3e\r\n        \x3c/select\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"third"\x3e\r\n          \x3cdiv class\x3d"help-icon"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e \r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableLayerInfos"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableNoLayersError" style\x3d"display:none"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/ReportFeature/setting/css/style.css":".drs-widget-report-feature-setting{margin:0; padding:0; font-size:15px;}.drs-widget-report-feature-setting .setting-table \x3e thead \x3e tr \x3e th,.drs-widget-report-feature-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.drs-widget-report-feature-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto;}.drs-widget-report-feature-setting .input-table \x3e tbody \x3e tr \x3e .second{width:120px;}.drs-widget-report-feature-setting .input-table \x3e tbody \x3e tr \x3e .third{width:35px;}.drs-widget-report-feature-setting .revTechnician-item{display: inline-block; vertical-align: middle;}.drs-widget-report-feature-setting .revTechnician-item .jimu-radio,.drs-widget-report-feature-setting .revTechnician-item .jimu-leading-margin025{vertical-align: middle;}",
"*now":function(n){n(['dojo/i18n!*preload*widgets/ReportFeature/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable dojo/_base/html dojo/query dojo/on dijit/registry esri/tasks/datareviewer/ReviewerResultsTask jimu/dijit/Message dojo/dom-style dijit/form/ValidationTextBox jimu/dijit/RadioBtn".split(" "),function(n,g,m,l,t,q,r,k,p,u,d,b,w){return n([t,l],{baseClass:"drs-widget-report-feature-setting",includeUserBy:"",defaultUserName:"",selectedUserType:"",postCreate:function(){this.own(p(this.currentUser,
"click",m.hitch(this,function(){this._setRadioItem(this.currentUser)})));this.own(p(this.userName,"click",m.hitch(this,function(){this._setRadioItem(this.userName)})));this.own(p(this.userInput,"click",m.hitch(this,function(){this._setRadioItem(this.userInput)})))},startup:function(){this.inherited(arguments);this.config.layers||(this.config.layers=[]);var b=[{name:"label",title:this.nls.label,width:"40%",type:"text"},{name:"id",title:"index",type:"text",hidden:!0},{name:"alias",title:this.nls.alias,
type:"text",width:"40%",editable:"true","class":"symbol"},{name:"show",title:this.nls.show,width:"auto",type:"checkbox","class":"show"},{name:"layerType",title:"layerType",type:"text",hidden:!0},{name:"url",title:"url",type:"text",hidden:!0}];this._setUserNameVisibility(!1);this.displayFieldsTable=new q({fields:b,selectable:!0});this.displayFieldsTable.placeAt(this.tableLayerInfos);r.setStyle(this.displayFieldsTable.domNode,{height:"100%"});this.displayFieldsTable.startup();this.setConfig(this.config)},
_setUserNameVisibility:function(b){var c=k(this.userNameSettings);b?(this.set("includeUserBy","default"),c.style({display:"block"}),this.showHideDynamicRows(!0,this.userNameSettings)):this.showHideDynamicRows(!1,this.userNameSettings)},showHideDynamicRows:function(b){var c=k(".dynamicRow");if(void 0!==c&&null!==c&&0<c.length)for(var a=0;a<c.length;a++)c[a].style.display=b?"":"none"},setConfig:function(b){this.config=b;this.populateSessionNames(this.config.drsUrl);b.drsUrl&&this.drsUrl.set("value",
b.drsUrl);""===b.includeReportedBy||"logon"===b.includeReportedBy||void 0===b.includeReportedBy?this._setRadioItem(this.currentUser):"default"===b.includeReportedBy?(this._setRadioItem(this.userName),this.defaultUserName.set("value",b.defaultUserName)):"user"===b.includeReportedBy&&this._setRadioItem(this.userInput);b=this.map.itemInfo.itemData.operationalLayers;0>=b.length?(w.set(this.tableNoLayersError,"display",""),this.tableNoLayersError.innerHTML=this.nls.noLayers):w.set(this.tableNoLayersError,
"display","none");for(var c=0;c<b.length;c++){var a=b[c];if(a.hasOwnProperty("url")&&0<a.url.indexOf("MapServer")||"ArcGISFeatureLayer"===a.layerType){var d,e,g="ArcGISMapServiceLayer";d=this.isLayerInConfig(a,"alias");e=this.isLayerInConfig(a,"show");a.layerType&&(g=a.layerType);this.displayFieldsTable.addRow({label:a.title,id:a.id,alias:""===d?a.title:d,show:""===e?!0:e,layerType:g,url:a.url})}}},_onBtnSetSourceClicked:function(){this.populateSessionNames(this.drsUrl.value)},populateSessionNames:function(b){this.defaultSessionSelect.options.length=
null;(new d(b)).getReviewerSessions().then(m.hitch(this,function(b){g.forEach(b.reviewerSessions,m.hitch(this,function(a){this.defaultSessionSelect.addOption({value:a.sessionId,label:a.toString()})}));this.config.sessionID&&this.defaultSessionSelect.set("value",this.config.sessionID.toString())}))},isLayerInConfig:function(b,c){if(this.config.layers)for(var a=this.config.layers,d=a.length,e=0;e<d;e++)if(a[e].id.toLowerCase()===b.id.toLowerCase()){if("show"===c)return a[e].show;if("alias"===c)return a[e].alias}return""},
_setRadioItem:function(b){b=u.byNode(k(".jimu-radio",b)[0]);b.check(!0);this.selectedUserType=b.value;"default"===b.value?this._setUserNameVisibility(!0):this._setUserNameVisibility(!1)},getConfig:function(){if(!this.drsUrl.value)return new b({message:this.nls.warning}),!1;this.config.drsUrl=this.drsUrl.value;if(""===this.defaultSessionSelect.value||void 0===this.defaultSessionSelect.value)return new b({message:this.nls.noSessionName}),!1;this.config.sessionID=this.defaultSessionSelect.value;var d=
this.displayFieldsTable.getData();this.config.layers=[];for(var c=[],a=d.length,f=0;f<a;f++){var e={};e.label=d[f].label;e.id=d[f].id;e.alias=d[f].alias;e.show=d[f].show;e.layerType=d[f].layerType;e.url=d[f].url;c.push(e)}this.config.layers=c;if("default"===this.selectedUserType&&""===this.defaultUserName.value)return new b({message:this.nls.noUserName}),!1;this.config.includeReportedBy=this.selectedUserType;this.config.defaultUserName=this.defaultUserName.value;return this.config}})});