**<Synopsis>**

This is an app that provides a map to display sustainable transportation
in the City of Toronto. This map provides bus stop and bike rack locations
in specific neightbourhoods. The map is represented as a gradient map to 
display four different types of comparisions. The comparisions are
number of bus stop locations compared to school locations, number of bus
stop locations compared to points of interest, number of bus racks compared
to schools and number of bus racks compared to points of interest. Based on 
this information the end user can make an informative decision where they would
like to live based on how well public transportation and bike routes are available.
Other users such as planners will have a better idea on where to locate schools, points
of interest and bus stops. 

**<Code Example>**
 /******************************************************************
             *
             * Add Home Widget...
             * 
             ******************************************************************/

            // Home Button
            var home = new HomeButton({
                map: map,
                position: "top-left"
            }, "HomeButton");
            home.startup();

            /******************************************************************/

            /******************************************************************
             *
             * Popup Template for Neighborhood Regions...
             * 
             ******************************************************************/

            var template = new PopupTemplate({
                "title": "{AREA_NAME}",
                "fieldInfos": [{
                    "fieldName": "AREA",
                    "label": "Area (sq. km)",
                    "visible": true,
                    "format": {
                        "places": 0,
                        "digitSeparator": true
                    }
                }, {
                    "fieldName": "STOPS",
                    "label": "Bus Stops",
                    "visible": true,
                    "format": {
                        "places": 0,
                        "digitSeparator": true
                    }
                }, {
                    "fieldName": "FREQUENCY",
                    "label": "Bus Stops (per sq. km)",
                    "visible": true,
                    "format": {
                        "places": 0,
                        "digitSeparator": true
                    }
                }, {
                    "fieldName": "BIKE",
                    "label": "Bike Rack Locations",
                    "visible": true,
                    "format": {
                        "places": 0,
                        "digitSeparator": true
                    }
                }, {
                    "fieldName": "MALLS",
                    "label": "Supermarkets",
                    "visible": true,
                    "format": {
                        "places": 0,
                        "digitSeparator": true
                    }
                }, {
                    "fieldName": "SCHOOL",
                    "label": "Schools",
                    "visible": true,
                    "format": {
                        "places": 0,
                        "digitSeparator": true
                    }
                }, {
                    "fieldName": "POI",
                    "label": "Points of Interest",
                    "visible": true,
                    "format": {
                        "places": 0,
                        "digitSeparator": true
                    }
                }]
            });


            /******************************************************************
             *
             * Setting parmeters for the Renderer...
             * 
             ******************************************************************/
			// Service URL of Toronto Neighborhoods
			layerUrl = "http://services7.arcgis.com/8etbC7lHFs7qVBF2/arcgis/rest/services/NEIGHBORHOODS/FeatureServer/0";
			
            // SCHOOLS vs TRANSIT Renderer
            var blendRendererOptions = {
                blendMode: "darken",
                symbol: new SimpleFillSymbol().setOutline(new SimpleLineSymbol().setWidth(0)),
                fields: [{
                    field: "SCHOOL",
                    color: new Color("#0000FF")
                }],
                opacityStops: [{
                    value: 0,
                    opacity: 0
                }, {
                    value: .3,
                    opacity: .3
                }, {
                    value: .6,
                    opacity: .6
                }],
                normalizationField: "STOPS"
            };
            renderer = new BlendRenderer(blendRendererOptions);

			// Add SCHOOLS vs TRANSIT layer to Map
            layer1 = new FeatureLayer(layerUrl, {
                outFields: ["*"],
                opacity: 1,
                infoTemplate: template
            });
            layer1.setRenderer(renderer);

			// Pair with the button functionality
            registry.byId("bschoolst").on("click", function(e) {
				cleanup();
                map.addLayer(layer1);
            })
			/******************************************************************/

            // POINTS OF INTEREST vs TRANSIT Renderer
            var blendRendererOptions = {
                blendMode: "darken",
                symbol: new SimpleFillSymbol().setOutline(new SimpleLineSymbol().setWidth(0)),
                fields: [{
                    field: "POI",
                    color: new Color("#FF0000")
                }],
                opacityStops: [{
                    value: 0,
                    opacity: 0
                }, {
                    value: .3,
                    opacity: .3
                }, {
                    value: .6,
                    opacity: .6
                }],
                normalizationField: "STOPS"
            };
            renderer = new BlendRenderer(blendRendererOptions);

            // Add POINTS OF INTEREST vs TRANSIT layer to Map
            layer2 = new FeatureLayer(layerUrl, {
                outFields: ["*"],
                opacity: 1,
                infoTemplate: template
            });
            layer2.setRenderer(renderer);
            
			// Pair with button functionality...
            registry.byId("bpoit").on("click", function(e) {
				cleanup();
                map.addLayer(layer2);
            })
			/******************************************************************/

            // SCHOOL vs CYCLING Renderer
            var blendRendererOptions = {
                blendMode: "darken",
                symbol: new SimpleFillSymbol().setOutline(new SimpleLineSymbol().setWidth(0)),
                fields: [{
                    field: "SCHOOL",
                    color: new Color("#41f45c")
                }],
                opacityStops: [{
                    value: 0,
                    opacity: 0
                }, {
                    value: .3,
                    opacity: .3
                }, {
                    value: .6,
                    opacity: .6
                }],
                normalizationField: "BIKE"
            };
            renderer = new BlendRenderer(blendRendererOptions);

			//Add SCHOOL vs CYCLING layer to Map
            layer3 = new FeatureLayer(layerUrl, {
                outFields: ["*"],
                opacity: 1,
                infoTemplate: template
            });
            layer3.setRenderer(renderer);

			// Pair with button functionality...
            registry.byId("bschoolsc").on("click", function(e) {
				cleanup();
                map.addLayer(layer3);
            }) 
			/******************************************************************/

            // POINTS OF INTEREST vs CYCLING Renderer
            var blendRendererOptions = {
                blendMode: "darken",
                symbol: new SimpleFillSymbol().setOutline(new SimpleLineSymbol().setWidth(0)),
                fields: [{
                    field: "POI",
                    color: new Color("#f441ca")
                }],
                opacityStops: [{
                    value: 0,
                    opacity: 0
                }, {
                    value: .3,
                    opacity: .3
                }, {
                    value: .6,
                    opacity: .6
                }],
                normalizationField: "BIKE"
            };
            renderer = new BlendRenderer(blendRendererOptions);

            // Add POINTS OF INTEREST vs CYCLING layer to Map
            layer4 = new FeatureLayer(layerUrl, {
                outFields: ["*"],
                opacity: 1,
                infoTemplate: template
            });
            layer4.setRenderer(renderer);

			// Pair with button functionality...
            registry.byId("bpoic").on("click", function(e) {
				cleanup();
                map.addLayer(layer4);
            }) 


