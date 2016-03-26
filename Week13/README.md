
# Week 13: Animation with a Timer, "Play" buttons, More UI


## Homework Review

## Javascript Tips

### More Than One Chart Per Page

One way is to use multiple div tags, with different id's.

* http://www.d3noob.org/2013/07/arranging-more-than-one-d3js-graph-on.html

In this example, there is a nice function for drawing each data set, which means the variables for each graph are in the function scope, not global:

* http://jsfiddle.net/1cqb3uw8/

Ideally, you are using functions to protect your variable scope and encapsulate operations.  This will make debugging easier.

### Using Functions Wisely

TODO: Fill in some stuff here.


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

Timer:

````
setInterval(function() {
  redraw();  // call the function you created to update the chart
}, 1500);  // this is the seconds delay before executing.
````

Redraw function:

````
function redraw() {
  // Update…
  chart.selectAll("rect")
      .data(data)
    .transition()
      .duration(1000)
      .attr("y", function(d) { return h - y(d.value) - .5; })
      .attr("height", function(d) { return y(d.value); });
}
````

### Animated Line Charts

The unrolling effect!  This is all over in real news stories.  So you need to know how to do it.

**Unrolling line charts: http://big-elephants.com/2014-06/unrolling-line-charts-d3js/**

See the examples in **[animated_lines.html](animated_lines.html)**.  You could use this in your own scrolly stories if you wanted to.  Use the second version, for a smoother effect.

The animation delay happens via the interpolation function.

TODO: Fix up the global vars in the animated lines example, add a sync'd animation. Make the animation work right on the segment.


### Animated Paths on Maps

See my example **[animated_map_path.html](animated_map_path.html)** with a play/pause button added to it. (Thanks to Jim Vallandingham for fixing a bug in the timer code.)

Reference:

* Example in http://mtaptich.github.io/d3-lessons/d3-extras/
* On Leaflet, zev ross: http://bl.ocks.org/zross/6a31f4ef9e778d94c204
* Another good tutorial: http://geoexamples.blogspot.com/2014/01/d3-map-styling-tutorial-iii-drawing.html
* Also see this tool from Ben Schmidt to make trails, including animated ones: https://github.com/bmschmidt/D3-trail?utm_content=bufferf9497&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer
  * And demo: http://benschmidt.org/D3-trail/minard.html



### UI Sliders for Timelines

Tom MacWright's control that I recommend: http://www.macwright.org/chroniton/example/.

See my example use of it in **[africa_map_slider.html](africa_map_slider.html).** It has options for configuring it to restart playing, etc.

More related items:

* Play/Pause audio + animation: https://www.bignerdranch.com/blog/music-visualization-with-d3-js/
* Animated borders with a control: https://github.com/maptime-ams/animated-borders-d3js/, the [Demo](http://maptime-ams.github.io/animated-borders-d3js/tutorial/13/).
* Brush as time slider: http://bl.ocks.org/zanarmstrong/ddff7cd0b1220bc68a58
* D3 slider control that is not year/time based: http://thematicmapping.org/playground/d3/d3.slider/



## Recent Interesting Things

* Animated ScrollyTelling Annotated Click Line Chart: http://www.nytimes.com/interactive/2015/11/17/health/wiredwell-food-diary-super-tracker.html?_r=0
* Mercator Map Projection Puzzle: http://gmaps-samples.googlecode.com/svn/trunk/poly/puzzledrag.html
* Animated Map on CartoDB for The Martian: https://whereonmars.cartodb.com/viz/cd68c630-8be7-11e5-81ea-0ecfd53eb7d3/public_map
* Animated grid squares by M Bostock (using a timer): http://bl.ocks.org/mbostock/1009139
* Information is Beautiful Shortlist for Awards: http://www.informationisbeautifulawards.com/showcase?award=2015&pcategory=short-list&type=awards 


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


## Homework

**Homework 1 (10pt) Create your project site.**

Send me the link to the repo. Make sure it has an index page.  I will be pulling from your projects to debug and review from now on.  Send me your link.

**Homework 2 (20pt) Project Progress!**

I'd like to see more development in your project.  Show me where you are and what's blocking you now, if anything.  You can combine this with the one above if you want, but make sure you tell me what progress you made since this week.




