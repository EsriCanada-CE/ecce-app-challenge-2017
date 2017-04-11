// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(function(){var c={declaredClass:"jimu.shared.basePortalUrlUtils"};"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s*/gi,"").replace(/\s*$/gi,"")});"function"!==typeof String.prototype.startWith&&(String.prototype.startWith=function(a){return this.substr(0,a.length)===a});"function"!==typeof String.prototype.endWith&&(String.prototype.endWith=function(a){return this.substr(this.length-a.length,a.length)===a});c.getServerByUrl=function(a){a=
(a||"").trim();a=a.replace(/^(http(s?):?)\/\//gi,"");0===a.indexOf("//")&&(a=a.slice(2));return a.split("/")[0]};c.getServerWithProtocol=function(a){var b="";if(a=(a||"").trim()){var e=c.getServerByUrl(a);if(!e)return b;var d=c.getProtocol(a);d?b=d+"://"+e:0===a.indexOf("//")&&(b="//"+e)}return b};c.isSameServer=function(a,b){a=c.getServerByUrl(a)||"";b=c.getServerByUrl(b)||"";return a.toLowerCase()===b.toLowerCase()};c.getDomain=function(a){var b="";if(a=c.getServerByUrl(a))a=a.replace(/:\d+$/,""),
a=a.match(/[^.]\w+\.\w+$/),null!==a&&(b=a[0],/^\d+\.\d+$/.test(b)&&(b=""));return b};c.isSameDomain=function(a,b){var e=c.getDomain(a),d=c.getDomain(b);return""!==e&&e===d};c.isOrgOnline=function(a){return 0<=c.getServerByUrl(a).toLowerCase().indexOf(".maps.arcgis.com")};c.isOnline=function(a){return 0<=c.getServerByUrl(a).toLowerCase().indexOf(".arcgis.com")};c.isArcGIScom=function(a){a=c.getServerByUrl(a).toLowerCase();return"www.arcgis.com"===a||"arcgis.com"===a};c.getStandardPortalUrl=function(a){var b=
c.getServerByUrl(a);if(""===b)return"";c.isOnline(b)?(c.isArcGIScom(b)&&(b="www.arcgis.com"),a=c.addProtocol(a),a=c.getProtocol(a)+"://"+b):(a=(a||"").trim().replace(/sharing(.*)/gi,"").replace(/\/*$/g,""),a=c.addProtocol(a),a.replace(new RegExp("http(s?)://"+b,"g"),"")||(a+="/arcgis"));return a};c.isSamePortalUrl=function(a,b){var e=/^http(s?):\/\//gi,d=/^\/\//gi;a=c.getStandardPortalUrl(a).toLowerCase().replace(e,"").replace(d,"");b=c.getStandardPortalUrl(b).toLowerCase().replace(e,"").replace(d,
"");return a===b};c.addProtocol=function(a){if(-1>=a.toLowerCase().indexOf("http://")&&-1>=a.toLowerCase().indexOf("https://")){var b="";"undefined"!==typeof window&&window.location?(b=window.location.protocol,a=a.startWith("//")?b+a:a.startWith("/")?b+"//"+window.location.host+a:b+"//"+a):(b="http:",a=a.startWith("//")?b+a:b+"//"+a)}return a};c.getProtocol=function(a){var b="";a=a.toLowerCase();0===a.indexOf("https://")?b="https":0===a.indexOf("http://")&&(b="http");return b};c.updateUrlProtocolByOtherUrl=
function(a,b){b=b.toLowerCase();0===b.indexOf("https://")?a=c.setHttpsProtocol(a):0===b.indexOf("http://")&&(a=c.setHttpProtocol(a));return a};c.removeProtocol=function(a){return a.replace(/^http(s?):\/\//i,"//")};c.setHttpProtocol=function(a){a=c.addProtocol(a);return a.replace(/^https:\/\//,"http://")};c.setHttpsProtocol=function(a){a=c.addProtocol(a);return a.replace(/^http:\/\//,"https://")};c.setProtocol=function(a,b){return 0<=b.indexOf("https")?c.setHttpsProtocol(a):0<=b.indexOf("http")?c.setHttpProtocol(a):
a};c.getSharingUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/sharing/rest");return b};c.getOAuth2Url=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/sharing/rest/oauth2");return b};c.getAppIdUrl=function(a,b){var e="",d=c.getStandardPortalUrl(a);d&&(e=d+"/sharing/rest/oauth2/apps/"+b);return e};c.getSignInUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/home/signin.html");return b};c.getBaseSearchUrl=function(a){var b="";a=c.getStandardPortalUrl(a);(a=a.replace(/\/*$/g,
""))&&(b=a+"/sharing/rest/search");return b};c.getBaseItemUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/sharing/rest/content/items");return b};c.getItemUrl=function(a,b){var e="",d=c.getBaseItemUrl(a);d&&b&&(e=d+"/"+b);return e};c.getItemDataUrl=function(a,b){var e="",d=c.getItemUrl(a,b);d&&(e=d+"/data");return e};c.getItemGroupsUrl=function(a,b){var e="",d=c.getItemUrl(a,b);d&&(e=d+"/groups");return e};c.getGenerateTokenUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=
a+"/sharing/generateToken");return b};c.getItemDetailsPageUrl=function(a,b){var e="";a&&b&&(a=c.getStandardPortalUrl(a),e=a+"/home/item.html?id\x3d"+b);return e};c.getUserProfilePageUrl=function(a,b){var e="";a&&b&&(a=c.getStandardPortalUrl(a),e=a+"/home/user.html?user\x3d"+b);return e};c.getBaseGroupUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/sharing/rest/community/groups");return b};c.getPortalSelfInfoUrl=function(a){var b="";(a=c.getStandardPortalUrl(a||""))&&(b=a+"/sharing/rest/portals/self");
return b};c.getCommunitySelfUrl=function(a){var b="";(a=c.getStandardPortalUrl(a||""))&&(b=a+"/sharing/rest/community/self");return b};c.getBaseUserUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/sharing/rest/community/users");return b};c.getUserUrl=function(a,b){var e="",d=c.getBaseUserUrl(a);a&&b&&(e=d+"/"+b);return e};c.getUserTagsUrl=function(a,b){var e="",d=c.getUserUrl(a,b);a&&b&&(e=d+"/tags");return e};c.getUserThumbnailUrl=function(a,b,e){var d="";(a=c.getUserUrl(a,b))&&e&&
(d=a+"/info/"+e);return d};c.getContentUrl=function(a){var b="";a&&(a=c.getStandardPortalUrl(a),b=a+"/sharing/rest/content");return b};c.getUserContentUrl=function(a,b,e){var d="",d="";a&&b&&(d=c.getContentUrl(a),d=e?d+"/users/"+b+"/"+e:d+"/users/"+b);return d};c.getAddItemUrl=function(a,b,e){var d="",d="";a&&b&&(d=c.getUserContentUrl(a,b,e),d+="/addItem");return d};c.getDeleteItemUrl=function(a,b,e){var d="";(a=c.getUserItemsUrl(a,b))&&(d=a+"/"+e+"/delete");return d};c.getUserItemsUrl=function(a,
b,e){var d="",d="";a&&b&&(d=c.getUserContentUrl(a,b,e),d+="/items");return d};c.getUpdateItemUrl=function(a,b,e,d){var f="",f="";a&&b&&(f=c.getUserItemsUrl(a,b,d),f=f+"/"+e+"/update");return f};c.shareItemUrl=function(a,b,e,d){var f="",f="";a&&b&&(f=c.getUserItemsUrl(a,b,d),f=f+"/"+e+"/share");return f};c.getHomeIndexUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/home/index.html");return b};c.getHomeMapViewerUrl=function(a,b){var e="",d=c.getStandardPortalUrl(a);d&&(e=d+"/home/webmap/viewer.html",
e=b?e+("?webmap\x3d"+b):e+"?useExisting\x3d1");return e};c.getHomeSceneViewerUrl=function(a,b){var e="",d=c.getStandardPortalUrl(a);d&&(e=d+"/home/webscene/viewer.html",b&&(e+="?webscene\x3d"+b));return e};c.getHomeGalleryUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/home/gallery.html");return b};c.getHomeGroupsUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/home/groups.html");return b};c.getHomeMyContentUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+
"/home/content.html");return b};c.getHomeMyOrganizationUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/home/organization.html");return b};c.getHomeUserUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/home/user.html");return b};c.getPortalHelpUrl=function(a,b){var e="",d=c.getStandardPortalUrl(a);d&&(e=d+"/portalhelp/"+(b||"en")+"/website/help/");return e};c.getPortalAdminHelpUrl=function(a,b){var e="",d=c.getStandardPortalUrl(a);d&&(e=d+"/portalhelp/"+(b||"en")+"/admin/help/");
return e};c.getPortalProxyUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/sharing/proxy");return b};c.getOAuth2SignOutUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/sharing/rest/oauth2/signout");return b};c.getNewPrintUrl=function(a){var b="";if(a=c.getStandardPortalUrl(a))a=c.setHttpProtocol(a),b=a+"/sharing/tools/newPrint";return b};c.getSwitchAccoutnsUrl=function(a,b,e){var d="";if(a=c.getStandardPortalUrl(a))d=a+"/home/pages/Account/manage_accounts.html#client_id\x3d"+
b,e&&(d+="\x26redirect_uri\x3d"+e);d&&(d=c.setHttpsProtocol(d));return d};return c});