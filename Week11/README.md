## Week 11: Maps, Project Design


##Homework Review

Small Multiples:

Let's talk about what "count" is calculated on...


##Starting with D3 Maps

Mike's tutorial: http://bost.ocks.org/mike/map/

He introduces TopoJSON (https://github.com/mbostock/topojson/wiki).  Confusingly, this is sometimes a file format, sometimes about command line software, sometimes about the js library.

What is it?  It's a simplification format for map data that reduces the file size of GeoJSON data. If your data is in TopoJSON format, you need to also include TopoJSON in your javascript library includes.

There are some more tools for non-command-line work in the **Tools** section below.


**Demos**:
Let's play with some:

* Distillery: https://shancarter.github.io/distillery/
* http://geojson.io/#map=2/82.9/142.2.
* http://techslides.com/demos/d3/d3-exploring-countries.html

Now let's look at [africa_map.html](africa_map.html) first.  That's a simple map of borders using TopoJSON of the continent.

Then [africa_map2.html](africa_map2.html) -- look how we get to the actual country features.

Let's look at coloring the world by regions in [world_map_regions.html](world_map_regions.html) and discuss. (This is a homework problem for you.)


## Choropleths

Choropleths are thematic maps colored according to a data values associated with regions.  This is probably what you will need for your project.  We won't be focusing on how to plot points on maps in this class, but some of the tutorials I link to cover that.

There ARE some ways to get such maps without much work - use CartoDB, for instance.

See carto_db_example.html and demo on cartoDB. (Also others in the Tools section.)

But doing it by hand is not too bad, and always full customization, as usual.  Your options are to either merge the data into the geo/topo json file, or use some kind of key to relate the two (like ISO code). You can merge the data in the topojson generation process at the command line, or you can do it in Javascript (see it in http://www.cartographicperspectives.org/index.php/journal/article/view/cp78-sack-et-al/1359).  We'll be doing the key lookup version.

Example africa_map3 introduces a bunch of new useful stuff:

* loading multiple files with queue -- https://github.com/mbostock/queue
* a legend plugin -- http://d3-legend.susielu.com/
* a d3.map() to lookup stuff for the choropleth -- https://github.com/mbostock/d3/wiki/Arrays#d3_map

Let's look at it...

Finally, here's a fully interactive map with multiple data sets and tooltips, from Flowing Data:

* Interactive Map with Category Filters:
http://flowingdata.com/2015/02/19/make-an-interactive-map-with-category-filters/

And my version using our data and some changes:

* **[world_comparisons.html](world_comparisons.html)**

Any design suggestions?  How would you improve the tooltips?


* Read this on map coloring scales: http://roadtolarissa.com/blog/2015/01/04/coloring-maps-with-d3/

## Map Demos I Like

* Scattered Well-Being (in Mexico): http://wikiprogress.org/wikiprogress-data-visualization-contest-2015-scattered-well-being/, http://mollica.space/scattered-well-being/
* Migrant Deaths: http://bl.ocks.org/shobhitg/60eec0e1727c6c628728
* Comparing Map Projections: http://bl.ocks.org/syntagmatic/ba569633d51ebec6ec6e
* Compare Parts of the World: http://bl.ocks.org/zanarmstrong/raw/caa2da1ea1558cdc3357/#scale=527&center0=-56.44,-17.1&center1=6.07833,53.2052
* Map morph to scatterplot: http://www.brendansudol.com/writing/usa-animated/
* Cartograms with d3 and topojson: http://prag.ma/code/d3-cartogram/?segmentized&utm_content=buffer6b792&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer#popchange/2011
* Related, geo-exploder: http://bsouthga.github.io/d3-exploder/
* Population map with latitude lines: http://www.roadtolarissa.com/population-division-fullscreen.html
* Animated World Map Zoom: https://www.jasondavies.com/maps/zoom/
* Epic NYT small multiples: http://www.nytimes.com/interactive/2012/07/20/us/drought-footprint.html
* Civilian Fatalities in Afghanistan - by Pitch Interactive, http://www.thenation.com/afghanistan-database/ -- little maps in the tooltips!


* Taxi Map of NYC: http://nyctaxi.herokuapp.com/ And tutorials related:
    * Leaflet, D3, animation: http://chriswhong.com/open-data/taxi-techblog-2-leaflet-d3-and-other-frontend-fun/
    * Related: http://zevross.com/blog/2014/09/30/use-the-amazing-d3-library-to-animate-a-path-on-a-leaflet-map/
    * Also: http://zevross.com/blog/2014/12/09/use-d3-to-gradually-reveal-points-on-a-leaflet-web-map/


## Other Tutorials to Read

Read Noah Veltman's primer on maps and tools:
https://github.com/veltman/learninglunches/tree/master/maps

A simple d3 map explained: http://www.d3noob.org/2013/03/a-simple-d3js-map-explained.html
https://github.com/maptimelex/d3-mapping/blob/master/README.md#1-a-very-simple-d3-map

Mike's choropleth example for d3: http://bl.ocks.org/mbostock/4060606

Another detailed D3 choropleth tutorial: http://www.cartographicperspectives.org/index.php/journal/article/view/cp78-sack-et-al/1359

Small Multiple Maps: http://blog.webkid.io/multiple-maps-d3/?utm_content=bufferc7f1a&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

Animated Maps tutorial:
https://github.com/maptime-ams/animated-borders-d3js?utm_content=bufferb12b2&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

Extensive tutorial files:
http://maptimeboston.github.io/d3-maptime/?utm_content=bufferf944d&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer#/

Doing Pan and Zoom in maps, by Mike: http://bl.ocks.org/mbostock/8fadc5ac9c2a9e7c5ba2, and an article on this: http://techslides.com/d3-world-maps-tooltips-zooming-and-queue

Using the free QGIS app and this tutorial from Jim Vallandingham:
http://vallandingham.me/shapefile_to_geojson.html


##Map Tools


Make a Choropleth out of Geo or TopoJSON data, but this requires your variable for coloring be in the geo file:  http://code.minnpost.com/tulip/

D3 Geomap, a slightly simpler mapping library for relating CSV and geo files: https://d3-geomap.github.io/

Visualize projection distortion:
http://bl.ocks.org/enjalot/bd552e711b8325c64729

### TopoJSON

There are some non-command line tools now for working with it:

* Convert GeoJSON to TopoJSON: http://shancarter.github.io/distillery/
* TopoJSON property editor: http://bl.ocks.org/capesean/92b7d3c7cb7b5e9639ab (only edits to the properties field, by hand, when you click on a region)
* http://geojson.io/#map=2/20.0/0.0 (have used this, it's nice!)

### CartoDB

CartoDB: https://cartodb.com/gallery/
CartoDB by hand Choropleths: http://docs.cartodb.com/tutorials/electoral_map.html
CartoDB with d3: http://bl.ocks.org/andrewxhill/4448106


### Slippy Maps (Map "tiles" that you can pan/zoom around)

* Mapbox: https://www.mapbox.com/maps/
* Stamen: if you like maps, keep up: http://stamen.com/
* Map Tiles:  http://maps.stamen.com/#terrain/12/37.7706/-122.3782
* Google docs will map for you, and geocode (the process of getting lat/lon for places)

### Leaflet, a nice JS map lib for slippy maps (I've used and rec it)

Leaflet:
http://maptimeboston.github.io/leaflet-intro/

D3 with Leaflet:
http://bost.ocks.org/mike/leaflet/


## Resources for Geo Data / Files

(thanks to Noah Veltman's post here: http://mapstarter.com/)

* http://geocommons.com/
* Natural Earth: http://www.naturalearthdata.com/downloads/
* LA and California: http://boundaries.latimes.com/sets/
* Illinois and Chicago: http://boundaries.tribapps.com/api/
* Minneapolis Post: http://boundaries.minnpost.com/#datasets
* Mike Bostock's files for county names, state names, countries:
http://bl.ocks.org/mbostock/4090846

Also, I have put a large number of useful world/country topojson files in this week's data directory.  Hopefully this will be what you need for choropleth maps for the project.

##Map Design Guidelines

**Never use the rainbow color scheme!** You will lose your data vis license. https://eagereyes.org/basics/rainbow-color-map

**Read this**: * Map coloring scales in d3: http://roadtolarissa.com/blog/2015/01/04/coloring-maps-with-d3/

Jenks breaks code you could use from the previous article: https://gist.github.com/tmcw/4977508

Colorbrewer, Colors for maps (and other useful palettes for vis): http://colorbrewer2.org/

Thematic Cartography Guide: http://axismaps.github.io/thematic-cartography/

A related talk from Andy Woodruff of Axis Maps: Blindfolded Cartography: http://www.axismaps.com/blog/2015/05/blindfolded-cartography/
and the video at OpenVisConf: https://www.youtube.com/watch?v=e_00WVa3GJA

More tips:

* https://medium.com/thoughts-on-journalism/a-great-big-guide-to-when-to-use-maps-in-data-visualisation-5661d833ac62#.8ic70uj25
* http://www.ericson.net/content/2011/10/when-maps-shouldnt-be-maps/


##Recap for Project Planning

What have we done so far?

**Chart Types:**

* tables, sorting tables
* dot plots
* bar charts
* stacked bar charts
* grouped bar charts
* scatterplots
* line charts
* area charts
* streamgraphs
* maps

**Skills:**

* transitions and animation
* new data, data switching
* UI: buttons, select menus, tooltips, legends, click events
* Next week: scrolling, other storytelling structures

**Tips for good vis:**

* Small multiples
* Getting top 10
* Sorting items
* Annotation/labeling of interesting data points

Shneiderman's mantra: "Overview first, zoom and filter, details on demand."

Your project will have to have at least 4 types of graphs we've done in class in it, plus some interactive features such as tooltips, useful animation, some storytelling component.  It should be a single page project.  More criteria coming next week.

It's not too late to switch topics!

**Other Possible ideas:**

* Deep dive on an area/region
* Deep dive on a topic, like malaria
* Deep dive on groups - rich/poor, income levels, rural/urban, male/female
* Dive on a country - start broad in the region, then focus on country
* Start from their annual report and redo one of their storylines and images with interactives... this is a sure fire way to succeeed if you lack ideas.


You should be doing sketches and mockups with data now.  See: https://www.dropbox.com/s/z5ymp01eu932fr1/Screenshot%202015-11-03%2011.52.29.png?dl=0
And http://fds.design/.  One of these is due for HW 3 again.


## Recent Interesting Things

http://xkcd.com/1597/

Animated Refugee Map: http://www.takepart.com/article/2015/10/28/map-that-shows-how-huge-europes-refugee-crisis-really-is?cmpid=organic-share-twitter

Small multiple maps: http://www.nytimes.com/interactive/2015/10/31/upshot/who-still-doesnt-have-health-insurance-obamacare.html?src=twr&_r=0


What Makes a Visualization Memorable: http://www.storybench.org/understanding-what-makes-a-visualization-memorable/

Interactivity Options: http://peopleviz.gforge.inria.fr/trunk/SI_cues/ (I don't totally understand this yet, but it's interesting)

Five Design Sheet process: http://fds.design/

Apologies if this pissed you off, it pissed off a bunch of journalists this week: The Journalist-Engineer: https://medium.com/@matthew_daniels/the-journalist-engineer-c9c1a72b993f#.9c5rllt9c


## Homework

Read:

* Noah Veltman's primer on maps and tools, it will help a lot with vocabulary and concepts:
https://github.com/veltman/learninglunches/tree/master/maps
* Map coloring scales in d3: http://roadtolarissa.com/blog/2015/01/04/coloring-maps-with-d3/
* Don't use rainbow schemes or your data vis license will be revoked: https://eagereyes.org/basics/rainbow-color-map


**HW 1 (20pts) Region Colors**:  Make a region color-coded map of the world like I showed. You can start from [africa_map2.html](africa_map2.html) and [africa_map3.html](africa_map3.html) for the data loading.  Use the region data in [World_Development_Indicators_Metadata_Countries.csv](World_Development_Indicators_Metadata_Countries.csv).  You may have to use the ISO3 column.

**HW 2 (15pts) Choropleth Map**: Make a choropleth map for your project data, using a continent or region or world of your choice, similar to what I did in africa_map3.html. It should have a legend and tooltips.

**HW 3 (20 pts) Design Sketch Rev2**: I want an updated design sketch for your project, using some ideas from the second stages of the Five Design Sheets site. http://fds.design/ You should have done some exploratory charts and graphs and have ideas about what types of charts you will include in the project now.  We'll discuss these in class next week.


