
# Week 13: Animation with a Timer, "Play" buttons, More UI


## Homework Review

* Eric's D3 map with tooltip graphs: http://bl.ocks.org/suneric1/4c974350b1eb2f20a080cf2d08084d5a
* Cibonay's Students: http://bl.ocks.org/cibonaydames/raw/8733a202dbaa59d3dfdb080cffc5401d/
* Hyan's students: http://bl.ocks.org/hfreitas92/raw/b8a755c0d7b5c8d6cdddc603329a3480/
* Josh's great Florida illnesses: http://bl.ocks.org/CafeConVega/raw/65d4fb217d2127e30e37093c3a138610/
* Sherman's tuition: https://bl.ocks.org/SHewitt95/baa4b2681e433cbc57b1eec0a3787c0f
* Sunny's tourism: http://bl.ocks.org/sunnyuxuan/09f5a2af3c49459715592935d7e52953
* Sevika's leaflet map: http://bl.ocks.org/shevy92/raw/96e90646bf25f852db719af07b90a4dc/



### Design Tips

* In your tooltip on a choropleth, always report the actual value of the region you are coloring.  People will want to know the numbers, not just interpret the shade of color.  
* Also, don't report a different number than the one used to color the region. If you add numbers, that's fine, but make sure it's clear which one is driving the color.
* Don't use a two-color scale unless you are contrasting 2 things (like above or below a threshold, or differences positive and negative). Your options are sequential (single color shades), diverging (around a middle neutral color), and qualitative (non-numeric categories). The resources I gave you last week on design should help (read them!) and also this: https://www.mapbox.com/tilemill/docs/guides/tips-for-color/
* Don't combine leaflet and D3 unless you have a need to do it: you don't need to show an infinitely zoomable and movable map with geography and roads etc if you are only showing a colored choropleth at the country/state level.

Leaflet and the countries.json:

Note: Mike B says Leaflet can't display map files cut at the antimeridian:
* https://bl.ocks.org/mbostock/3788999
* https://bl.ocks.org/mbostock/5735770

That's why this map is messed up: https://github.com/mbostock/topojson/blob/master/examples/world-50m.json


### Taxi Data Maps

* A recent good taxi map: https://www.michaelfogleman.com/static/yellow/
* A long post about exploring that data in various ways: http://toddwschneider.com/posts/analyzing-1-1-billion-nyc-taxi-and-uber-trips-with-a-vengeance/


## Responsive Maps

* Tips here: http://eyeseast.github.io/visible-data/2013/08/26/responsive-d3/
* See version of it implemented in [africa_map3_responsive.html](africa_map3_responsive.html).


## Animation in D3

One of the most famous animated graphs ever is Hans Rosling's [Gapminder](http://www.gapminder.org/world/#$majorMode=chart$is;shi=t;ly=2003;lb=f;il=t;fs=11;al=30;stl=t;st=t;nsl=t;se=t$wst;tts=C$ts;sp=5.59290322580644;ti=2013$zpv;v=0$inc_x;mmid=XCOORDS;iid=phAwcNAVuyj1jiMAkmq1iMg;by=ind$inc_y;mmid=YCOORDS;iid=phAwcNAVuyj2tPLxKvvnNPA;by=ind$inc_s;uniValue=8.21;iid=phAwcNAVuyj0XOoBL_n5tAQ;by=ind$inc_c;uniValue=255;gid=CATID0;by=grp$map_x;scale=log;dataMin=194;dataMax=96846$map_y;scale=lin;dataMin=23;dataMax=86$map_s;sma=49;smi=2.65$cd;bd=0$inds=;example=75).

Tom Carden (RandomEtc) re-did it in javascript using canvas (not D3):
http://randometc.github.io/mind-gapper-js/

And then Mike Bostock did it too, in D3: Gapminder animation in d3: http://bost.ocks.org/mike/nations/

But his version has a hidden (IMO) brush for the years. Can you find it?


### Animated Bar Charts

Example by Tom Carden: http://bl.ocks.org/RandomEtc/cff3610e7dd47bef2d01

Note that again, we set up the page, then load the data, and call a "replay" function that is a timer that calls the "draw" function with new data.

The draw function sets the domains based on current data set, transitions the axes, and does the data binding, exiting, entering, and updating, with transitions.

Timer example:

````
setInterval(function() {
  redraw();  // call the function you created to update the chart
}, 1500);  // this is the seconds delay before executing.
````


### Animated Line Charts (and Section Highlights)

The unrolling effect!  This is all over in real news stories.  So you need to know how to do it.

See the examples in **[animated_lines.html](animated_lines.html)**.  You could use this in your own scrolly stories if you wanted to.

These examples illustrate how to "unroll" a line, how to highlight a segment of a line, and how to animate the highlight of a segment of a line.


### Animated Paths on Maps

See my example **[animated_map_path.html](animated_map_path.html)** with a play/pause button added to it. (Thanks to Jim Vallandingham for fixing a bug in the timer code.)

Reference:

