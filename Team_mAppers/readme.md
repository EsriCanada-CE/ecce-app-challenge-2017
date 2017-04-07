# **moveMEANT App - ECCE App Challenge 2017**
----
---
By mAppers Team: Kenneth Abas, Karen Jiang, Fatima Khan, Heather Page

 ---
### **About the moveMEANT app**
 The moveMEANT app is a fun interactive, and visual, tool for elementary school children in the Halifax Regional Municipality (HRM), Nova Scotia to develop sustainability literacy skills in the topic of sustainable transportation. The app helps children draw connections between various modes of transportation and their environmental and health impacts.  While the app is primarily aimed at school children, it be used by anyone to assess the environmental and health aspects of their transposition modes.

The moveMEANT app has two general components. 
The "move" component of moveMEANT helps users understand and  characterize their transportation habits: how they move about from place to place and the environmental heath impact of their trips. The app calculates greenhouse gas emissions ( grams (g) of carbon dioxide(CO2)/trip) emitted by vehicle based transportation modes (truck/van/sports utility vehicles/, car, public transit, and school bus). To help users picture the amount of CO2 released, the CO2 amount is put in terms of the equivalent number of tree seedlings grown for 10 years. The app also calculates the calories burned per trip by  travelling with active transportation modes (biking and walking). 

The MEANT component encourages students to ask meaningful questions about the status of  transportation modes within their community. The suitability scores layers (bad, ok, good) provide a score based on the time required to walk or bike to to the closes bus stops and the time to travel to the Halifax Train Station using public transit. The app also shows points of interest (eg. schools, libraries, and recreation centres) and time to the nearest bus stop by walking or biking and the time to the Halifax Train Station using public transit. 

Students can do two possible activities with the suitability score layers and points of interests. 
1.  Use their own location to assess  he suitability score of the area of their origin or destination. This helps promote critical questions such as  " why doesn't my location have a better score?" Or "What can be done to improve the suitability score of my area?"
2. Asses the suitability score of points of interest. For example, "If this rec centre has a poor suitability score, then perhaps I should choose another with a better suitability score"


###**Install the app: **
---
1. Download the movement.zip file in the root of this repository and unzip it
2.  launch the unzipped file on a server 
-  Use a freehosting service (eg Dropbox configured to enable webpage hosting)
-  or on your operating system. "On Windows this is Internet Information Services (IIS), if you have a C:\inetpub\wwwroot folder on your computer, you should be able to access its content using http://localhost" See https://github.com/Esri/storymap-cascade#how-to-deploy-the-application-on-a-web-server for more help
3. launch index.html

###**How to use moveMEANT app**
 ---
####Step 1

To get a more realistic snapshot of a user's trip characteristics, it is recommended that user's record all their trips for a minimum of a week (7 days). 

From the info widget, download the trip log to record all trips taken within a week . A trip is defined as travelling one way from point A to point B.  

