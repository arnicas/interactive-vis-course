## Week 5: More on Bar Charts, Axes, Transforms, Labels...


### Homework Review:

**SVG Selection Homework**

Reminder:

* Using d3 to select all the ellipses, re-style all the ellipses so their fill is blue.
* Using d3 to select all the rectangles, re-style them so their stroke width is 2px instead.
* Use d3 to style all the rectangles so they are pink.
* Then use d3 to style the first rectangle so it is blue.
* Use d3 to select the rectangle with id svg_2 and make the color of the stroke orange.
* Use a CSS style to set the background color of the SVG to a light gray.
* Use a CSS style to set the line stroke to 3px instead.
* Extra credit (5pt): Use a d3 category10() color scale to set the color of the lines.

````
// Use a CSS style to set the background color of the SVG to a light gray.
// Use a CSS style to set the line stroke to 3px instead.
<style>
      svg{
        background-color: #d3d3d3;
      }
      line{
        stroke-width: 3px;
      }
</style>

// Using d3 to select all the ellipses, re-style all the ellipses so their fill is blue.
d3.selectAll("ellipse").style("fill", "blue");

// Using d3 to select all the rectangles, re-style them so their stroke width is 2px instead.
// Use d3 to style all the rectangles so they are pink.
d3.selectAll("rect").style("fill", "pink").style("stroke-width", "2px")
or
d3.selectAll("rect").style({"stroke-width": "2px", "fill": "pink"});

// Then use d3 to style the first rectangle so it is blue.
var rectangles = d3.selectAll("rect")[0];
d3.select(rectangles[0]).style("fill","blue");
or
d3.select("rect").style("fill", "blue");

// Use d3 to select the rectangle with id svg_2 and make the color of the stroke orange.
d3.select("#svg_2").style("stroke","orange");

// Extra credit (5pt): Use a d3 category10() color scale to set the color of the lines.
var colors = d3.scale.category10();
d3.selectAll("line").style("stroke", function(d, i) {
        return colors(i);
});

// Extra Extra credit (3pt): Use d3 to remove the text on top!
d3.selectAll("text").remove();
or
d3.select("text").remove();

````

**Heatmap Tables:**

* Jiaxin's pretty fonts: http://blockbuilder.org/arnicas/92471e6abfd94b938a8a
* Luis's is huge: http://bl.ocks.org/lmelgar/raw/84e7439ecd10c47b4fc3/
* Halina's multi-color columns: http://bl.ocks.org/hmader/4f37cc2ff6703c51a4a1
* Louise's data: http://bl.ocks.org/lwhitaker3/raw/f0b7b87a1d1efb531703/
* Barbara's data: http://bl.ocks.org/DimsumPanda/8128faf2d5ed6f99df60

**Barcharts:**

* Halina's nice labels: http://bl.ocks.org/hmader/raw/5f428acbd45c230400b5/
* Yan's pretty text labels and tooltips: http://bl.ocks.org/yan2014/dbc99ce7e5858d4769db
* Jo's special case colored bar: http://bl.ocks.org/jowang0319/03712cf42713752d62e9

Luis's huge table issue:  Filter the data after read you read it in. Let's do it:
http://blockbuilder.org/arnicas/3a3a0510c4ffe824f008



## Setting Custom Fills By Data Value or Index

What if we want to do special-case rules in our styles?  This is easy, with a tiny bit of JS knowledge!  Just use an if-statement and test for the special case you want to
use in your style rule:

````
// this pattern allows you to test the value of a data element, and set the fill
// for a specific value.

rects.attr("fill", function(d) {
    if (d.region === "The World") {
        return "darkblue";
    } else {
        return "steelblue";
    }
})
````

You could use that same pattern for items with values above a mean, or below. Or median. D3 has some nice math utilities: https://github.com/mbostock/d3/wiki/Arrays. Your if- statement would then have a comparison in it:

````
// Use a d3 helper function to calculate your median (or mean, or whatever)
var median = d3.median(data, function(d) {
    // the value I want to get the mean of:
    return d.year2015;
});
rects.attr("fill", function(d) {
    if (d.year2015 < median) {
        return "red";
    } else {
        return "steelblue";
    }
})
````


 If you want to set a different color for an item at a particlar index, you can use the "i" argument:

