# Week 11: Maps


##Homework Review

**Great small multiples**:

* Sherman: https://bl.ocks.org/SHewitt95/raw/6118753c31f858accacf/
* Sunny's Meat: http://bl.ocks.org/sunnyuxuan/raw/851e43179a9f6b3cc079/
* Eliot's drugs: https://bl.ocks.org/eliot84/raw/99ea880dcdf06162fa2b/
* Luying's Road accidents: http://bl.ocks.org/luluwuluying/raw/656a43c441b82549cd04/
* Eric's cars: http://bl.ocks.org/suneric1/raw/c5432c5ecd181dc8b4fe/
* Hyan's Students (pure d3 sorting!): http://bl.ocks.org/hfreitas92/raw/8dc916746d1c0ca569e4/
* Zhou's F1: http://bl.ocks.org/captainelaine/raw/a9dafcc81ee3dcdb2416/
* Han's bars: http://bl.ocks.org/jashcny/raw/f4d0bfad19c385e2525b/
* Claudia's terrorism: http://bl.ocks.org/claudialexa/raw/e388b88bf6b57e132f76/ (might want to use the same scale?)
* Josh's teams: http://bl.ocks.org/CafeConVega/raw/26ca0ade9b4647c33ed3/ (pure d3!)
* Shi Li's amazing detail on demand charts: http://bl.ocks.org/shishi0906/raw/65e772aa23825104d0b0/


**Reminder**:

Get your data sets in shape -- download, explore, CSV-ify them, start using them.
If your data is in PDF tables, try Tabula: http://tabula.technology/


##D3 Maps


### TopoJSON vs GEOJSON

You were supposed to read Mike's tutorial: http://bost.ocks.org/mike/map/.

He introduces TopoJSON (https://github.com/mbostock/topojson/wiki).  Confusingly, this is sometimes a file format, sometimes about command line software, sometimes about the js library.

What is it?  It's a simplification format for map data that reduces the file size of GeoJSON data. **If your data is in TopoJSON format, rather than plain GEOJSON, you need to also include TopoJSON in your javascript library includes. And you need to use it to access your map data.**

There are some non-command line tools now for working with Topojson (including creating it from GEOJSON files):

* Convert GeoJSON to TopoJSON: http://shancarter.github.io/distillery/
* TopoJSON property editor: http://bl.ocks.org/capesean/92b7d3c7cb7b5e9639ab (only edits to the properties field, by hand, when you click on a region)
* Another editor/viewer: http://geojson.io/#map=2/20.0/0.0 (have used this, it's nice!)

Let's look at this too:

* http://techslides.com/demos/d3/d3-exploring-countries.html

There are some more tools for non-command-line work in the Map Tools section below.

The data directory for Week 11 has a bunch of useful topojson files in one subdirectory, and geojson in another directory.  Remember to include and use topojson.js if you use those files.


### Examples Showing Multiple Detail Levels

Now let's look at [africa_map.html](africa_map.html) first.  That's a simple map of borders using TopoJSON of the continent.

Then [africa_map2.html](africa_map2.html) -- look how we get to the actual country features.

Now let's look at coloring the world by regions in [world_map_regions.html](world_map_regions.html) and discuss.


### Choropleths

Choropleths are thematic maps colored according to a data values associated with regions.  This is probably what you will need for your project.

There ARE some ways to get such maps without much work - use CartoDB, for instance.

See [carto_db_example.html](carto_db_example.html) and demo on cartoDB. (Also others in the Tools section.)

But doing it by hand is not too bad, and always full customization, as usual.  Your options are to either merge the data into the geo/topo json file (see [simple_us_states_data.html](simple_us_states_data.html)), or use some kind of key to relate the two (like ISO code), as in [world_comparisons.html](world_comparisons.html). You can also merge the data in the topojson generation process at the command line if you want to do that. We'll be doing the key lookup version for most of the examples, although you should check out [simple_us_states_data.html](simple_us_states_data.html).

Example [africa_map3.html](africa_map3.html) introduces a bunch of new useful stuff:

* loading multiple files with queue -- https://github.com/mbostock/queue
* a legend plugin -- http://d3-legend.susielu.com/
* a d3.map() hash table to lookup stuff for the choropleth -- https://github.com/mbostock/d3/wiki/Arrays#d3_map

Finally, here's a fully interactive map with multiple data sets and tooltips, from Flowing Data:

* Interactive Map with Category Filters:
http://flowingdata.com/2015/02/19/make-an-interactive-map-with-category-filters/
* And my version using UNICEF data and some changes: **[world_comparisons.html](world_comparisons.html)**

Any design suggestions?  How would you improve the tooltips?


### US States and Counties

There is a US states and counties Topojson file in your data directory, thanks to Mike Bostock. You can use it for making US maps if you need to.

Use of the Albers projection for the USA gives you Alaska and Hawaii in a nice location.
* https://github.com/mbostock/d3/wiki/Geo-Projections

Also, coloring states:

* [coloring_us_counties.html](coloring_us_counties.html)

Using a click-event to change data shown (plus a nice tooltip):

* [coloring_us_counties_with_data.html](coloring_us_counties_with_data.html)

For county and state id's, see this list: https://www.census.gov/econ/cbp/download/georef02.txt The "id" in the us topojson file I've given you is the FIPS code for the state and county.
The State ID is the first 2 digits.  How would we filter for a single state and country?

* [coloring_florida_with_data.html](coloring_florida_with_data.html)


### Dots on Maps


We can use our `projection([lon, lat])` to position things on a map.

````
svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
        return projection([d.lon, d.lat])[0]; // x coordinate
    })
    .attr("cy", function(d) {
        return projection([d.lon, d.lat])[1]; // y coordinate
    })
    .attr("r", 5);
