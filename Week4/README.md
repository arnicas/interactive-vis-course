##Week 4: Bar and Line Charts in D3

## Homework Review

## SVG

SVG stands for "scaleable vector graphics."  D3 can create DOM elements that can be manipulated like you've been manipulating other HTML elements, such as `<p>` and `<table>`.  SVG elements include shapes like circles and rectangles, which is why it's useful for creating charts.

D3 can manipulate and draw SVG, which is how many interactive data graphics are created. (An alternative is to use canvas for drawing shapes, but things drawn on canvas can't be manipulated as DOM elements like SVG items can, leading to some downsides.)

A Few Resources:

* Here's a [video introduction to SVG by Scott Murray](https://www.youtube.com/watch?v=qwiRkXnbLtU&feature=youtu.be&list=PL0tDk-f4v1uhQn6iA8M-eGRzIX5Lqsm9F)
* Basics on SVG shapes in D3: https://www.dashingd3js.com/svg-basic-shapes-and-d3js


### Some Resources
* [Pocket Guide to Writing SVG](http://svgpocketguide.com/book/)
* [SVG2D3 tool](http://billautomata.github.io/svg2d3/) by Bill Automata - not good looking D3, but will give you an idea of the relationship and how D3 "builds" SVG.
* A tool to clean up SVG exported from Inkscape or Illustrator: http://codedread.com/scour/

## Bar Charts in D3

### Scales Again

Scales with SVG sizes:

This is a common pattern in D3:

````
    // set up the size of the SVG container for the graph (later we'll add margins)
    var height = 350;
    var width = 300;

    var widthScale = d3.scale.linear().range([ 0, width ]);

    // load the data file

    d3.csv("data/water_improvement_data.csv", function(error, data) {

    // set the domain of the scale, based on the data in the file:

        widthScale.domain([ 0, d3.max(data, function(d) {
            return +d.year2015;
    }) ]);
````

Look at the file and result in [d3_dynamic_domain.html](d3_dynamic_domain.html).

Note that with chaining, you can put your domain and range in any order on your scale function.  d3.scale.linear().domain([]).range([]) is fine, and so is d3.scale.linear.range([]).domain([]).


Using nested data/ resources:

* Grouped Bar Charts: http://bl.ocks.org/mbostock/3887051
* Nathan's great post on 0 baseline: http://flowingdata.com/2015/08/31/bar-chart-baselines-start-at-zero/

## Line Charts



## Readings

* [A Tour Through The Visualization Zoo](http://queue.acm.org/detail.cfm?id=1805128)- some examples of less common visualization techniques, possible in D3.



**Homework**: Make a bar chart

**Homework**: Make a line chart

**Homework**: Pick a static graphic you think could be improved as an interactive.  Email me the link by Monday end of the day with subject: "Week4: Static for Redesign." We will discuss some of them in class.

