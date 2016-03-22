# Week 10: Small Multiples, Map Start

## Homework Review

* Eliot's medals: http://bl.ocks.org/eliot84/raw/11d3ec2710e324af75a4/
* Shi Li's deaths: http://bl.ocks.org/shishi0906/raw/38ca7efd3a1e37d1ffd1/
* Hyan's enrollment: http://bl.ocks.org/hfreitas92/raw/44d14c186be1a594eb4a/ and
http://bl.ocks.org/hfreitas92/raw/39e5c1c5fc174e45fd1b/
* Cibonay's streams: http://bl.ocks.org/cibonaydames/raw/6ff916db76eb2b179932/
* Jennifer's Commuters: http://bl.ocks.org/JenHLab/raw/681648ebf01471b351f1/
* Claudia's terrorists: http://bl.ocks.org/claudialexa/raw/0e0d5d7b80e521722f0b/
* Sherman's enrollment: https://bl.ocks.org/SHewitt95/raw/0197c3ac7cb6e0593810/
* Han's Religions: http://bl.ocks.org/jashcny/raw/549b69d1b59ca48b52ac/

Let's discuss the [JS homework](../Week9/js_homework_done.html).

Also, I added this awesome example:
* [bostock_stacked_to_group.html](../Week9/bostock_stacked_to_group.html): Transition from stacked to grouped and back!  Feel free to use for inspiration.

## Javascript Tips (You Really Need to Know It)

### Review Links

Last week's lesson had some tips on Array.map in Javascript, to help you understand some of the code and some of the HW problems: [Aside on Javascript Keys and Mapping](../Week9/#aside-on-javascript-keys-and-mapping).  Please review that.

D3.nest was introduced in Week7: [D3-nest](../Week7/#d3-nest)

Array.filter was also in Week7: [Array.filter](../Week7/#array.filter)

Sorting and slicing arrays was in Week8: [Sort and Slice Arrays](../Week8/#sort-and-slice-arrays)  -- Right under it is Regex string replacements.

We've been using forEach loops since Week2: [Simple Intro With Data](../Week2/#a-very-simple-d3-intro-with-data).

You should already know object notation and functions in Javascript, as well as how to access elements in an array.


### Sorting Array Alphabetically, Reminder

````
array.sort(function(a, b) {return d3.ascending(a.Country,b.Country);}); // 
or
array.sort() // if there are just strings in the array!
````

But `function(a,b) {return a - b;}` doesn't work for alphabetic sorts.


### Boolean Logic

If you were confused by whether to use `||` or `&&` in the filter, you should bone up on boolean tests in Javascript.

This is an interesting article about real world uses of OR for assignment, but maybe not introductory enough: https://addyosmani.com/blog/exploring-javascripts-logical-or-operator/


### d3.map vs. js Array.map

A few of you used a new construct we haven't talked about in class yet, the d3.map.

Remember, a js array.map loops through an array a lot like a forEach - in this case, making a new array of the d.country values in the data array:

````
var names = data.map(function(d) { return d.country;});
````

D3.map, on the other hand, makes a key:value lookup table (sometimes called a "hash table"). People use them in D3 to make it easier to do a quick value lookup without having to do a filter or other search process on a data array.

The doc page is [here](https://github.com/mbostock/d3/wiki/Arrays#maps).

````
var countryNames = d3.map(data,function(d){
return d.Country;
})
.keys();
````

An example of it in use is in Week11's [world_comparisons.html](../Week11/world_comparisons.html).  Normally you do a "set" for the key, value pairs and a "get" with a key to look up the values in the d3.map.

There are other good d3 array functions on the [D3 Arrays doc page](https://github.com/mbostock/d3/wiki/Arrays).


### D3 Scale Invert to Find a Data Value

This is a useful advanced hack for getting the X axis value from a line or area when you don't have the actual data points.

See the functions in [linked_small_mults.html](linked_small_mults.html) for the mouseovers. The year can be found by checking the x position of the current mouse location and using invert on the x date scale:

````
    var year = xScale.invert(d3.mouse(this)[0]).getFullYear();
````

Read about invert and bisect in the D3 docs.

**getFullYear** is a javascript function that returns the year from a date object:


````
var d = new Date();
var n = d.getFullYear();
````

Also have a look at [moment.js](http://momentjs.com/) if you want to do a lot with dates in Javascript.

See an example of using this in a simpler graph in [stacked_area_invert.html](stacked_area_invert.html). It is not super precise because of the bisect left. Adding a vertical line for the closest year match would help. This is a nice [example](http://bl.ocks.org/mikehadlow/93b471e569e31af07cd3) of that with a crosshair.


### D3's "each" Function

From the d3 docs: https://github.com/mbostock/d3/wiki/Selections#each

    # selection.each(function)

    Invokes the specified function for each element in the current selection, 
    passing in the current datum d and index i, with the this context of the 
    current DOM element. This operator is used internally by nearly every 
    other operator, and can be used to invoke arbitrary code for each selected 
    element. The each operator can be used to process selections recursively, 
    by using d3.select(this) within the callback function.

You'll see each with the small multiples today.  It gives you the (d, i) you need to work with!


### Mike's "Process Data on Load" Function

You can see this in [small_multiples_simple.html](small_multiples_simple.html), a cool trick:

````
function typeFix(d) {
  d.Measles = +d.Measles;
  d.date = parseDate(d.Year);
  return d;
}
````

You invoke it like this:

````
d3.csv("data/deaths_04yearsold_excerpt.csv", typeFix, function(error, data) { ...}
````

Remember, this applies to every row in your data, and your "fix" function must return the row after doing things to it.


## Small Multiples in D3 - More Details

### 3 Approaches from Mike Bostock

* Version 1: http://bl.ocks.org/mbostock/1157787

See [small_multiples_simple.html](small_multiples_simple.html).

This method 1 requires you to calculate the Y axis domain everytime you use it. That makes it harder to create axes labels with it.  Notice that the scale is very different across these graphs but that's not obvious here.  Labeling the last point helps a bit.

* Version 2: http://bl.ocks.org/mbostock/9490313 (uses 'each' and calls the drawing funct)

This method 2 variant calls a function on "each" of the data charts you're drawing, from the data. Also, allows easier actual axes drawing.

See my version in [small_multiples_each.html](small_multiples_each.html). Notice because I'm using a variable for the illness column, it's easy to change that value and redo the page!

* Version 3 of Mike's saves a separate y scale per data set: http://bl.ocks.org/mbostock/9490516

I didn't remake version 3. I prefer version 2.

### Tutorials by Jim Vallandingham


Unfortunately Jim uses Coffeescript, a variant form of javascript (well, it compiles into JS).

* Small Multiples with Details on Demand http://vallandingham.me/small_multiples_with_details.html
* Linked Small Multiples, also by Jim V: https://flowingdata.com/2014/10/15/linked-small-multiples/

Jim's "Linked Small Multiples" article should be read. He has lots of examples that inspired it. He uses Method 2's style -- an "each" function that draws each of the charts.

He also uses the Isotope jquery library: http://isotope.metafizzy.co/  Which you are welcome to use in your own work. (It is okay to use for non-commercial uses.)

See my version in JS: **[linked_small_mults.html](linked_small_mults.html)**  I've also made a pure D3 version without the Isotope library, in **[linked_small_mults_d3pure.html](linked_small_mults_d3pure.html)**.  This is based on code from a [vis about Britain's Diet](http://britains-diet.labs.theodi.org/?es_p=1359956).

The pure D3 approach uses absolute positioning CSS to position the small multiple graphs:

````
    var charts = d3.select("#vis").selectAll(".chart").data(data_to_plot, function(d) { return d.key; });
    charts.enter().append("div")
      .attr("class", "chart")
      .attr("id", function(d) { return "chart-" + d.key; })
      .style("left", function(d, i) { return getLeft(i); }) // set left
      .style("top", function(d, i) { return getTop(i); }) // set top
    .each(appendChart);
````

This requires some functions to get the locations.


### More Examples Inspired by Nathan Yau

Using some UI from a tutorial by Nathan Yau (http://flowingdata.com/2012/01/05/build-interactive-time-series-charts-with-filters/), I also made a transition version:

**[small_multiples_each_trans.html](small_multiples_each_trans.html)**

and a variant with the scales different across each country, to show the comparison not blown out by Nigeria:

**[small_multiples_each_trans_diffaxis.html](small_multiples_each_trans_diffaxis.html)**



## Intro to Maps in D3

Read Mike's tutorial: http://bost.ocks.org/mike/map/

You don't have to do all of it yet.  We may or may not deal with the command line tools in class.

Let's look at [africa_map.html](africa_map.html).

Example of small multiple maps:

* Small Multiple Maps tutorial: http://blog.webkid.io/multiple-maps-d3/


## Project Prep

My grading criteria and student projects from last semester are posted [here](http://blogger.ghostweather.com/2016/01/fall-student-d3js-projects.html).  The only expected change to the grading will be adding some points for good UX design.

Ideally, you have a rich data set already.  You have done some investigation and have a story you'd like to tell with some charts.  You've done some charts already, either in class or in Excel/Tableau.  You are ready to start stitching them together in one big project.


## Homework

Readings:

* https://flowingdata.com/2014/10/15/linked-small-multiples/
* Mike's tutorial: http://bost.ocks.org/mike/map/


**Homework 1 (25pt)**: Make a small multiples display for your own project data. Even if it's only a few multiples!  You can use any of the examples I provided.  I will give extra extra credit points for the more complex work, but the base requirement is to be like the code in small_multiples_simple.html.  Try to stay on your project topic, make something you would really use in it.  Send me the gist as "Week 10, Small Multiples."

**Homework 2 (15pt)**:
Send me a paragraph or 2 about your final project plan.  It's a one-page app, with at least 4 interactive charts of the type we've done.  There must be a data "point" for it to be good work. Do as much of this as you can now.

* What data set will you be using?
* What will your story be?  (If you don't know yet, tell me this.)  A story is something like:
    * Here's all the data for this State over 10 years.
    * Here's a weird change at some point.
    * Here's a zoom in on why, with more or different data.
    * Here's what's interesting about that/what we need to know next.
* If you can identify at least 4 chart types you want to include (including maps), please identify them.  (You can change your mind later.)  Look through all the examples we've done in class so far.
* Extra credit for a sketch with Excel or Tableau static graphs.

