# Week 6: Line Charts, Simple Mouse Events, Tooltips

##Homework Review


**Interesting scatterplots with OECD Data**:

* Cibonay's: http://bl.ocks.org/cibonaydames/raw/ab01267bce3ec335db6f/

* Sherman on voter turnout: http://bl.ocks.org/SHewitt95/raw/e8a1a1384cdb617130c7/

* Josh: http://bl.ocks.org/CafeConVega/raw/17bebb8a00ee606fd4b9/

**Interesting Personal Scatterplots**:

* Zhou: http://bl.ocks.org/captainelaine/raw/7ee56c564dcc7d67a089/

* Sunny: http://bl.ocks.org/sunnyuxuan/raw/bbbf9903127eded1b26c/

* Cibonay: http://bl.ocks.org/cibonaydames/raw/b423c9c0ad626f1b7ffe/

* Hyan: http://bl.ocks.org/hfreitas92/raw/8baa653c36e3a3a02c1d/

* Jennifer: http://bl.ocks.org/JenHLab/raw/dbe1abdadde126100c59/

* Lots of dots: http://bl.ocks.org/eliot84/raw/e6846da998bb238f86d6/

* Han's bubble plot: http://bl.ocks.org/jashcny/raw/7bb55a6c4034fa00dc8e/

* Luying: http://bl.ocks.org/luluwuluying/raw/5e1406e59aae7886b7a3/

Aside on connected dot plots... Here are some famous examples in this post by Alberto: http://www.thefunctionalart.com/2012/09/in-praise-of-connected-scatter-plots.html


**Bar Charts**:

* Sunny: http://bl.ocks.org/sunnyuxuan/raw/749349b5424cb7e2482b/


###Scatterplot Improvements: Padding, Transparency, Log Scale?

How to add padding on scatterplots... see [Week6/scatter_skeleton_fixed.html](scatter_skeleton_fixed.html), now posted.  The tip is that you can't use just the extents (max and min) of your data for the scales, but you have to add and subtract a little bit on each axes definition:

````
xScale.domain([  // make an array of the min and max minus/plus some padding:
    d3.min(data, function(d) {
        return +d.homicideRate;
        }) - 2,
    d3.max(data, function(d) {
        return +d.homicideRate;
        }) + 2
    ]);

yScale.domain([
    d3.min(data, function(d) {
        return +d.lifeSatisfaction;
    }) - 2,
    d3.max(data, function(d) {
        return +d.lifeSatisfaction;
    }) + 2
]);

````

For data values all on top of each other, use a little transparency in the style sheet.

````
circle.dots {
    fill: steelblue;
    opacity: .7;
}
````


Values all squished together on a linear scale?  Try log scales? or other? See https://github.com/mbostock/d3/wiki/Quantitative-Scales.  Let's try it: http://blockbuilder.org/arnicas/bc3ebc9d6d6d58fac9a2


### Text Labels on the Bars

Selections that don't collide with other elements of the same kind -- add a class to make it more specific!  Position your labels using the xScale, yScale and "dx" and "dy" to adjust the location of the labels.

````
var textlabels = d3.svg.selectAll("text.labels")
    .data(myData)
    .enter()
    .append("text")
    .attr("class", "labels");

````

See the finished example in [bar_axes_labels_on_data.html](bar_axes_labels_on_data.html).

## Responsive Charts in D3 (for Josh Who Keeps Asking)

This is not the full story, but here are some good tips.  They rely on you understanding the margin convention.

* http://eyeseast.github.io/visible-data/2013/08/28/responsive-charts-with-d3/

* More comprehensive: http://blog.webkid.io/responsive-chart-usability-d3/

* https://www.safaribooksonline.com/blog/2014/02/17/building-responsible-visualizations-d3-js/

You get some mileage out of the attributes for "viewBox" and "preserveAspectRatio" on the SVG container component, but it's not the full solution. Feel free to read more.


##Line Charts (and Time)

Line charts take a special form of data - objects with 2 data points, for the x & y coordinates, as an array.  So the real "work" in line charts is getting your data into shape for this.  That means javascript data "munging."

Data for a line might look like:
````
[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object]

where each one of the objects has 2 (or more) attributes:
0: Object
{ emissions: "2880505.507",
  year: "1961" }
````
These are your x and y coordinates for the line function -- where you tell d3 what to use for x and y:

````
var line = d3.svg.line()
                .x(function(d) {
                    return xScale(dateFormat.parse(d.year));
                })
                .y(function(d) {
                    return yScale(d.emissions);
                });
````

We can start with a scatterplot over time:  **[emissions_time_scatterplot.html](emissions_time_scatterplot.html)**

And then turn that data into a lineplot here:

* Lineplot version: **[emissions_lineplot.html](emissions_lineplot.html)**

Now plotting more data, we use g elements for each country (or other "parent", and the values for the line are in another attribute, under "emissions":

````
[
   {
        country: "Australia",
        emissions: [
                    { year: 1961, amount: 90589.568 },
                    { year: 1962, amount: 94912.961 },
                    { year: 1963, amount: 101029.517 },
                    …
                   ]
    },
    {
        country: "Bermuda",
        emissions: [
                    { year: 1961, amount: 176.016 },
                    { year: 1962, amount: 157.681 },
                    { year: 1963, amount: 150.347 },
                    …
                   ]
    },
    …
 ]
````

See my example: **[multiple_lines.html](multiple_lines.html)**

**Reference:**

* For more calm and friendly explanation of lines in d3, watch the line charts video from Scott Murray: https://www.youtube.com/watch?v=QiNi2aYANUc&list=PL0tDk-f4v1ujc8NrGswT158m2y_7bKs3B&index=2
* Read: http://code.tutsplus.com/tutorials/building-a-multi-line-chart-using-d3js--cms-22935


### Labeling Lines Directly

This is a good style for a crowded line chart, especially when it comes to the outliers:

* http://www.nytimes.com/interactive/2016/01/12/upshot/david-bowie-songs-that-fans-are-listening-most-heroes-starman-major-tom.html?_r=1

For reference, multiseries line chart with labelled lines, labels at the end of the line -- follow the tips here.

* A reference version by Mike Bostock: http://bl.ocks.org/mbostock/3884955 [This is more complicated than it has to be because he uses 'datum' to create a simple object for the text label out of the existing data.]
* Simpler version (be sure to read what he says at the top; your data will not be in reverse order!): http://bl.ocks.org/d3noob/8603837

Also, see this simpler example for labeling a single line using scales instead of the "transform(translate)" method:
[emissions_lineplot_label.html](emissions_lineplot_label.html).


### Things That Are Confusing About Line Charts

* Frequently, for multiple line charts, the line data is in a "g" container.  The data array is attached to the g "parent" node, along with other attributes you might need (for stuff like tooltips).
* You see `[ data ]` a lot, because the data needs to be passed as an array to the line function.
* It's a single "mark" (the path) for the array of data -- so for a single line, it's a datum() without a selectAll and enter().  You just append a line element to the parent "g" container.

They will remain a little confusing and different from most of d3.  You might need to come back to this a bit.  But they are incredibly useful chart types, especially with interaction!


### Reminder on Dates in D3

For scales to work with dates, you need to convert your date strings to Javascript dates.  We do that by using d3.time.format().  We 'parse' the incoming date, and in axes tick labels we may want to use another format to print the date on the axis.

References:

* D3 docs on time formatting: https://github.com/mbostock/d3/wiki/Time-Formatting
* Read: http://learnjsdata.com/time.html
* Watch: Working with Dates in D3, Scott Murray: https://www.youtube.com/watch?v=CQsNxDwO5SA&list=PL0tDk-f4v1ujc8NrGswT158m2y_7bKs3B&index=1
* Use: http://bl.ocks.org/zanarmstrong/ca0adb7e426c12c06a95

Example in-class-exercise: Date formatting and parsing in [d3_date_parsing.html](d3_date_parsing.html).


## Intro to D3 Mouse Events

These are probably the most common events you will want to handle with your D3 code:

* selection.on("mouseover", `<do something>`)
* selection.on("mouseout", `<do something>`)
* selection.on("mousemove", `<do something>`)
* selection.on("click", `<do something>`)

The `<do something>` part can either be an anonymous function right in place, or call a named function.  They are equivalent.

In either case, you get access to the magic "this" variable which is roughly speaking the DOM element you were on when the event happens.  Also, the data and index are available to the function, too.

E.g.,

````
// an anonymous function right in place:
rect.on("click", function(d, i) {
    d3.select(this).attr("class", "clicked");
})
````

vs.
````
// create a named function:
function handle_click(d,i) {
    d3.select(this).attr("class", "clicked");
}

// use it in the click event handler:
rect.on("click", handle_click);  // notice you call it by name only, no parens!
````

See **[multiple_lines_mouseover.html](multiple_lines_mouseover.html).**


### D3 Tooltips

There are lots of ways to do tooltips in D3 applications. I'm showing you a simple way that uses HTML, which means you can put any content you want in the tooltip.  We just position it with the window.event (or d3.event) location for where the cursor is when the mouse event is fired.

There are 3 crucial pieces:

* The CSS, which establishes how it is positioned ("absolute")
* the attachment to the **body** (not to the SVG, or another div),
* and then the mouseover, which sets position, text, and visibility.


**GIANT REMINDER: These D3 tooltips MUST be attached to the document body, not to another div inside it. Positioning won't be right otherwise.**


Relevant bits from my file example: [emissions_scatterplot_tooltip.html](emissions_scatterplot_tooltip.html)
````
.tooltip {
    position: absolute;
    z-index: 10;
}

var tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip");

circles
    .on("mouseover", mouseoverFunc) // see below...
    .on("mousemove", mousemoveFunc) // see below...
    .on("mouseout", mouseoutFunc); // see below...
````


If you forget any of them, you'll have a bug!

Example: **[emissions_scatterplot_tooltip.html](emissions_scatterplot_tooltip.html)**

Here's an alternative method using a plugin, d3.tip:  http://labratrevenge.com/d3-tip/.


### Doing Tooltips on Lines is Sometimes Hard(ish)

One issue with lines and tooltips is that the data is an array, and the element itself is a single entity.  A mouseover on it won't know "where" on the line you are, unless you also add dots (we'll do that next week) or use other tricks to find your location.  We'll do these advanced moves next week.