**<Motivation>**
The purpose for this project is for the ECCE App Challenge for 2017. The theme of
this challenge is sustainable transportation. The ECCE App Challenge is a coding 
competition held by Esri Canada to help promote innovation and creativity within 
the Centres of Excellence. You and a team of colleagues will be tasked with creating 
an app powered by open data to help address a problem related to a specific theme.
The team had one week to build an app and record a sales pitch explaining what the 
app does, and why it is valuable. All submitted apps will then be evaluated by a panel 
of 3 judges, and a team will be chosen as the winner, and awarded prizes.

**<Installation>**
This Web Application which makes use of various openly shared resources including 
BootStrap (Calcite Maps) and ESRI hosted data such as Basemaps. In order to view the 
application, one must either make use of a server to host the app folder or view it 
locally if a local server is set up. 
Q) How to set up a local server?
There are various ways to go about it. Our team used Xampp to view and debug the application. The following steps indicate how to get the local server working using Xampp.
1.	Download Xampp: https://www.apachefriends.org/index.html
2.	Install Xampp (use default settings)
3.	After installation, launch the application and start the Apache and MySQL services
4.	Navigate to the installation folder of Xampp
5.	Find the "htdocs" folder
6.	Copy and paste the app folder into the "htdocs" folder. Now the app is ready to be viewed using any browser.
7.	Open an internet browser. Type the following address: http://localhost/mytoronto/index.html
8.	Now the app can be viewed locally. 
------------------------------------------------------------------------------------------------------------------------------------------
Similarly, if someone has a web server ready, the app folder can simply be copied to the desired path 
and accessed using the corresponding url, ensuring that the index file is ultimately referred 
to (.../mytoronto/index.html).


