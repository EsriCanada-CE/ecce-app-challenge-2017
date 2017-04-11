Halifax Sustainable Transit 
Team: Web-Meisters
ECCE App Challenge 2017
Members: Kate MacLachlan, Liam Osler, Joshua Staboon

---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------

Goal:
	Sustainability is more important now than it has ever been, our future depends on it. Three of the biggest issues facing humanity now are fossil
	fuel depletion, climate change and higher energy and water costs. But the good news is change is possible and it’s easier now than ever for 
	residents of the Halifax Regional Municipality to reduce their net impact on the ecosystem with the Halifax Sustainable Transit App! Our app’s 
	goal is to make it easier for people to access the vital resources they need when it comes to sustainable transportation decisions, as well as 
	giving them the opportunity to contribute to the growth and propagation of their local transit data. Education plays a huge role in the steps to 
	change - providing the public with easy access to intuitive utilities and applications puts this information at their fingertips.
	
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------

Accessing the WebApp:

	Navigate to http://www.cogsforum.com/ check out the online version of the app.
	
	We have also included a .zip file of our app that was created with the Web AppBuilder for ArcGIS (Developer Edition).	
	This version the same functionality as the online version but includes a custom widget that calculates fuel savings created with the JavaScript API.
	In order to access this version of the app set up WebApp Develop Edition on your machine locally. Once setup import the zipped application into
	WebApp Develop Edition and from here you can launch and/or make edits to it.
	

---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------

Using the WebApp:

***************************************************************************************
--Adding sustainable locations to the map (marker with plus sign icon)--
	Click on the widget icon and then click on the new feature marker. When it is selected you can now click anywhere on the map to place your
	sustainable place. Using the location feature or the search bar in the top left can help you find where you are located and where addresses are
	on the map.

***************************************************************************************
--Finding Information about bus stops located near you (bus with magnifying glass icon)--
	Click on the widget icon and then either using the search bar or using the marker button beside it and clicking on the map, enter in a location.
	Once a location has been entered, specify the distance for the search to take place (1-1200 metres). From the list and looking on the map select an
	ideal bus stop. The pop up will provide the stop number, from which you can call 902-480-8000 to hear information about that bus stop.
	The directions panel also can provide directions to the bus stop if necessary.

***************************************************************************************
--Finding Information about park n ride locations near you ('P' with magnifying glass icon)--
	Click on the widget icon and then either using the search bar or using the marker button beside it and clicking on the map, enter in a location.
	Once a location has been entered, specify the distance for the search to take place (1-25 kilometres). From the list and looking on the map select an
	ideal park n ride location. The pop up will provide relevant information about the park n ride locations. The information includes name, # of spaces,
	cost, address and bus routes. The directions panel also can provide directions to the park n ride location if necessary.

***************************************************************************************
--More information about sustainable transportation within Halifax (information icon)--
	Click on the widget icon and a window will pop up with various links to useful resources regarding sustainable transportation in Halifax.
	
***************************************************************************************
--View walking distance from bus stops--
	Zoom into the map within Halifax until the buildings appear. The buildings are symbolized from blue to red based on how far they are away
	from bus stops. Blue being within 250 metres and red being greater than 1 kilometre away. This data was calculated by creating a network
	dataset from the streets file, generating service areas and doing spatial joins. The results were slightly adjusted to improve efficiency and errors.

***************************************************************************************
--Calculate how much money you would save by not taking a vehicle (calculator below web map application)--
	Navigate to the calculator below the web mapping application and enter in the 3 parameters (fuel economy <l/100km>, distance<km> and cost<cost/litre>).
	After entering in the 3 parameters click calculate and it will give you a $ value for how much that commute would cost, ergo money you would save.

***************************************************************************************
--View live updates about Halifax Transit (Twitter window below web map application)--
	Navigate to the twitter window below the web mapping application, this window provides live tweets from Halifax Transit, you can also scroll in the 
	window to find older tweets.

---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------

Layers on the Map (all of which obtained from Halifax Open Data or a City of Halifax Website)

	Sustainable Places - point layer created by us, set to editable in ArcGIS Online which allows the public to make additions via our app
	Park n Ride - point layer created by us, from a directory located on the City of Halifax Website
	Bus Routes - polyline layer representing bus routes in Halifax
	Streets - polyline layer representing all of the streets within Halifax 
	Buildings - polygon layer representing building outlines within Halifax enriched with walking distance data
	Bus Stops - point layer representing bus stops within Halifax


---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------



