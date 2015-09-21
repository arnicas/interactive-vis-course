## Week 5: More on Bar Charts, Axes, Simple Lines.


### Homework Review:


## Review on Joins and Scales

A reminder on joins and scales:

* http://animateddata.co.uk/articles/d3/datajoins/?utm_content=buffer6e1c9&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

A reminder on binding data:

http://kristw.github.io/d3-data-binding/?utm_content=buffer4c96b&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer

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

## More Scales: Ordinal and rangeBands / rangeRoundBands

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


## Adding Text Elements

SVG has its own text element.

* Read: https://www.dashingd3js.com/svg-text-element
* Read -- this is about labels on scatterplot circles, but the same principles apply: Labels on elements: http://chimera.labs.oreilly.com/books/1230000000345/ch06.html#_labels_2
* A good overview of d3 with a bunch of SVG element attributes - make sure you read down to the text parts to see how they work: http://www.d3noob.org/2014/02/attributes-in-d3js.html

The text element is used for labels on axes, on data points, annotations... anything! Be aware that you can adjust the location of the text with a dx or dy attribute, to move it up, down, or to the right.  dy with a negative value will move it "up", because the coordinate system is "higher numbers at the bottom of the screen."

Example: Modified version of Jo's bars: http://bl.ocks.org/arnicas/2d34b474c762abe9f4ee

###Tips on Formatting Numbers in D3 in Axes, etc

See http://koaning.s3-website-us-west-2.amazonaws.com/html/d3format.html


**Homework**: See below.

## The Group Element in SVG

You can group elements in SVG using a 'g' node.  The group can be where you attach your data, in some cases.  It doesn't show up as a drawing element on the screen, it just lets you organize things and with classes or id's, it's sometimes easier for styling or selection purposes.

Groups also allow transforms to be applied to them, which affects everything inside the container.

* Read: https://www.dashingd3js.com/svg-group-element-and-d3js

## The D3 Margin Convention

Now that we've seen g's and transforms, we're ready for the classic on margins. This is 
a recommended way to set up margins in D3 -- you can use some or all of this pattern, but the basic idea is that you have padding around your chart, inside the SVG container.

* Mike's post on it: http://bl.ocks.org/mbostock/3019563

## Adding Axes

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

## Putting Margins and Labels and Transforms Together

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


## More Stuff on Bar Charts

Using nested data/ resources:

* Grouped Bar Charts: http://bl.ocks.org/mbostock/3887051
* Nathan's great post on 0 baseline: http://flowingdata.com/2015/08/31/bar-chart-baselines-start-at-zero/


## Homework

Readings:
* Axes: Ch 8: http://chimera.labs.oreilly.com/books/1230000000345/ch08.html


**Homework1** (25pt):
Use the d3 margin conventions to set up your bar chart. Add axes labels, and special color rule for your barchart (change one of the bars, or bars below or above mean/median to a different color). Also, label the end points of your bars with their actual values (see the text section).  Add a hover rule to your CSS, so when the mouse is over the bar, it changes color a little.







