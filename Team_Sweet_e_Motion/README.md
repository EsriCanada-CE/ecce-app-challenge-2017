#Traffic Hazard Data Management App

##Mission Statement

Deteriorating transportation infrastructure has become a major issue in aging cities, and this significantly complicates urban planning procedures.  For developing and maintaining a logistically, socially, and environmentally sustainable transportation system, it is essential to have an accurate and up-to-date knowledge of hazards within the system (e.g. dangerous road conditions, speeding issues, etc.).  This information is important to have for pedestrians, cyclists, drivers, and public transit users to ensure accessibility of urban areas.

Unfortunately, the costs of obtaining such accurate data ongoingly can be quite prohibitive, and collecting the data can be logistically challenging.  Furthermore, it can be difficult for data collectors to observe more subtle systematic defects in a transportation system.  It is therefore desirable to crowd-source traffic hazard information.  

Our application seeks to satisfy this need to gather and analyze traffic hazard data ongoingly.  As such, our goal is to provide the public with a means to report traffic hazards to city officials, and to provide urban planning experts with a means of intuitively organizing and analyzing this crowd-sourced information.

##App Description

Our application is divided into two main interfaces:

1. A traffic hazard data submission interface through which members of the public report traffic hazards they encounter; and

2. A traffic hazard data management interface through which members of the public and transportation experts may summarize and explore the crowd-sourced traffic hazard data.

###Traffic Hazard Data Submission

To access the Traffic Hazard Data Submission app, visit [this link](http://yorku.maps.arcgis.com/apps/GeoForm/index.html?appid=18109f4e8fef42f29bd066052b139986)

Our Traffic Hazard Data Submission interface makes use of the GeoForm app template available in ArcGIS Online.  The traffic hazards layer is a hosted layer service, with domain values defined for each of its fields.  Its fields consist of:

* Hazard Type - describes _the mode of transportation_ that the hazard effects (i.e. walking, cycling, driving, and public transit)
* Hazard Subtype - describes _the type of_ transportation hazard (e.g. speeding, jaywalking, etc.)
* Hazard Severity - describes _how serious_ the hazard is, on a scale from 1 to 5
* Comments - any further description of the traffic hazard that the submitter believes is necessary
* Attachments - any media attached to the traffic hazard that illustrates the hazard

After selecting the attributes associated with the traffic hazard, the user must specify the geographic location of the hazard on a map.  This can be done by placing a marker on the map, or by: searching for an address; searching for a latitude/longitude position; and searching for specific UTM coordinates.

Near the top of the GeoForm, there is a link that leads to the Traffic Hazard Data Management interface.

###Traffic Hazard Data Management

To access the Traffic Hazard Data Management app, visit [this link](http://yorku.maps.arcgis.com/apps/webappviewer/index.html?id=808d88de86124bf9934b64a2dbf2a053)

Our Traffic Hazard Data Management interface makes use of the ArcGIS Web AppBuilder.  The interface consists of 4 widgets:

* A legend that communicates the meaning of the symbols describing the traffic hazards and bike paths;
* A summary widget that provides a count of traffic hazards within the map's extent as well as their average severity rating;
* A chart widget that produces the following charts:
 * A pie chart of the hazard severity rating;
 * A pie chart of the hazard types;
 * A pie chart of the hazard subtypes;
 * A bar graph showing average hazard severity by hazard type; and
 * A bar graph showing average hazard severity by hazard subtype
* A filtering widget that allows the user to filter by:
 * Hazard type;
 * Hazard subtype; and
 * A range of hazard severity ratings

The interplay between the filtering widget and the summary and chart widgets make this application particularly useful.  The summary and chart operations only operate on the filtered hazard data.  This allows for more precise analysis of different types of hazards as well as for more broad analysis across all types of hazards.

## Data Sources

We only made use of open source data in producing this application.

The bike path data was gathered from the City of Toronto's Open Data collection.

We generated the traffic hazard information by selecting random points that were within 10 metres of the National Road Network (also an open source data set).  We then populated the fields of these random points using a Python code block within the field calculator tool in ArcMap.

## Limitations

Crowd-sourced data of this type relies significantly on subjective criteria defined by users (e.g. one person could give a pothole a severity rating of 4 where another could give it a severity rating of 2).  As such, a useful next step in development would be in aggregating similar hazards to identify averaged responses from the public.  This would produce a more vetted and significant result.

## Licensing Information

This application is licensed under Version 3.0 of the GNU General Public Licence.  As such, any credited use/re-purposing of this application is allowed.