This example file shows how to use classes using a new d3 method, `d3.classed()`.  It's a shorthand for adding a class to an element, and turning it on or off.  This is needed because you may want multiple classes on an element to control styling, and .attr("class") will set only one on it, removing others.

`selection.classed('foo', true)` will set the selection class to "foo,"  so it will be selection.foo.  `selection.classed('foo', false)` will remove the class "foo" from selection.

**Reference**:

* https://github.com/mbostock/d3/wiki/Selections#classed

See **[multiple_lines_mouseover_tooltip.html](multiple_lines_mouseover_tooltip.html)**.  Notice it's kind of hard to target the right line... we'll talk about a method to improve that next week using a voronoi grid.


## Loading Multiple Data Files

You may need to use multiple files to get your timeseries data.
There are a few ways to handle multiple data files.  For now, let's just nest the calls:

````
d3.csv("file1.csv", function(error, data1) {
    d3.csv("file2.csv", function (error, data2) {

        allData = d3.merge([data1, data2]);  // d3.merge will create a single flat array of the arrays.

    }); // end file2
}); // end file1
````

More on d3.merge():

````
d3.merge([ [1], [2, 3] ]); // returns [1, 2, 3]
````

We will use queue() in a few weeks.


## Homework


* Video: For calm and friendly explanation of lines in d3, watch the line charts video from Scott Murray: https://www.youtube.com/watch?v=QiNi2aYANUc&list=PL0tDk-f4v1ujc8NrGswT158m2y_7bKs3B&index=2


**Homework Multiple Lines (40pt)**:

If you don't have it now, download some timeseries data. This means measures of something by year. Make sure you get more than one series (ideally at least 10), but on the same time scale, because we want multiple lines on your chart.  Combine files if you have to in javascript, or combine in Excel/text to make one file with all your data.

* Give the lines mouseovers so that they look different (bolder, thicker, color change?) when the mouse is over them, using classes and `d3.classed().`  Use a mouseover function.
* Give them d3 tooltips that identify what each line is, using the code I showed this week(not a plugin from the internet).
* Label the outlier lines in the right margin (the highest or lowest, ones that are different) using the techniques in "Labeling Lines Directly."  Identify what those lines are with short text.
* Put a short description and identify the source above your chart.

The hardest part of this might be the data manipulations part. If you have data in the "long" format (a year per row) instead of wide (dates as columns), you might need help with it.  Please email/see me.

Send gist and data as "Week 6: Line Plot."