**<API Reference>**
The API documents used to create this project is from ESRI Javascript api 3.x that can
be found [here] (https://developers.arcgis.com/javascript/3/). The API Reference contains detailed descriptions for each class in 
the ArcGIS API for JavaScript. Use the API Reference to find constructor options as 
well as properties, methods and events for each class.Classes in the API are organized
in modules. There is a one-to-one relationship between classes and modules 
(one exception is the esri/arcgis/Portal module, refer to the preferred 
argument aliases table for others). Related modules, such as the modules in 
esri/layers or esri/symbols, are grouped into packages (also sometimes called folders).


**<Tests>**

To run a test to see if the school density map will display for bus stop and bike rack locations is show
from this image:
![Image of Schools](http://imgur.com/a/r3ecE)
The code is:
// SCHOOLS vs TRANSIT Renderer
            var blendRendererOptions = {
                blendMode: "darken",
                symbol: new SimpleFillSymbol().setOutline(new SimpleLineSymbol().setWidth(0)),
                fields: [{
                    field: "SCHOOL",
                    color: new Color("#0000FF")
                }],
                opacityStops: [{
                    value: 0,
                    opacity: 0
                }, {
                    value: .3,
                    opacity: .3
                }, {
                    value: .6,
                    opacity: .6
                }],
                normalizationField: "STOPS"
            };
            renderer = new BlendRenderer(blendRendererOptions);

			// Add SCHOOLS vs TRANSIT layer to Map
            layer1 = new FeatureLayer(layerUrl, {
                outFields: ["*"],
                opacity: 1,
                infoTemplate: template
            });
            layer1.setRenderer(renderer);

			// Pair with the button functionality
            registry.byId("bschoolst").on("click", function(e) {
				cleanup();
                map.addLayer(layer1);
            })

// SCHOOL vs CYCLING Renderer
            var blendRendererOptions = {
                blendMode: "darken",
                symbol: new SimpleFillSymbol().setOutline(new SimpleLineSymbol().setWidth(0)),
                fields: [{
                    field: "SCHOOL",
                    color: new Color("#41f45c")
                }],
                opacityStops: [{
                    value: 0,
                    opacity: 0
                }, {
                    value: .3,
                    opacity: .3
                }, {
                    value: .6,
                    opacity: .6
                }],
                normalizationField: "BIKE"
            };
            renderer = new BlendRenderer(blendRendererOptions);

			//Add SCHOOL vs CYCLING layer to Map
            layer3 = new FeatureLayer(layerUrl, {
                outFields: ["*"],
                opacity: 1,
                infoTemplate: template
            });
            layer3.setRenderer(renderer);

			// Pair with button functionality...
            registry.byId("bschoolsc").on("click", function(e) {
				cleanup();
                map.addLayer(layer3);
            }) 

To run a test to see if the point of interest density map will display for bus stop and bike rack locations is show
from this image:
![Image of Point of interest](http://imgur.com/a/Y4NqC)
The code is:
// POINTS OF INTEREST vs TRANSIT Renderer
            var blendRendererOptions = {
                blendMode: "darken",
                symbol: new SimpleFillSymbol().setOutline(new SimpleLineSymbol().setWidth(0)),
                fields: [{
                    field: "POI",
                    color: new Color("#FF0000")
                }],
                opacityStops: [{
                    value: 0,
                    opacity: 0
                }, {
                    value: .3,
                    opacity: .3
                }, {
                    value: .6,
                    opacity: .6
                }],
                normalizationField: "STOPS"
            };
            renderer = new BlendRenderer(blendRendererOptions);

            // Add POINTS OF INTEREST vs TRANSIT layer to Map
            layer2 = new FeatureLayer(layerUrl, {
                outFields: ["*"],
                opacity: 1,
                infoTemplate: template
            });
            layer2.setRenderer(renderer);
            
			// Pair with button functionality...
            registry.byId("bpoit").on("click", function(e) {
				cleanup();
                map.addLayer(layer2);
            })
 // POINTS OF INTEREST vs CYCLING Renderer
            var blendRendererOptions = {
                blendMode: "darken",
                symbol: new SimpleFillSymbol().setOutline(new SimpleLineSymbol().setWidth(0)),
                fields: [{
                    field: "POI",
                    color: new Color("#f441ca")
                }],
                opacityStops: [{
                    value: 0,
                    opacity: 0
                }, {
                    value: .3,
                    opacity: .3
                }, {
                    value: .6,
                    opacity: .6
                }],
                normalizationField: "BIKE"
            };
            renderer = new BlendRenderer(blendRendererOptions);

            // Add POINTS OF INTEREST vs CYCLING layer to Map
            layer4 = new FeatureLayer(layerUrl, {
                outFields: ["*"],
                opacity: 1,
                infoTemplate: template
            });
            layer4.setRenderer(renderer);

			// Pair with button functionality...
            registry.byId("bpoic").on("click", function(e) {
				cleanup();
                map.addLayer(layer4);
            }) 


**<License>**
Apache License – 2.0

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.

"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).

"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.

2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.

3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.

4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:

1.	You must give any other recipients of the Work or Derivative Works a copy of this License; and
2.	You must cause any modified files to carry prominent notices stating that You changed the files; and
3.	You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and
4.	If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License. You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.

5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.

6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.

8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.

9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS
