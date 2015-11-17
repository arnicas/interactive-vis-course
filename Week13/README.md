
## Week 13: Animation with a Timer, "Play" buttons, UI


### Homework Review:

### Scrollytelling:

* http://bl.ocks.org/lmelgar/raw/f2eed6d1a2536b826fe8/
* http://bl.ocks.org/DimsumPanda/raw/d6ae46c5e6eee4f7fddd/
* http://bl.ocks.org/lwhitaker3/raw/597d7db09fe16c832241/

* Halina's Map: http://bl.ocks.org/hmader/raw/0348f21de2106bd56676/
* Yan's Map: http://bl.ocks.org/yan2014/raw/fd8ce631121b048002aa/
* Jo's scatterplots: http://bl.ocks.org/jowang0319/raw/56c1a815be4b33d1e8d9/


### 3 Charts

* Barbara: http://bl.ocks.org/DimsumPanda/raw/797d49663e8f82969d30/
* Jo: http://bl.ocks.org/jowang0319/raw/4a3cbf8743433f6396d3/
* Louise: http://bl.ocks.org/lwhitaker3/raw/d2ff874aa87a3034fa18/
* Jiaxin (a few bugs still): http://localhost:8000/StudentWork/Week12/jiaxin/
* Yan: http://bl.ocks.org/yan2014/raw/cd88a6b8fba1d0eb988d/


## More than one on a page

One way is to use multiple div tags, with different id's.

* http://www.d3noob.org/2013/07/arranging-more-than-one-d3js-graph-on.html

In this example, there is a nice function for drawing each data set, which means the variables for each graph are in the function scope, not global:

* http://jsfiddle.net/1cqb3uw8/


## Javascript Scope


We should review this for the multiple charts case, and for the general code structuring in your project.  Don't be worried if you are getting tripped up on it, it took me a long time to figure it out at first too.

````
var scale;
var data = [];

scale = d3.scale.linear().range([0, width]);

function doSomething(arg1, arg2) {
    var var1 = scale;
    var data = arg2;

    scale.domain(d3.extent(data, function(d) {return d.value;}));

    data = data.filter(function(d) {return d.country == "United States";});
}

````

Let's discuss that snippet. What's happening in it?


## Animation


One of the most famous animated graphs ever is Hans Rosling's [Gapminder](http://www.gapminder.org/world/#$majorMode=chart$is;shi=t;ly=2003;lb=f;il=t;fs=11;al=30;stl=t;st=t;nsl=t;se=t$wst;tts=C$ts;sp=5.59290322580644;ti=2013$zpv;v=0$inc_x;mmid=XCOORDS;iid=phAwcNAVuyj1jiMAkmq1iMg;by=ind$inc_y;mmid=YCOORDS;iid=phAwcNAVuyj2tPLxKvvnNPA;by=ind$inc_s;uniValue=8.21;iid=phAwcNAVuyj0XOoBL_n5tAQ;by=ind$inc_c;uniValue=255;gid=CATID0;by=grp$map_x;scale=log;dataMin=194;dataMax=96846$map_y;scale=lin;dataMin=23;dataMax=86$map_s;sma=49;smi=2.65$cd;bd=0$inds=;example=75).

Tom Carden (RandomEtc) re-did it in javascript using canvas (not D3):
http://randometc.github.io/mind-gapper-js/

And then Mike Bostock did it too in D3:
Gapminder animation in d3: http://bost.ocks.org/mike/nations/

But his version has a hidden brush (IMO) for the years. Can you find it?



## Animated Paths on Maps

* on Leaflet, zev ross: http://bl.ocks.org/zross/6a31f4ef9e778d94c204

* another good tutorial: http://geoexamples.blogspot.com/2014/01/d3-map-styling-tutorial-iii-drawing.html

* Example in http://mtaptich.github.io/d3-lessons/d3-extras/

* See example animated_map.html with a play/pause button.

Also this tool to make trails:

* https://github.com/bmschmidt/D3-trail?utm_content=bufferf9497&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer
* And demo: http://benschmidt.org/D3-trail/minard.html


## Animated Line Charts

The unrolling effect!  This is all over in real news stories.  So you need to know how to do it.

* Tutorial, Unrolling line charts http://big-elephants.com/2014-06/unrolling-line-charts-d3js/

See the example in **animated_line.html**.  You could use this in your own scrolly stories if you wanted to.  Use the second version, for a smoother effect.

There is no setTimer function because the animation delay happens via the interpolation function.


## Animated Bar Chart

* Animate bars in: http://bl.ocks.org/RandomEtc/cff3610e7dd47bef2d01

Note that again, we set up the page, then load the data, and call a "replay" function that is a timer that calls the "draw" function with new data.

The draw function sets the domains based on current data set, transitions the axes, and does the data binding, exiting, entering, and updating, with transitions.


##UI Sliders

* Brush as time slider: http://bl.ocks.org/zanarmstrong/ddff7cd0b1220bc68a58
* D3 slider examples: http://thematicmapping.org/playground/d3/d3.slider/
* Tom's control: http://www.macwright.org/chroniton/example/

Timer:

setInterval(function() {
  redraw();  // call the function you created to update the chart
}, 1500);

Redraw function:

function redraw() {
  // Update…
  chart.selectAll("rect")
      .data(data)
    .transition()
      .duration(1000)
      .attr("y", function(d) { return h - y(d.value) - .5; })
      .attr("height", function(d) { return y(d.value); });
}


Play/Pause audio + animation: https://www.bignerdranch.com/blog/music-visualization-with-d3-js/

Animated borders with a control: https://github.com/maptime-ams/animated-borders-d3js/
Demo: http://maptime-ams.github.io/animated-borders-d3js/tutorial/13/


## Recent Interesting Things

* Mercator Puzzle: http://gmaps-samples.googlecode.com/svn/trunk/poly/puzzledrag.html

Animated Map on CartoDB for The Martian:

* https://whereonmars.cartodb.com/viz/cd68c630-8be7-11e5-81ea-0ecfd53eb7d3/public_map

* IIB Shortlist for Awards: http://www.informationisbeautifulawards.com/showcase?award=2015&pcategory=short-list&type=awards (I'm a judge.)

## Homework

If it's easier, make a github repo for your project.  Or you can keep putting it all in a gist.






