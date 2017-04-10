------------------------------------
MISSION STATEMENT
======

Conscious Commuter is a web application that allows intra-city commuters within the city of Toronto to explore how their daily commute can have
a large impact over time. Work-Commuting, the process of driving a vehicle (often containing a single occupant) is a primary contributor to congestion
issues and pollutant release in in major urban centers such as Toronto. 
Often times, the distance of a typical intra-city commute is well within the bike-able range yet this option is frequently ignored as
the detrimental effects of a short work commute are thought of as being insignificant.
This application provides users the opportunity to quantify the cumulative effects of their daily work commute over weekly and annual time scales
It is hoped that quantifying these effects will empower users to investigate alternative methods of commuting.

In doing so, the app provides the opportunity to explore comparative statistics that would be achieved if the same route was undertaken by bike instead of car.
By demonstrating the financial, health and environmental benefits of choosing to bike to work instead of drive. The application hopes to
empower Torontonians to make sustainable commute choices.

------------------------------------
App Characteristics
======

###Unique Functionality

Conscious Commuter is an app designed to offer a simple and attractive user interface to engage and inform users to explore their commute patterns
The app allows for the generation of unique individualized commute reports and tailors the summary report to the specific vehicle, trip frequencies, and 
distances input by a user.
The integration of back-end on-the-fly calculation and realtime gas prices creates a unique and relevent user experience that allows for enhanced
user interactivity and exploration. Users are offered the chance to modify commute descriptors and recieve updated reports to compare how
different commute habits lead to different impacts.

###Development & Data Creation

The Application consists of two primary components: A Leaflet Web Map API hosted within a R Studio Shiny web application framework and an
Esri ArcGIS Online Cascading Story Map. 

As mentioned in the Readme.MD file, Shiny is an interactive web application framework for R. In order to use it, the user must have the latest 
version of RStudio and install the following packages: Shiny, rvest (web scraper), and xml2 (read HTML tree). For organizational purposes, 
the architecture of the app is structured in five R Scripts. "Startup.R" is the one listing the necessary R Scripts 
("App.R", "js.R", "css.R", "scrape.R")  within the relative directory without having the need to manually change to the absolute path. This 
also starts the app, on both shinyapps.io server and on your computer. "App.R" is the main app with user-interface (UI) and server code that 
receives variables from "js.R", "css.R", and "scrape.R" to inject JavaScript functionality (i.e. Esri Leaflet API) and CSS aesthetics into the app. 