The trip log is used to record  the following information:
* time (in minutes) to travel to the destination
* street address of the destination 
* transportation mode (car, van/pickup truck/SUV,  public   
   transportation , school bus, biking, walking
* number of passengers
* date of trip
* trip distance (in kilometres (km)) (to be completed in step 2)

#### Step 2
Use the directions widget in the app to determine the trip distance (in km).  Record the distance on the trip sheet 
 
####Step 3
Within the info widget, click on the form to record all the information from the trip log (step 1) and the trip distance (step 2) for each trip. In other words, submit one form for each trip.  

#### Step 4
Use the Results Summary widget to view the data organized by the following categories:
* CO2 by class
* CO2 by school
* Calories burned by class
* Calories burned by school

Within each category, each entry is listed as nickname for class or group name for school. When an entry is clicked, a pop up displays the entry on the map provides the information about the C02 or calories. 

 Users can click on the three suitability score layers (bad, ok, good) to determine a suitability score for walking and biking times to bus stops.  The layers also display scores for public transit time to the Halifax train station.  By clicking on a point of interest, a pop up will display the length of time required to walk or bike to the nearest bus stop and time to travel to the Halifax Train Station by taking a bus. 
 ----
### **Calculations**
---
#### **Calories**

Calorie calculations based on 65lb (pounds) person walking at 4.34 km/hour or biking at 13.7km/m ( http://calorielab.com/burned/)

> **Calories = cal/min * total minutes**

####**C02 emissions**
*CO2 (tailpipe CO2) in g/ kg :*
>**CO2 emissions = (CO2/gallon / MPG) * 0.62 miles/km * number of km**

**--Assumptions for calculations--**

>Miles per gallon (MPG) for vehicles:

>* 15 MPG - 2006 Ford Explorer
* 29 MPG - 2006 Toyota Corolla
* 7 MPG - School Bus
* 6 MPG - Public Transit Bus (which runs off of diesel)

>MPG for cars and vans/trucks/SUVs was based on combined MGP for a typical vehicle from 2006 (Ford Explorer and Toyota Corolla)
> 
> The average age of vehicles on the road is about 10 years old. Source: http://driving.ca/auto-news/news/study-finds-average-u-s-vehicle-age-is-now-11-5-years-old

----------
 
>C02 (g) produced from burning fuel:
>
>* 8,887 g of CO2 produced from burning 1 gallon of regular gasoline
* 10,180 g of CO2 produced from burning 1 gallon of diesel

---
>Number of passengers per transportation mode:

>* 2 children/seat on school bus for a total capacity of 48 people
* 23 riders on an average public transit bus 

---
tailpipe CO2 calculation source: https://www.epa.gov/sites/production/files/2016-02/documents/420f14040a.pdf

#### **Tree seedlings equivalent to CO2**
*Number of tree seedlings grown for 10 years equivalent to CO2:*
>**Number of Trees  = 23.2lbs  C * (44 units CO2 / 12 units C) * 453.592 g / lbs * g CO2**
>
> C= carbon 

calculation source: https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references

### **Methodology for creating suitability score layers **
1. Network analyst extension in ArcMap was used to perform a service area analysis on three  network data sets: walking, biking and transit
2. For biking and walking network data sets, created service areas based on different time impedance values ( ranging from 1-10 min) with bus stops as facilities
3. for transit, created service areas using GTFS and the "Add GTFS to a Network Dataset" tool using time impedance values from (10- 60 min)  with the Halifax Train Station as the facility . The train station was selected as transportation hub that links different modes of transport (i.e. buses and trains)
4.  The network data sets were added to the building outline layers and then reclassified 
5. for each building outline, the reclassified transportation modes were summed for an overall numerical score and then reclassified using the equal interval reclassification method into three suitability scores: bad, ok, good
6. Building outlines were aggregated into three layers based on their suitability scores
7. points of interest from the Building Symbols layer were spatially joined to the suitability score layers

---
### **Open data sources**
-----
1. Bus Routes. Halifax Open Data. City of Halifax, Nova Scotia. source: http://catalogue-hrm.opendata.arcgis.com/datasets/e3b2bfdd61154176822c00602504c950_0
2. Building Outlines. Halifax Open Data. City of Halifax, Nova Scotia.source: http://catalogue-hrm.opendata.arcgis.com/datasets/625d718e3dd04dc4ac69ae2861f6df36_0
3.  Building Symbols. Halifax Open Data. City of Halifax, Nova Scotia.source:  http://catalogue-hrm.opendata.arcgis.com/datasets/4d44051e006b457580ab4d86fa30c949_0
4. Natural Resource Canada. GeoBase- National Road Network. source: http://ftp.geogratis.gc.ca/pub/nrcan_rncan/vector/geobase_nrn_rrn/ns/
5.  GTFS... 
6. 

### **Apps/platforms/software used to develop app**

----
1. ESRI AppBuilder (Developer) 
2. ESRI ArcMap (with network analyst extension)
3. Google Forms
4. Google sheets
5. Add GTFS to a Network set tool source: http://transit.melindamorang.com/overview_AddGTFStoND.html






