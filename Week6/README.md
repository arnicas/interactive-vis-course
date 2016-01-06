## Week 6: Line Charts, Simple Mouse Events, Tooltips

##Homework Review

###Axes issues

**Padding**:

How to add padding on scatterplots... see [Week5/scatter_sample.html](../Week5/scatter_sample.html), now posted.

**Bar chart 0 line**:

When we draw bars, we always start from 0.  If we use margin.left as our starting point, we can get screwy results if we don't subtract that from the xscale -- because it's our new 0 point.  It's as if we used a transform, translate(margin.left, margin.top) on the graph before we drew the bars.

For some review of bar charts, including vertical ones with ordinal scales, see Mike Bostock's tutorial (especially part 3): http://bost.ocks.org/mike/bar/3/

###Scatterplots

Class scatterplots - I removed the requirement for axis labels, including Y axis rotated label, so I gave extra points if you did those.

Original Scatterplots:
* http://bl.ocks.org/jowang0319/raw/75274174cfdb526195de/
* http://bl.ocks.org/yan2014/raw/47e20086272f8d492a0a/ (trend line, legend)
* http://bl.ocks.org/hmader/raw/887723d30971a07fcb05/ -- two highlights

Aside on connected dot plots... Here are some famous examples in this post by Alberto: http://www.thefunctionalart.com/2012/09/in-praise-of-connected-scatter-plots.html

Values all squished together on a linear scale?  Try log scales? or other? See https://github.com/mbostock/d3/wiki/Quantitative-Scales.  Let's try it: http://blockbuilder.org/arnicas/bc3ebc9d6d6d58fac9a2

### Bar Charts

Bar chart axes issues... I was after ordinal scale labeling of the bars on the Y axis, as in [Week5/bar_axes_labels.html](../Week5/bar_axes_labels.html).

###Dot Plots

See a lovely example here in Tableau: http://healthintelligence.drupalgardens.com/content/visualizing-human-development-gender-gap


### Selections D3 Reminder!

Selections that don't collide with other elements of the same kind:

````
var textlabels = d3.svg.selectAll("text.labels")
    .data(myData)
    .enter()
    .append("text")
    .attr("class", "labels");

````


## Dates in D3

For scales to work with dates, you need to convert your date strings to Javascript dates.  We do that by using d3.time.format().  We 'parse' the incoming date, and in axes tick labels we may want to use another format to print the date.

D3 docs on time formatting: https://github.com/mbostock/d3/wiki/Time-Formatting

Read: http://learnjsdata.com/time.html
Watch: Working with Dates in D3, Scott Murray: https://www.youtube.com/watch?v=CQsNxDwO5SA&list=PL0tDk-f4v1ujc8NrGswT158m2y_7bKs3B&index=1

Use: http://bl.ocks.org/zanarmstrong/ca0adb7e426c12c06a95

Example: Date formatting and parsing in [d3_date_parsing.html](d3_date_parsing.html).  Let's work through that.


##Line Charts (and Time)

Line charts take a special form of data - objects with 2 data points, for the x & y coordinates, as an array.  So the real "work" in line charts is getting your data into shape for this.  That means javascript munging.

Data for a line might look like:
````
[Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, Object]
where each one of the objects has 2 attributes:
0: Object
{ emissions: "2880505.507",
year: "1961" }
````
These are your x and y coordinates for the line function:

````
var line = d3.svg.line()
                .x(function(d) {
                    return xScale(dateFormat.parse(d.year));
                })
                .y(function(d) {
                    return yScale(d.emissions);
                });
````

Examples:

* Scatterplot: **[emissions_time_scatterplot.html](emissions_time_scatterplot.html)** -- we're turning this data into a line plot:
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


* See my example **[multiple_lines.html](multiple_lines.html)**

For more calm and friendly explanation of lines in d3, watch the line charts video from Scott Murray:

* Video: https://www.youtube.com/watch?v=QiNi2aYANUc&list=PL0tDk-f4v1ujc8NrGswT158m2y_7bKs3B&index=2
* Read: http://code.tutsplus.com/tutorials/building-a-multi-line-chart-using-d3js--cms-22935


### Labeling Lines Directly (for the Extra Credit HW)

For reference, multiseries line chart with labelled lines, labels at the end of the line:

* A reference version by Mike Bostock: http://bl.ocks.org/mbostock/3884955
* Simpler version: http://bl.ocks.org/d3noob/8603837


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


## D3 Tooltips

There are lots of ways to do tooltips in D3 applications. I'm showing you a simple way that uses HTML, which means you can put any content you want in the tooltip.  We just position it with the window.event (or d3.event) location for where the cursor is when the mouse event is fired.

There are 3 crucial pieces:

* The CSS, which establishes how it is positioned ("absolute")
* the attachment to the body (not to the SVG!),
* and then the mouseover, which sets position, text, and visibility.


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

Here's an alternative using a plugin, d3.tip:  http://labratrevenge.com/d3-tip/.




### Doing Tooltips on Lines is Harder

One issue with lines and tooltips is that the data is an array, and the element itself is a single entity.  A mouseover on it won't know "where" on the line you are, unless you also add dots (we'll do that next week) or use other tricks to find your location.  We'll do these advanced moves next week.

This example file shows how to use classes using a new d3 method, `d3.classed()`.  It's a shorthand for adding a class to an element, and turning it on or off.  This is needed because you may want multiple classes on an element to control styling, and .attr("class") will set only one on it, removing others.

`selection.classed('foo', true)` will set the selection class to "foo,"  so it will be selection.foo.  `selection.classed('foo', false)` will remove the class "foo" from selection.

**Reference**: https://github.com/mbostock/d3/wiki/Selections#classed

See **[multiple_lines_mouseover_tooltip.html](multiple_lines_mouseover_tooltip.html)**.


## For the Homework: Combining a Couple of Files If You Have To

There are a few ways to handle multiple data files.  For now, let's just nest the calls:

````
d3.csv("file1.csv", function(error, data1) {
    d3.csv("file2.csv", function (error, data2) {

        allData = d3.merge([data1, data2]);  // d3.merge will create a single flat array of the arrays.

    }); // end file2
}); // end file1
````

More on d3.merge:

````
d3.merge([ [1], [2, 3] ]); // returns [1, 2, 3]
````

## Homeworks

**Homework1 Tooltips & Padding (12pt)**: Using the scatterplot you made for Week5, with your own data (from UNICEF data), make real tooltips using the method in emissions_scatterplot_tooltip.html. Remove your title text element from the dots, after you make the real tooltips.  Add some padding the way I showed you above. Send gist as "Week 6: Scatter tooltips."

**Homework2 Multiple Lines (35pt)**: If you don't have it now, download some timeseries data from UNICEF's data site. This means measures of something by year, such as under 5 mortality each year since 1990.  Make sure you get more than one series, but on the same time scale, because we want multiple lines on your chart.  Combine files if you have to in javascript, or combine in Excel/text to make one file with all your data.

* Give the lines mouseovers so that they look different when the mouse is over them, using classes and d3.classed.
* Give them tooltips that identify what each line is.

The hardest part of this might be the data manipulations part.  Please email/see me for help. Send gist and data as "Week 6: My Line Plot."

**Homework 3, Labeled Lines, Extra Credit Homework (12pt)**: Label the outlier lines (the ones that are very high) on the line plot in multiple_lines.html, using a technique like in the examples above under "Labeling Lines Directly."  The goal here is to have text on the chart at the end of the line, saying what country it is. You can use the last data point in the line to get the text coordinates.
Email me the gist with "Week 6: Labeled Lines."