````

* Also, the example [simple_us_states_data.html](simple_us_states_data.html) shows a choropleth and dots on the map.
* Example [rats_in_NYC.html](rats_in_NYC.html): All the rat data, takes a while to load!


### Click on a Map to Trigger Stuff

Often you will want to trigger actions off charts or maps on click.

An example is in **[africa_map_clicker.html](africa_map_clicker.html).**  Of course, the div with the tooltip-like text could instead be another chart!

Notice how important the moveToFront() is for the map mouseover!


## Other Map Stuff Beyond D3


### Slippy Maps With Detail Under Your Data (e.g., Leaflet)


Often when you put points on maps, you want to preserve the underlying geography. That means you want slippy maps with zoom in and out capability.  Leaflet is one of the main tools for this.

We can do it using markers in leaflet.js.  Here's a nice Ratmap using leaflet and d3: http://benjmyers.com/ratmap/#/

Here's an example rat map using Leaflet and leaflet markers:

* [rats_in_NYC_leaflet.html](rats_in_NYC_leaflet.html)
* Here's a silly example using the flickr api and a story generator (tracery.js), with the same dataset: http://bl.ocks.org/arnicas/d210166c6d302da09397


### Combining D3 with Tile Maps

* Google Maps and D3 points: http://bl.ocks.org/mbostock/899711
* Leaflet and D3, a writeup by Mike: https://bost.ocks.org/mike/leaflet/

See the example in [us_states_data_leaflet.html](us_states_data_leaflet.html) -- choropleth plus dots on a leaflet underlayer.

### Lat, Lon vs Lon, Lat: BEWARE


Some tools assume `[lon, lat]` and others want it the other way.

D3 wants `[lon, lat]`.  Leaflet wants `[lat, lon]`.

Read this: http://www.macwright.org/lonlat/


### Map Demos I Like

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


### Other Map Tutorials to Read

* Read Noah Veltman's primer on maps and tools:
https://github.com/veltman/learninglunches/tree/master/maps
* A simple d3 map explained: http://www.d3noob.org/2013/03/a-simple-d3js-map-explained.html
https://github.com/maptimelex/d3-mapping/blob/master/README.md#1-a-very-simple-d3-map
* Mike's choropleth example for d3: http://bl.ocks.org/mbostock/4060606
* Another detailed D3 choropleth tutorial: http://www.cartographicperspectives.org/index.php/journal/article/view/cp78-sack-et-al/1359
* On map coloring scales: http://roadtolarissa.com/blog/2015/01/04/coloring-maps-with-d3/
* Small Multiple Maps: http://blog.webkid.io/multiple-maps-d3/?utm_content=bufferc7f1a&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer
* Animated Maps tutorial:
https://github.com/maptime-ams/animated-borders-d3js?utm_content=bufferb12b2&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer
* Extensive tutorial files:
http://maptimeboston.github.io/d3-maptime/?utm_content=bufferf944d&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer#/
* Doing Pan and Zoom in maps, by Mike: http://bl.ocks.org/mbostock/8fadc5ac9c2a9e7c5ba2, and an article on this: http://techslides.com/d3-world-maps-tooltips-zooming-and-queue
* Using the free QGIS app and this tutorial from Jim Vallandingham:
http://vallandingham.me/shapefile_to_geojson.html


###Map Tools


#### Misc

* Make a Choropleth out of Geo or TopoJSON data, but this requires your variable for coloring be in the geo file:  http://code.minnpost.com/tulip/
* D3 Geomap, a slightly simpler mapping library for relating CSV and geo files: https://d3-geomap.github.io/
* Visualize projection distortion:
http://bl.ocks.org/enjalot/bd552e711b8325c64729
* DataMaps: http://datamaps.github.io/
    * Example of it used: http://data.runkeeper.com/rk-usa-running-stats-by-state


#### CartoDB

* CartoDB: https://cartodb.com/gallery/
* CartoDB by hand Choropleths: http://docs.cartodb.com/tutorials/electoral_map.html
* CartoDB with d3: http://bl.ocks.org/andrewxhill/4448106
* My example: [carto_db_example.html](carto_db_example.html)