````
 rects.attr("fill", function(d,i) {
    // color the first one darkblue:
    if (i === 0) {
        return "darkblue";
    } else {
        return "steelblue";
    }
})
````

## Adding Text Elements

SVG has its own text element.

* Read: https://www.dashingd3js.com/svg-text-element
* Read -- this is about labels on scatterplot circles, but the same principles apply: Labels on elements: http://chimera.labs.oreilly.com/books/1230000000345/ch06.html#_labels_2
* A good overview of d3 with a bunch of SVG element attributes - make sure you read down to the text parts to see how they work: http://www.d3noob.org/2014/02/attributes-in-d3js.html

The text element is used for labels on axes, on data points, annotations... anything! Be aware that you can adjust the location of the text with a dx or dy attribute, to move it up, down, or to the right.  dy with a negative value will move it "up", because the coordinate system is "higher numbers at the bottom of the screen."

Examples:
* Modified version of Jo's bars: http://bl.ocks.org/arnicas/2d34b474c762abe9f4ee
* Halina's end-of-bars text: http://bl.ocks.org/hmader/5f428acbd45c230400b5#file-contraceptive-mortality-select-countries-chart-csv

###Tips on Formatting Numbers in D3 in Axes, etc

See http://koaning.s3-website-us-west-2.amazonaws.com/html/d3format.html


## Review on Joins and Scales

A reminder on joins and scales:

* http://animateddata.co.uk/articles/d3/datajoins/?utm_content=buffer6e1c9&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

A reminder on binding data:

http://kristw.github.io/d3-data-binding/?utm_content=buffer4c96b&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

## More Scales: Ordinal and rangeBands / rangeRoundBands, useful for Axes

All the scale references are here:

* References: Quantitative Scales: https://github.com/mbostock/d3/wiki/Quantitative-Scales
* References: Ordinal Scales: https://github.com/mbostock/d3/wiki/Ordinal-Scales
* References: Time Scales: https://github.com/mbostock/d3/wiki/Time-Scales

In ordinal scales, there is a useful item for categorical axes... the rangebands. (rangeRoundBands s the same except it creates rounded values.)

* https://github.com/mbostock/d3/wiki/Ordinal-Scales#ordinal_rangeBands

````
// from https://github.com/mbostock/d3/wiki/Ordinal-Scales#ordinal_rangeBands
var o = d3.scale.ordinal()
    .domain([1, 2, 3])
    .rangeRoundBands([0, 100]);

o.range(); // [1, 34, 67]
o.rangeBand(); // 33
o.rangeExtent(); // [0, 100]

````

Remember: rangeRoundBands (plural) sets up the bands.  rangeBand() (singular) gives you one of the bands!  Range, like in quantitive scales, tells you what you mapped to! rangeExtent is like d3.extent - the max and min of your range.

If you use an ordinal scale with categorical items, like the names of bars in a bar chart, it will "space them out" for you on the scale.  See axes_labels.html.

### Aside on Javascript Map

Remember last week we made a separate array to get the values of a single column of data, using newArray.push?  We used this for the max/min/extent in the domain settings on scales.

We can also use this handy Javascript map function in our scale:

````
var heightScale = d3.scale.ordinal()
                                .rangeRoundBands([ margin.top, height], 0.2);

heightScale.domain(
    // the map function returns an array of all the d.name values only!
    data.map(function (d) {
        return d.name;
    })
);
````
A map is a way to take an array of items (like data) and return a new array, after doing something to each item.  It's like data.forEach(), except it can save you some typing and extra variables.


## The Group Element in SVG

You can group elements in SVG using a 'g' node.  The group can be where you attach your data, in some cases.  It doesn't show up as a drawing element on the screen, it just lets you organize things and with classes or id's, it's sometimes easier for styling or selection purposes.

Groups also allow transforms to be applied to them, which affects everything inside the container.

* Read: https://www.dashingd3js.com/svg-group-element-and-d3js

## A Reminder on Coordinates in SVG Space

* Read: https://www.dashingd3js.com/using-the-svg-coordinate-space

