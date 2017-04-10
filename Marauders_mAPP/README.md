Conscious Commuter: A Web App by the Marauders Map team
ECCE App Challenge 2017
===================
-------------------------------
####  Team Members: Anastassios Dardas, Spencer Elford, Karl Chastko


------------------------------------
Using the App
======

**To access the Web app in browser:**
 
 View the live web app by clicking the link below:
 
https://mcmaster.maps.arcgis.com/apps/Cascade/index.html?appid=7e1909750a134cfc88366ac5080401fa


**Enter your Commute**

Use the address geocoder in the top right to enter in your commute destination and origin point. For example, your commute will likely start at your residence and end at your place of work. Enter in the addresses of these two locations and hit enter. The app will generate a typical travel route that is used for this commute.


**Input your Commute Details**

Not all commutes are equal, different vehicles, changing gas prices and frequency of the commute all have a signficant impact in the financial and environmental costs associated with work commutes. Enter in some simple details regarding your work commute using the options show in the box at right. 
Choose the vehicle type that is most similar to the vehicle you regularly use during your commute. Gas prices for the day are shown here and are updated in realtime for the city of Toronto.
Next enter the number of times this commute is taken. For example, during a typical 5 day work week, a commute route is taken 10 times in a week (twice per day, including return trips).
 

**View your Commute Report Summary**

Once you have refined you commute details, you are ready to view your commute summary. Hit the button below to be presented with an infographic outlining the estimate gas usage, CO2 release and Fuel/maintanence costs accumulated over a single weeks worth of commuting.


**Try out Bike Commuting**

After generating a weekly commute report, you will now have the chance to examine the savings, and environmental benefits of making the choice to bike instead of drive. Click the Bike Report icon to view estimates of the fuel savings, and caloric burn associated with choosing to ride a bike to your workplace.


----------
About the App
======

>**Open Data and Software**

This application utilizes a combination of several open source web services and development platforms.
 * Basemaps and web-map services are generated through the Esri Leaflet API
 * Geocoding & Routing services are constructed using the Nominatim API
 * The Commuter Report widgets are developed in R via the Shiny Package - an open source Web Application Framework
 * The Esri ArcGIS Online story map builder, hosts the web application in a Cascading story map interface

>**R Shiny Web App Server**
Shiny is a web application framework for R that can turn analyses into interactive web applications with no knowledge requirement of HTML5, CSS3, or JavaScript (JS). However, having some knowledge of these three front-end languages can make your Shiny app even more interactive. This Shiny app has Esri Leaflet and standard Leaflet API as well as custom JS and CSS files injected into the framework, which enables enhanced calculations and customization. Although this is not a full stack (it does not collect data), this app is considered to be both front-end (presentation) and back-end (calculations). 

** Flexible User-Experience (UX) **
The user can drag the Commute and Bike Commute report panels anywhere on the page for their user-interface preference. 


>**ArcGIS Online**
The app is hosted within a configured Cascading story map. This configuration allows for the inclusion of supporting media including infographics, images, and dynamic Web App panes.

------
 Known Bugs
------
The application is optimized for Google Chrome, scaling and widget interactivity issues have been known to persist in Mozilla Firefox browsers.

The application requires access to stable internet, poor internet connections can result in failed returns when generating a route or delineating origin/destination pins.

------
 Assumptions & Calculations
-------------
The application utilizes several assumptions to generate estimates of fuel consumption, CO2 output, maintenance costs, and caloric burn.
Estimates are derived from total distance of commute applied against several variables which are attributes of vehicle type and trip frequency. In order for the app to perform interactive calculations, a custom JS file was developed to transfer the interactive total commute distance value from the HTML page into Shiny. 
Fuel Economies for the 6 different vehicle types are generalized values estimated from 2012 model year cars and are gathered from the Canadian Natural Resources Fuel Economy Guide.

  The following fuel Economy estimates are used: 
  
**Type**|**Fuel Economy(km/L)**
:-----:|:-----:
Sedan|7.23
Van|7.65
SUV|6.38
Truck|6.38
Compact|8.93

Fuel costs are a product of fuel economy achieved over the cumulative commute distance for the entire week. Gas costs ($/L - Regular) are updated real time through web scraping (rvest & xml2 packages) and represent actual gas price for that day in the city of Toronto.

Maintainence and depreciation factors are estimates derived from CAA formulas (as of 2014) and reflect an estimated 6 cents/L cost. 

CO2 output estimates from the combustion of gasoline is derived from the U.S Department of Energy's Fuel Economy Guide.
When gasoline burns, the carbon and hydrogen separate. The hydrogen combines with oxygen to form water (H2O), and carbon combines with oxygen to form carbon dioxide (CO2).
A carbon atom has a weight of 12, and each oxygen atom has a weight of 16, giving each single molecule of CO2 an atomic weight of 44 (12 from carbon and 32 from oxygen).
Therefore, to calculate the amount of CO2 produced from a gallon of gasoline, the weight of the carbon in the gasoline is multiplied by 44/12 or 3.7.
Since gasoline is about 87% carbon and 13% hydrogen by weight, the carbon in a gallon of gasoline weighs 5.5 pounds (6.3 lbs. x .87).
We can then multiply the weight of the carbon (5.5 pounds) by 3.7, which equals 20 pounds of CO2 per gallon or 5.29 lbs per Liter.

Caloric Burn associated with Bike commute is derived from a formula, which assumes an average cycling pace of 10km/hr across the total cumulative weekly commute distance. The formula generates an estimate of caloric burn based on an assumed 32 - 38 cal/Km expenditure. 


------

Credits
-------------
Esri Leaflet Web Map Library: https://esri.github.io/esri-leaflet/

Leaflet Routing & Geocoding: http://www.liedman.net/leaflet-routing-machine/api/

Shiny Web Application Framework by R.Studio: https://shiny.rstudio.com/

ArcGIS Online Web App Templates: https://storymaps.arcgis.com/en/

Fuel Economy and CO2 outputs : http://open.canada.ca/data/en/dataset/98f1a129-f628-4ce4-b24d-6f16bf24dd64

Car Maintanence and Depreciation: http://caa.ca/car_costs/

Charts and Graphics: https://piktochart.com/ , https://logomakr.com/

Icons and Buttons: http://www.flaticon.com/