#### Slippy Maps (Map "tiles" that you can pan/zoom around)

* Mapbox: https://www.mapbox.com/maps/
* Stamen: if you like maps, keep up: http://stamen.com/
* Map Tiles:  http://maps.stamen.com/#terrain/12/37.7706/-122.3782
* Google docs will map for you, and geocode (the process of getting lat/lon for places)

#### Leaflet, a nice JS map lib for slippy maps (I've used and rec it)

* Leaflet:
http://maptimeboston.github.io/leaflet-intro/
* D3 with Leaflet:
http://bost.ocks.org/mike/leaflet/


### Resources for Geo Data / Files

(Thanks to Noah Veltman's post here: http://mapstarter.com/)

* http://geocommons.com/
* Natural Earth: http://www.naturalearthdata.com/downloads/
* LA and California: http://boundaries.latimes.com/sets/
* Illinois and Chicago: http://boundaries.tribapps.com/api/
* Minneapolis Post: http://boundaries.minnpost.com/#datasets
* Mike Bostock's files for county names, state names, countries:
http://bl.ocks.org/mbostock/4090846

Also, I have put a large number of useful world/country topojson files in this week's data directory.  Hopefully this will be what you need for choropleth maps for the project.

###Map Design Guidelines

**Never use the rainbow color scheme!** You will lose your data vis license. https://eagereyes.org/basics/rainbow-color-map

* Map coloring scales in d3: http://roadtolarissa.com/blog/2015/01/04/coloring-maps-with-d3/
* Jenks breaks code you could use from the previous article: https://gist.github.com/tmcw/4977508
* Colorbrewer, Colors for maps (and other useful palettes for vis): http://colorbrewer2.org/
* Thematic Cartography Guide: http://axismaps.github.io/thematic-cartography/
* A related talk from Andy Woodruff of Axis Maps: Blindfolded Cartography: http://www.axismaps.com/blog/2015/05/blindfolded-cartography/
and the video at OpenVisConf: https://www.youtube.com/watch?v=e_00WVa3GJA
* https://medium.com/thoughts-on-journalism/a-great-big-guide-to-when-to-use-maps-in-data-visualisation-5661d833ac62#.8ic70uj25
* When Maps Shouldn't Be Maps: http://www.ericson.net/content/2011/10/when-maps-shouldnt-be-maps/
* Hex Tile Maps: http://blog.apps.npr.org/2015/05/11/hex-tile-maps.html
* Even more design options: https://richardbrath.wordpress.com/2015/10/15/equal-area-cartograms-and-multivariate-labels/


##Recap So Far: Project Ahead

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
* small multiples
* maps


**Skills:**

* transitions and animation
* new data, data switching/updates
* UI: buttons, select menus, tooltips, legends, click events
* Next week: scrolling, other storytelling structures, animation

**Tips for good vis:**

* Small multiples
* Getting top 10 (or top N)
* Sorting items
* Animating things when they change
* Annotation/labeling of interesting data points

Shneiderman's mantra: "Overview first, zoom and filter, details on demand."

Your project will have to have at least 4 types of graphs we've done in class in it, plus some interactive features such as tooltips, useful animation, some storytelling component.  It should be a single page project, as discussed.



## Recent Interesting Things


* Small multiples in sports in Financial Times: http://blogs.ft.com/ftdata/2016/03/28/football-premier-league-decline-la-liga/
* How to Make Cartograms with Animation: http://metrocosm.com/how-to-make-cartograms-with-animation/
* Animated Refugee Map: http://www.takepart.com/article/2015/10/28/map-that-shows-how-huge-europes-refugee-crisis-really-is?cmpid=organic-share-twitter
* Small multiple maps: http://www.nytimes.com/interactive/2015/10/31/upshot/who-still-doesnt-have-health-insurance-obamacare.html?src=twr&_r=0
* What Makes a Visualization Memorable: http://www.storybench.org/understanding-what-makes-a-visualization-memorable/
* Five Design Sheet process: http://fds.design/


## Homework

Read:

* Noah Veltman's primer on maps and tools, it will help a lot with vocabulary and concepts:
https://github.com/veltman/learninglunches/tree/master/maps
* Map coloring scales in d3: http://roadtolarissa.com/blog/2015/01/04/coloring-maps-with-d3/
* Don't use rainbow schemes or your data vis license will be revoked: https://eagereyes.org/basics/rainbow-color-map


**HW 1 (20pts) Map**: Make a map with data for your project data (or another data set if you don't have mappable data).  Make it have a legend and tooltips and explain what it's showing. You can use any approach you want - choropleth or dots on a map.  There should be a file you can use in my data directory, but if you need someplace special, you might have to hunt online.

**HW 2 (10pts) Datasets**: Put your project datasets as CSV into a repo or gist and send me the link. This means getting them out of PDFs.  If you already put them into a gist, remind me by resending me that link.