But -- **alert -- despite that article, never use a "file:///" in your URL.**  I argued about this with him today on Twitter. His examples use no loaded data files, so he has no error such as you will get.


## The D3 Margin Convention

Now that we've seen g's and transforms and the coordinate space, we're ready for the classic on margins. This is a recommended way to set up margins in D3 -- you can use some or all of this pattern (I often skip the "g" translate), but the basic idea is that you have padding around your chart, inside the SVG container.  Then all your coordinates take into account the margin sizes as appropriate.

<img src="margins.png">

````
var svgWidth = 1000,
    svgHeight = 500;

// these are the margins around the graph. Axes labels go in margins.
var margin = {top: 20, right: 25, bottom: 20, left: 200};

var chartWidth = svgWidth - margin.left - margin.right,
    chartHeight = svgHeight - margin.top - margin.bottom;
````

Some more implications of the coordinate system:

A scale for your Y axis values needs to be inverted, if you want higher numbers at the top.  Don't forget this - your range is changed so you map this way:

````
var yScale = d3.scale.linear().range([ height, 0 ]);
````

* Mike's post on it: http://bl.ocks.org/mbostock/3019563

## Transform, Translate: Move a starting coordinate somewhere.

Let's play with http://blockbuilder.org/arnicas/6217eec849a8f270e80d.


## Adding Axes

To understand how axes work in D3, you need to know about groups ("g" in SVG), transforms, coordinate systems, and scales.  So now we're ready!

Axes are a complicated element in D3 that have a lot of little switches to them. The refence with all the options:

* https://github.com/mbostock/d3/wiki/SVG-Axes

And read this:

* Chapter 8: http://chimera.labs.oreilly.com/books/1230000000345/ch08.html

They are set up as a function, and then applied to your data and graph using a "call" function.  You can apply an axis to a selection.

````
var axis = d3.svg.axis()
    .scale(<your scale in here>) // this sets up the right ticks for you!
    .orientation("bottom");  // we've created a scale, but it doesn't appear till we call it with an svg selection.

var svg = d3.select("body").append("svg")
    .attr("width", 1440)
    .attr("height", 30);

// Put them inside a g, group element:
svg.append("g")
    .attr("transform", "translate(0,30)")
    .call(axis);  // here were 'call' the function for the axis.
````

See axes_labels.html.


## Adding an Axis Label: Putting Margins and Labels and Transforms Together

How to add an axis label to your axes.
* http://www.d3noob.org/2012/12/adding-axis-labels-to-d3js-graph.html

This often turns into a trial-and-error routine with transforms. My code in axes_labels.html has:

````
svg.append("text")
    .attr("class", "xlabel")
    .attr("transform", "translate(" + (margin.left + width / 2) + " ," +
                        (height + margin.bottom) + ")")
    .style("text-anchor", "middle")
    .attr("dy", "12")
    .text("Percent");
````
I'm not going to lie, it took me a few tries to get the location right.


## More Stuff on Bar Charts, Dot Plot

Using nested data/ resources:

* Grouped Bar Charts: http://bl.ocks.org/mbostock/3887051
* Nathan's great post on 0 baseline: http://flowingdata.com/2015/08/31/bar-chart-baselines-start-at-zero/

* A dot plot example by me -- this is a modification between a bar chart and a scatterplot! dot_plot.html


## Homework

Readings:
* Axes: Ch 8: http://chimera.labs.oreilly.com/books/1230000000345/ch08.html


**Homework1** (15pt): Turn in the scatterplot we made in class. It should have:
* Dots for the data rows.
* Margins set up with an object.
* Axes labels.
* A special case color on the "World" dot.

**Homework2** (20pt):
Using the bar chart you made already, add a margin (using a margin object) to fix up your bar chart. Add an X axis label, and special color rule for your barchart (change one of the bars, or bars below or above mean/median to a different color). Also, label the end points of your bars with their actual values (see the Text section and Halina's example).  Add a hover rule to your CSS, so when the mouse is over the bar, it changes color a little.

**Homework3** (25pt):
Make a scatter plot with your own data.  Choose a data set that will be appropriate with a scatter plot representation -- comparing 2 scalar (quantitative) values to see if there is a relationship.  Write a text snippet that explains it and identifies the source.

Extra Credit