* Example in http://mtaptich.github.io/d3-lessons/d3-extras/
* On Leaflet, zev ross: http://bl.ocks.org/zross/6a31f4ef9e778d94c204
* Another good tutorial: http://geoexamples.blogspot.com/2014/01/d3-map-styling-tutorial-iii-drawing.html
* Also see this tool from Ben Schmidt to make trails, including animated ones: https://github.com/bmschmidt/D3-trail?utm_content=bufferf9497&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer
  * And demo: http://benschmidt.org/D3-trail/minard.html
* Airplanes animated on a world map: http://www.tnoda.com/blog/2014-04-02


## UI Sliders for Timelines

Tom MacWright's control that I recommend: http://www.macwright.org/chroniton/example/.

See my example use of it in **[africa_map_slider.html](africa_map_slider.html).** It has options for configuring it to restart playing, etc.

More related items:

* Play/Pause audio + animation: https://www.bignerdranch.com/blog/music-visualization-with-d3-js/
* Animated borders with a control: https://github.com/maptime-ams/animated-borders-d3js/, the [Demo](http://maptime-ams.github.io/animated-borders-d3js/tutorial/13/).
* Brush as time slider: http://bl.ocks.org/zanarmstrong/ddff7cd0b1220bc68a58
* D3 slider control that is not year/time based: http://thematicmapping.org/playground/d3/d3.slider/


## Chart in a Tooltip

Because the D3 tooltip is HTML, you can attach and svg and update a chart in it, if you want.

See Eric's example: http://bl.ocks.org/suneric1/4c974350b1eb2f20a080cf2d08084d5a

Also my more complex example in [africa_map_tooltips_graph.html](africa_map_tooltips_graph.html).

The key point is to call an update function that transitions your data in the tooltip chart, on mouseover.


## Icons, Images, etc in SVG

* Embed image data in SVG: http://bl.ocks.org/emeeks/707681f1f5b4a2063d6e (uses canvas)
* Airplanes animated on a world map: http://www.tnoda.com/blog/2014-04-02


## More Than One D3 Chart Per Page

One way is to use multiple div tags, with different id's.

* http://www.d3noob.org/2013/07/arranging-more-than-one-d3js-graph-on.html

In this example, there is a nice function for drawing each data set, which means the variables for each graph are in the function scope, not global:

* http://jsfiddle.net/1cqb3uw8/

Ideally, you are using functions to protect your variable scope and encapsulate operations.  This will make debugging easier.

Take a look at the code in the [animated_lines.html](animated_lines.html) file for some organization of different chart code into functions.

Overall, tips:

* Try to have as few global variables as you can -- these are variables that need to be visible to all the functions.  Examples are scales, and maybe a data set.
* You can define functions inside of functions -- the inner functions have access to all the variables of the outer function, as well as the global variables.
* Use queue to load multiple files and then some kind of await() that calls a function that handles your data variables and passes them to the appropriate function to draw the graphs.


## Set Up Your Project Pages (Github.io)

Let's do this:
https://pages.github.com/

After you do the stuff on the github site, in your local directory for the project,

````
>git pull
>git checkout gh-pages
````

You will now be working only in the branch that is public for the website, gh-pages.  Then if you want to commit and push from the command line, you can edit your files, and then do:

````
>git status [to see what files need adding, vs what have changed]
>git add [filename] -- for each file you want to add to the repo if it's not there yet
>git commit -am 'My note about what I did'  [this commits everything you have added or edited and uses that note to say what you did]
>git push [push the changes to the repo so i can pull them :)]
````

On the repo project page, reload/refresh the page. You should see all the files you added and edited there.  If you have the index.html page showing your d3 work, it will update with the latest work when you look at
your `your-username.github.io/project-name` page.

You can work in a github GUI or some other way if you want.  Just make sure you check your work is visible in the url view.

If you screw yourself up, this guide might help:

 * http://sethrobertson.github.io/GitFixUm/fixup.html

## Recent Interesting Things

* http://datausa.io/: US Data portal site
* Animated ScrollyTelling Annotated Click Line Chart: http://www.nytimes.com/interactive/2015/11/17/health/wiredwell-food-diary-super-tracker.html?_r=0
* Mercator Map Projection Puzzle: http://gmaps-samples.googlecode.com/svn/trunk/poly/puzzledrag.html
* Animated Map on CartoDB for The Martian: https://whereonmars.cartodb.com/viz/cd68c630-8be7-11e5-81ea-0ecfd53eb7d3/public_map
* Animated grid squares by M Bostock (using a timer): http://bl.ocks.org/mbostock/1009139


## Homework

**Homework 1 (10pt) Create your project site.**

Send me the link to the repo. Make sure it has an index page. Put the CSVs for your data in the repo in a data directory. I will be pulling from your projects to debug and review from now on.  Send me your link as "Repo link".

**Homework 2 (25pt) Two Graphs on a Page!**

Make two charts for your project, on the same page.  Use functions to structure this, so the variables don't stomp on each other.  I won't be judging the content of the vis yet, just structure and making sure they "work" on the same page.



